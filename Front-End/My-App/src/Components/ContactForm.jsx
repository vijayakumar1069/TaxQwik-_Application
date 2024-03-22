import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormdata] = useState({ name: "", email: "", number: "" });

  const handlechange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    setFormdata({ name: "", email: "", number: "" })
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      onSubmit={handleFormSubmit}
      className="max-w-md mx-auto p-6 rounded-lg border border-gray-300 shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          className="border p-3 rounded-md w-full mt-1"
          required
          onChange={handlechange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          className="border p-3 rounded-md w-full mt-1"
          required
          onChange={handlechange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Number" className="block text-sm font-medium text-gray-700">
          Number
        </label>
        <input
          type="text"
          name="number"
          placeholder="Enter your Number"
          className="border p-3 rounded-md w-full mt-1"
          required
          onChange={handlechange}
        />
      </div>
      <ReCAPTCHA
        sitekey="6LeTfqEpAAAAAFGxsfSCVukA-h_biUTuQuTA3zoo"
   
      />
      <button type="submit" className="btn btn-primary font-bold text-lg mt-4">
        Submit
      </button>
    </motion.form>
  );
};

export default ContactForm;
