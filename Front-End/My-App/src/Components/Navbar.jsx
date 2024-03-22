import React from "react";
import { motion } from "framer-motion";
import LOGO from "../assets/Logo1.png";
import { OUR_BRAND } from "../Constants/ConstantsData";
import { FaAlignJustify } from "react-icons/fa6";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar bg-[#e6e0e0] sm:rounded-box"
    >
      <div className="flex-1 px-2 lg:flex-none">
        <img
          src={LOGO}
          className="w-32 md:w-40 h-auto rounded-md"
          alt="Logo Image"
        />
        <h1 className="text-2xl hidden sm:block ml-4 font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fa4756] to-[#061ef5]">
            {OUR_BRAND.subSlogan}
          </span>
        </h1>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex gap-6 items-stretch">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" text-2xl  hidden sm:block rounded-btn font-bold cursor-pointer active:underline "
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl hidden sm:block rounded-btn  font-bold cursor-pointer active:underline"
          >
            Blogs
          </motion.a>
          <div className="dropdown dropdown-end">
            <details className="dropdown sm:hidden">
              <summary className="m-1 btn sm:hidden">
                <FaAlignJustify />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-52">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Blogs</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
