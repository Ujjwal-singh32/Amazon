"use client";
import { useState, useEffect, useRef } from 'react';

export default function AdminLoginAndRunner() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const pollingInterval = useRef(null);

  const handleRunScript = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/run-script', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    setMessage(data.message || 'No response');
    setSuccess(data.success || false);

    if (data.success) {
      // Start polling status endpoint every 3 seconds
      pollingInterval.current = setInterval(checkScriptStatus, 3000);
    }
  };

const checkScriptStatus = async () => {
  const res = await fetch('/api/run-script');
  const status = await res.json();

  if (status.finished) {
    clearInterval(pollingInterval.current);

    // ✅ Replace the message with the final result
    setMessage(status.message); 
    setSuccess(status.success);
  }
};


  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(pollingInterval.current);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-orange-500 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="ml-2 text-2xl font-bold text-gray-800">Admin Script Runner</h1>
        </div>

        <form onSubmit={handleRunScript}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Admin Password</label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <p
              className={`text-sm text-center mb-4 p-2 rounded ${
                success ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            Dispatch Shipments
          </button>
        </form>

        <div className="mt-6 p-3 bg-gray-100 rounded text-sm text-gray-600">
          <strong className="block font-medium text-gray-800 mb-1">Security Notice</strong>
          This is a secure admin area. All activities are logged and monitored for security purposes.
        </div>
      </div>
    </div>
  );
}
