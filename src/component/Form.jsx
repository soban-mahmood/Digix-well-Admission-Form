import React from "react";
import logo2 from "../../public/logo2.png";
import DropdownMenue from "./DropdownMenue";

const Form = () => {
  const [data, setData] = React.useState({
    name: "",
    fname: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="text-black">
      <h1>
        <img src={logo2} alt="" className="w-[40vw]" />
      </h1>
      <h3 className="text-center text-[1vw] font-bold text-black">
        Digix Well Admission Form, This Registration is Confidential for <br />
        Our Institute. Fill Your Original Data in this form.
      </h3>
      <div>
        <form onSubmit={handleSubmit} className="mt-10">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              value={data.name}
              onChange={handleChange}
              className="mt-3 m-[5vh] py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[30vw]"
            />
            <input
              type="text"
              placeholder="Enter Your Father Name"
              name="fname"
              required
              value={data.fname}
              onChange={handleChange}
              className="mt-3 m-[5vh] py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[30vw]"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              required
              value={data.email}
              onChange={handleChange}
              className="mt-3 m-[5vh] py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[30vw]"
            />
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              name="phone"
              required
              value={data.phone}
              onChange={handleChange}
              className="mt-3 m-[5vh] py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 w-[30vw]"
            />
          
            <div className="rounded-lg ml-10 outline-none">
              <DropdownMenue />
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 mt-10">
            <h4 className="text-center font-bold text-black">
              <input type="checkbox" required /> By enrolling in this Course, I
              commit to engaging actively in the learning <br />
              process and completing all required assignments to the best of my
              ability.
            </h4>
            <button
              type="submit"
              className="text-white bg-blue-700 w-[15vw] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit Your Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
