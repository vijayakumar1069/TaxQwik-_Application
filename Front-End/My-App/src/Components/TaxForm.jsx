// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setNumReturns } from "../redux/Slice";
// import money from "../assets/money.jpg";

// const TaxForm = () => {
//   const numReturns = useSelector((state) => state.returns.numReturns);
//   const dispatch = useDispatch();
//   const [formData, setFormdata] = useState(
//     Array(numReturns)
//       .fill({})
//       .map((_, i) => {})
//   );
//   console.log(formData);
//   const handlechange=(e)=>
//   {
//     const{id,name,index}=e.target;
//     console.log(id,name,index)
//   }

//   return (
//     <div className="max-w-screen mx-auto">
//       {[...Array(numReturns)].map((_, index) => (
//         <form className="" key={index}>
//           <div className="border text-center">Tax Form{index + 1}</div>
//           <div className="">
//             <h1>
//               Our Team of Professional Accountants Prepares Your Return for You.
//             </h1>
//             <img
//               src={money}
//               alt="moneyimage"
//               className="w-28 h-26 text-center"
//             />
//             <h1>
//               <span>$</span>50
//             </h1>
//           </div>
//           <div className="">
//             <div className="">
//               <input
//                 type="checkbox"
//                 id="T4"
//                 name="T4"
//                 onChange={()=>handlechange(index)}
//               />
//               <label>
//                 {" "}
//                 T4 <span>(Worked as Employee)</span>
//               </label>
//             </div>
//             <div className="">
//               <input type="checkbox" id="Tution" name="tution"  onChange={handlechange} />
//               <label>
//                 {" "}
//                 Tution <span>(Students)</span>
//               </label>
//             </div>
//             <div className="">
//               <input type="checkbox" id="EI" name="EI"  onChange={handlechange} />
//               <label>
//                 {" "}
//                 Employement Insurance <span>(EI)</span>
//               </label>
//             </div>
//             <div className="">
//               <input type="checkbox" id="T5" name="T5"  onChange={handlechange} />
//               <label>
//                 {" "}
//                 T5 <span>(Investments)</span>
//               </label>
//             </div>
//             <div className="">
//               <input type="checkbox" id="Foreign" name="Foreign"  onChange={handlechange} />
//               <label> Foreign Income</label>
//             </div>
//             <div className="">
//               <div className="">
//                 <input type="checkbox" id="Medical" name="Medical Expenses" onChange={handlechange}  />
//                 <label> Medical Expenses</label>
//               </div>
//               <div className="">
//                 <input type="checkbox" id="Donations" name="Donations"  onChange={handlechange} />
//                 <label> Donations</label>
//               </div>
//               <div className="">
//                 <input type="checkbox" id="Sold Home" name="Sold Home"  onChange={handlechange} />
//                 <label>
//                   {" "}
//                   Sold Home <span>(s)</span>
//                 </label>
//               </div>
//               <div className="">
//                 <input
//                   type="checkbox"
//                   id="Rental Income"
//                   name="Rental Income"
//                  onChange={handlechange} />
//                 <label> Rental Income</label>
//               </div>
//               <div className="">
//                 <input type="checkbox" id="T2125/T4A" name="T2125/T4A"  onChange={handlechange} />
//                 <label>
//                   {" "}
//                   T2125/T4A <span>(Self-Employed)</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <input type="checkbox" id="Audit" name="Audit"  onChange={handlechange} />
//             <label>
//               Add Audit Support For This Return{" "}
//               <span>
//                 <a href="">Learn More</a>
//               </span>
//             </label>
//           </div>
//           <div className="">
//             <button>Back</button>
//             <button>Continue</button>
//           </div>
//         </form>
//       ))}
//     </div>
//   );
// };

// export default TaxForm;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumReturns } from "../redux/Slice";
import money from "../assets/money.jpg";

const TaxForm = () => {
  const numReturns = useSelector((state) => state.returns.numReturns);
  const dispatch = useDispatch();
  const [currentForm, setCurrentForm] = useState(0); // Track the current form
  const [formData, setFormData] = useState(Array(numReturns).fill({}));

  const handleCheckboxChange = (index, fieldName) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index] = {
        ...updatedFormData[index],
        [fieldName]: !updatedFormData[index][fieldName],
      };
      return updatedFormData;
    });
  };

  const handleContinue = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleBack = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Here you can dispatch an action to store the form data or perform further processing
  };

  return (
    <div className="max-w-screen mx-auto">
      {formData.map((data, index) => (
        <form
          key={index}
          className={currentForm === index ? "" : "hidden"}
          onSubmit={handleSubmit}
        >
          <div className="border text-center">Tax Form {index + 1}</div>
          {/* Form content */}
          <div className="mt-4">
            <h1 className="text-center font-bold text-lg">
              Our Team of Professional Accountants Prepares Your Return for You.
            </h1>
            <img src={money} alt="moneyimage" className="w-28 h-26 mx-auto" />
            <h1 className="text-center text-xl font-bold">
              <span>$</span>50
            </h1>
          </div>
          {/* Checkboxes */}
          {/* Example checkbox */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id={`return-${index}-T4`}
              checked={formData[index]?.T4}
              onChange={() => handleCheckboxChange(index, "T4")}
              className="mr-2"
            />
            <label htmlFor={`return-${index}-T4`}>T4 (Worked as Employee)</label>
          </div>
          {/* Add more checkboxes */}
          {/* Continue and Back buttons */}
          <div className="flex justify-between mt-8">
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
          </div>
        </form>
      ))}
    </div>
  );
};

export default TaxForm;

