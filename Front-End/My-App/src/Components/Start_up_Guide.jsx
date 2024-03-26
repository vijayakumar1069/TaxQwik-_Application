import React from "react";
import { motion } from "framer-motion";

const Start_up_Guide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="mt-16 p-10"
    >
      <div className="mt-4">
        <h1 className="text-3xl font-bold ">Quick Start Guide for TaxQwik</h1>
        <h4 className="mb-4 text-2xl ">How to Sign Up for Our Services</h4>
      </div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h5 className="text-[#D20062] text-xl font-bold">
          <span className="text-[#240A34] font-bold">Step 1:</span> Enter Your
          Contact Information
        </h5>
        <p className="mt-2">
          To get started, simply enter your full name, email address and phone
          number.
        </p>
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h5 className="text-[#D20062] text-xl font-bold">
          <span className="text-[#240A34] font-bold">Step 2: </span>Select Your
          Package
        </h5>
        <p className="mt-2">
          Next, select the packages that best suit your needs. For example, if
          you’re a couple with two kids, you would select a package with a
          quantity of four.
        </p>
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h5 className="text-[#D20062] text-xl font-bold">
          <span className="text-[#240A34] font-bold">Step 3:</span> Review Your
          Selection
        </h5>
        <p className="mt-2">
          Before submitting your information, be sure to review the summary of
          the services you selected to ensure everything is correct. Please
          note, the pricing information is simply an estimate based on the
          services you request. The actual total can vary based on how much work
          our staff determines is required for your specific needs.
        </p>
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h5 className="text-[#D20062] text-xl font-bold">
          <span className="text-[#240A34] font-bold">Step 4:</span>Submit and
          Wait for Follow-Up
        </h5>
        <p className="mt-2">
          Once you’ve verified that everything is in order, simply submit your
          information and our staff will follow up with you to finalize payments
          and arrange for file-sharing.
        </p>
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="mt-2">
          That’s it! Following these simple steps will ensure a smooth and
          efficient tax-filing process. If you have any questions or concerns
          along the way, please don’t hesitate to reach out to our friendly
          support team for assistance. We’re here to help you every step of the
          way!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Start_up_Guide;
