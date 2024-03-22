import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const TotalCost = () => {
  const totalReturns = useSelector((state) => state.returns.returncount);
  const [subTotal, setSubtotal] = useState(0);

  useEffect(() => {
    let subtotal = 0;
    if (totalReturns) {
      totalReturns.forEach((element) => {
        subtotal += element.total;
      });
    }
    setSubtotal(subtotal);
  }, [totalReturns]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4"
    >
      <div className="text-xl font-semibold mb-4">Estimated Total Cost</div>
      <div className="border p-4 rounded-lg">
        <div className="text-lg font-semibold mb-4">Order Summary</div>
        {totalReturns &&
          totalReturns.map((data, index) => (
            <div key={index} className="mb-4">
              <h1 className="text-lg font-semibold mb-2 text-blue-600">Return {index + 1}</h1>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-wrap gap-y-2 items-center gap-x-2 sm:flex">
                  {data.Tution && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black">Tution</div>
                  )}
                  {data.T4 && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black">T4</div>
                  )}
                  {data.Employment && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black">
                      Employment
                    </div>
                  )}
                  {data.Foregin && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black">Foreign</div>
                  )}
                  {data.Medical && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black font-extrabold">
                      Medical
                    </div>
                  )}
                  {data.Donations && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black font-light">
                      Donations
                    </div>
                  )}
                  {data.Sold && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black">Sold</div>
                  )}
                  {data.Rental && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black">Rental</div>
                  )}
                  {data.T2125 && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black">T2125</div>
                  )}
                  {data.T5 && (
                    <div className="bg-gray-300 p-2 rounded-lg text-black font-extrabold">
                      T5
                    </div>
                  )}
                </div>
                <div className="text-right text-2xl text-blue-700 font-bold"><span>$</span>{data.total}</div>
              </div>
              <hr className="my-4" />
            </div>
          ))}
        <div className="flex justify-between mb-1">
          <div className="font-semibold text-lg">SubTotal</div>
          <div className="text-2xl text-right"><span>$</span>{subTotal}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold text-lg">HST (13%)</div>
          <div className="text-2xl text-right"><span>$</span>{(subTotal * 0.13).toFixed(2)}</div>
        </div>
        <hr />
        <div className="flex justify-between mt-1">
          <div className="font-semibold text-lg">GrandTotal</div>
          <div className="text-2xl text-right"><span>$</span>{(subTotal + subTotal * 0.13).toFixed(2)}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TotalCost;
