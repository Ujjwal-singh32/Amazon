"use client";
import { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function GoGreenIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000); // Hide after 4s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-green-100 z-50 flex items-center justify-center flex-col gap-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <FaLeaf className="text-green-700 text-6xl animate-pulse" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-2">
              Go Green with Amazon
            </h1>
            <p className="text-green-700 text-lg max-w-md mx-auto">
              Every eco-friendly choice you make supports a sustainable tomorrow.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
