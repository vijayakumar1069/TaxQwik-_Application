import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumReturns } from "../redux/Slice";
import { motion } from "framer-motion";

const ReturnsGetter = () => {
  const numReturns = useSelector((state) => state.returns.numReturns);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNumReturns(count));
  };
  const handlechange = (e) => {
    setCount(e.target.value);
    console.log(count)
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-screen mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mr-2 sm:text-3xl sm:ml-6 xl:ml-96">
            Number of returns you want to file:
          </label>
          <input
  className="shadow appearance-none border rounded text-center py-2 px-3 sm:ml-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-auto"
  id="numReturns"
  type="number"
  min={1}
  max={99}
  defaultValue={0}
  // value={numReturns}
  onChange={(e) => handlechange(e)} // Fix here
/>
        </div>
        <div className="flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary type-button text-white font-bold"
            type="submit"
          >
            Continue
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ReturnsGetter;
