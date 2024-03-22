import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalReturns } from "../redux/Slice";
import { motion } from "framer-motion";

const TaxForm = () => {
  const numReturns = useSelector((state) => state.returns.numReturns);
  const dispatch = useDispatch();
  const [currentForm, setCurrentForm] = useState(0);
  const [formData, setFormData] = useState([]);
  const valueMap = {
    T4: 0,
    Tution: 0,
    T5: 0,
    Employment: 12,
    Foregin: 15,
    Medical: 25,
    Donations: 0,
    Sold: 25,
    Rental: 35,
    T2125: 0,

    Audit: 50,
  };

  useEffect(() => {
    setFormData(
      Array.from({ length: numReturns }, () => ({
        T4: false,
        Tution: false,
        T5: false,
        Employment: false,
        Foregin: false,
        Medical: false,
        Donations: false,
        Sold: false,
        Rental: false,
        T2125: false,
        total: 50,
        Audit: false,
      }))
    );
  }, [numReturns]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const index = currentForm;
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index] = {
        ...updatedFormData[index],
        [name]: checked,
      };
      return updatedFormData;
    });
    if (valueMap.hasOwnProperty(name)) {
      let newTotal = formData[index].total; // Get the current total
      if (checked) {
        newTotal += valueMap[name];
      } else {
        newTotal -= valueMap[name];
      }

      setFormData((prevFormData) => {
        const updatedFormData = [...prevFormData];
        updatedFormData[index] = {
          ...updatedFormData[index],
          total: newTotal,
        };
        return updatedFormData;
      });
    }
  };

  const handleContinue = () => {
    if (currentForm < numReturns - 1) {
      setCurrentForm((prevForm) => prevForm + 1);
    }
  };

  const handleBack = () => {
    if (currentForm > 0) {
      setCurrentForm((prevForm) => prevForm - 1);
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(totalReturns(formData));
  };
  return (
    <div className="max-w-screen mx-auto p-2">
      {formData.map((data, index) => (
        <motion.form
          key={index}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5 }}
          className={index === currentForm ? "" : "hidden"}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="border text-center font-bold p-2 text-[#000]">
            Tax Form {index + 1} / {numReturns}
          </div>
          <div className="flex flex-col mt-4 p-5 ">
            <div className=" mb-4  mx-auto">
              <h1 className="text-2xl font-bold mb-2">
                Our Team of Professional Accountants Prepares Your Return for
                You
              </h1>
              <div className="flex  flex-col text-3xl ml-28 sm:ml-80 ">
                <img
                  src="https://cdn-icons-png.freepik.com/512/6679/6679839.png"
                  alt="Price"
                  className="h-16 w-16 rounded-full bg-gradient-to-l bg-blue-800"
                />
                <div className="font-extrabold text-6xl ml-1  ">
                  {formData[index].total}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:max-w-screen-2xl mx-auto">
              <div>
                <input
                  type="checkbox"
                  name="T4"
                  id={`T4-${index}`}
                  checked={formData[index]?.T4}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`T4-${index}`}>T4 (Worked as Employee)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="T5"
                  id={`T5-${index}`}
                  checked={formData[index]?.T5}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`T5-${index}`}>T5 (Investments)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Tution"
                  id={`Tution-${index}`}
                  checked={formData[index]?.Tution}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`Tution-${index}`}>
                  Tution <span>(Students)</span>{" "}
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Foregin"
                  id={`Foregin-${index}`}
                  checked={formData[index]?.Foregin}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`Foregin-${index}`}>Foregin Income </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Employment"
                  id={`Employment-${index}`}
                  checked={formData[index]?.Employment}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`Employment-${index}`}>
                  Employment Insurance <span>(EI)</span>{" "}
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Medical"
                  id={`Medical-${index}`}
                  checked={formData[index]?.Medical}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`Medical-${index}`}>Medical Expenses </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Donations"
                  id={`Donations-${index}`}
                  checked={formData[index]?.Donations}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`Donations-${index}`}>
                  Donations Expenses{" "}
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Sold"
                  id={`Sold-${index}`}
                  checked={formData[index]?.Sold}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`Sold-${index}`}>
                  Sold Home <span>(s)</span>{" "}
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Rental"
                  id={`Rental-${index}`}
                  checked={formData[index]?.Rental}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`Rental-${index}`}>Rental Income </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="T2125"
                  id={`T2125-${index}`}
                  checked={formData[index]?.T2125}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`T2125-${index}`}>
                  T2125/T4A <span>Self-Employed</span>{" "}
                </label>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="mt-3 text-center">
              <input
                type="checkbox"
                name="Audit"
                id={`Audit-${index}`}
                checked={formData[index]?.Audit}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor={`Audit-${index}`}>
                Add audit support for this return. <a href="">Learn more</a>
              </label>
            </div>
          </div>
          <div className="flex justify-center mb-4  mt-8 gap-x-40">
            {currentForm > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-secondary"
              >
                Back
              </button>
            )}
            {currentForm < numReturns - 1 && (
              <button
                type="button"
                onClick={handleContinue}
                className="btn btn-primary"
              >
                Continue
              </button>
            )}
            {currentForm === numReturns - 1 && (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handlesubmit}
              >
                Submit
              </button>
            )}
          </div>
        </motion.form>
      ))}
    </div>
  );
};

export default TaxForm;
