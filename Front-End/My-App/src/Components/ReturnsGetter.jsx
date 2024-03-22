import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumReturns } from "../redux/Slice";

const ReturnsGetter = () => {
  // Get the number of returns from the Redux store
  const numReturns = useSelector((state) => state.returns.numReturns);
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending the data to the backend
    console.log("Number of returns selected:", numReturns);
  };

  return (
    <div className="max-w-screen mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 flex items-center ">
          <label className="block text-gray-700 font-bold mr-2 sm:text-3xl sm:ml-[400px]">
            Number of returns you want to file:
          </label>
          <input
            className="shadow appearance-none border rounded  text-center py-2 px-3 sm:ml-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-auto"
            id="numReturns"
            type="number"
            min={1}
            max={99}
            value={numReturns}
            onChange={(e) => dispatch(setNumReturns(Number(e.target.value)))}
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="btn btn-primary type-button text-white font-bold">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReturnsGetter;
