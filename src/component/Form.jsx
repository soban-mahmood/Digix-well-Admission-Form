import React from "react";
import logo2 from "../../public/logo2.png";
import DropdownMenue from "./DropdownMenue";
const Form = () => {
  return (
    <div className="text-black">
      <h1 className="">
        <img src={logo2} alt="" className="w-[900px]" />
      </h1>
      <h2 className="text-center text-3xl font-bold text-black">
        Digix Well Admission Form ,
        <br />
        This Registration is Confidential for <br /> Our Institute. Fill Your
        Original Data in this form.
      </h2>
      <div>
        <form action="" className="flex gap-50 mt-10 w-[15vw]0 ">
          <div className="">
            <input
              type="text"
              placeholder="Enter Your Name  "
              name=""
              required
              className="mt-3 m-[5vh] py-3 text-black  font-bold  shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[15vw]"
            />
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              name=""
              required
              className="mt-3 m-[5vh] py-3 text-black  font-bold  shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[15vw]"
            />
            <input
              type="text"
              placeholder="Enter Your National ID "
              name=""
              required
              className="mt-3 m-[5vh] py-3 text-black  font-bold  shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[15vw]"
            />
            <div className=" rounded-lg ml-10  outline-none  w-[15vw]  ">
              <DropdownMenue />
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Enter Your Father Name "
              name=""
              required
              className="mt-3 m-[5vh] py-3 text-black  font-bold  shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[15vw]"
            />
            <input
              type="text"
              placeholder="Enter Your Email address"
              name=""
              required
              className="mt-3 m-[5vh] py-3 text-black  font-bold  shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[15vw]"
            />
            <input
              type="text"
              placeholder="Enter Your Gender "
              name=""
              required
              className="mt-3 m-[5vh] py-3 text-black  font-bold  shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[15vw]"
            />

            <input
              type="text"
              placeholder="Enter Your  "
              name=""
              required
              className="mt-3 m-[5vh] py-3 text-black  font-bold  shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[15vw]"
            />
          </div>

        </form>

        <h4 className="text-center  font-bold text-black">
          <input type="checkbox" required /> By enrolling in this Course, I
          commit to engaging actively in the learning <br /> process and
          completing all required assignments to the best of my ability.
        </h4>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">UBmit</button>
      </div>
    </div>
  );
};

export default Form;
