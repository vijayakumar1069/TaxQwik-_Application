import React from "react";
import { motion } from "framer-motion";
import tax2 from "../assets/tax2.jpg";
import ReturnsGetter from "./ReturnsGetter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      {" "}
      {/* Enclosing div for both Hero and ReturnsGetter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero min-h-[500px] mt-16 relative"
        style={{ backgroundImage: `url(${tax2})`, marginBottom: "20px" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-5 text-5xl font-bold"
            >
              Simplify Your Tax Filing Process
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mb-5"
            >
              File your taxes with ease using our user-friendly application. Say
              goodbye to complexity and confusion.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex justify-center"
            >
              <button className="btn btn-primary mr-3">
                <Link to="/startup-guide">Get Started</Link>
              </button>
              <button>
                <Link
                  to="/blogs"
                  className="btn btn-secondary hover:opacity-80"
                >
                  Learn More
                </Link>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <ReturnsGetter />{" "}
      {/* ReturnsGetter component is rendered after the motion.div */}
    </div>
  );
};

export default Hero;
