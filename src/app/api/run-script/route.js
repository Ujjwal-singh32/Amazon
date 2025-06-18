import { exec } from 'child_process';

let scriptStatus = {
  running: false,
  finished: false,
  success: false,
  message: '',
};

export async function POST(req) {
  const body = await req.json();
  const { password } = body;

  if (password !== 'admin123') {
    return new Response(JSON.stringify({ success: false, message: 'Unauthorized' }), { status: 401 });
  }

  if (scriptStatus.running) {
    return new Response(
      JSON.stringify({ success: true, message: 'Script already running...' }),
      { status: 200 }
    );
  }

  scriptStatus = { running: true, finished: false, success: false, message: '' };

  const scriptPath = 'scripts/group.py';
  const command = `/opt/anaconda3/bin/python ${scriptPath}`;

  // Run script async
  exec(command, (error, stdout, stderr) => {
    scriptStatus.running = false;
    scriptStatus.finished = true;

    if (error) {
      scriptStatus.success = false;
      scriptStatus.message = 'Script execution failed';
      console.error('Script error:', stderr);
    } else {
      scriptStatus.success = true;
      scriptStatus.message = 'Shipments dispatched ✅';
      console.log('Script output:', stdout);
    }
  });

  return new Response(
    JSON.stringify({ success: true, message: 'Login successful, code running...' }),
    { status: 200 }
  );
}

// New GET endpoint to check status
export async function GET() {
  return new Response(
    JSON.stringify({
      running: scriptStatus.running,
      finished: scriptStatus.finished,
      success: scriptStatus.success,
      message: scriptStatus.message,
    }),
    { status: 200 }
  );
}
