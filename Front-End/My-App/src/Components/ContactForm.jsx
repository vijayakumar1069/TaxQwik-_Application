import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const [formData, setFormdata] = useState({ name: "", email: "", number: "" });
  const returncount = useSelector((state) => state.returns.returncount);
  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState(false);

  const handlechange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, returncount }),
      });
      const data = await res.json();
      if (data.success) {
        setMsg(data.success);
      } else {
        setErr(data.error);
      }

      setFormdata({ name: "", email: "", number: "" });
    } catch (error) {
      console.error("Error:", error);
      // Handle the error (e.g., display an error message to the user)
    }
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
        <label
          htmlFor="Name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          className="border p-3 rounded-md w-full mt-1"
          required
          value={formData.name}
          onChange={handlechange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          className="border p-3 rounded-md w-full mt-1"
          required
          value={formData.email}
          onChange={handlechange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Number"
          className="block text-sm font-medium text-gray-700"
        >
          Number
        </label>
        <input
          type="text"
          name="number"
          placeholder="Enter your Number"
          className="border p-3 rounded-md w-full mt-1"
          required
          value={formData.number}
          onChange={handlechange}
        />
      </div>
      <ReCAPTCHA sitekey="6LeTfqEpAAAAAFGxsfSCVukA-h_biUTuQuTA3zoo" />
      <button type="submit" className="btn btn-primary font-bold text-lg mt-4">
        Submit
      </button>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: msg ? 1 : 0, y: msg ? 0 : -20 }}
        className="text-green-500 text-center font-bold mb-2"
      >
        {msg}
      </motion.div>

  
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: err ? 1 : 0, y: err ? 0 : -20 }}
        className="text-red-500 text-center font-bold mb-2"
      >
        {err}
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
