import React, { useState } from "react";
import { MdEmail, MdCancel } from "react-icons/md";
import { motion } from "framer-motion";

export const HelpButton = () => {
  const [tracking, setTracking] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:vijay.r20799@gmail.com";
  };

  return (
    <motion.div
      className="fixed bottom-10 right-4 z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className={`btn font-bold text-${tracking ? "blue" : "pink"}-500`}
        onClick={() => setTracking(!tracking)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {tracking ? "Close" : "Help"} {tracking ? <MdCancel className="text-2xl" /> : <MdEmail className="text-2xl" />}
      </motion.button>
      {tracking && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-4 mt-2"
        >
          <div className="flex flex-col items-right ">
            <div className="flex  items-center gap-3">
              <p>Email : </p>
              <a href="mailto:vijay.r20799@gmail.com" onClick={handleEmailClick}>vijay.r20799@gmail.com</a>
            </div>
            <div className="flex  items-center gap-3">
              <p>Mobile : </p>
              <p>6381325179</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
