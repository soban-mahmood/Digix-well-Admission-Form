import React from "react";
import logo2 from "../../public/logo2.png";
import DropdownMenue from "./DropdownMenue";

const Form = () => {
  const [data, setData] = React.useState({
    name: "",
    fname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly extract the name and value
    setData({ ...data, [name]: value }); // Update the state with the new value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, fname, email, phone } = data;
  
    // Ensure all fields are filled out
    if (name && fname && email && phone) {
      try {
        let res = await fetch(
          "https://form-632c4-default-rtdb.firebaseio.com/Digix-Well-Addmission/user.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              fname: fname,
              email: email,
              phone: phone,
            }),
          }
        );
  
        // Check if the request was successful
        if (res.ok) {
          setData({
            name: "",
            fname: "",
            email: "",
            phone: "",
          });
          alert("Data submitted successfully");
        } else {
          alert("Failed to submit data");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred while submitting the data");
      }
    } else {
      alert("Please fill all the fields");
    }
  };
  ;

  return (
    <div className="text-black">
      <h1>
        <img src={logo2} alt="" className="lg:w-[40vw] sm:[80vw]" />
      </h1>
      <h3 className="text-center lg:text-[1vw] font-bold text-black lg:w-[40vw]">
        Digix Well Admission Form, This Registration is Confidential for Our
        Institute. Fill Your Original Data in this form.
      </h3>
      <div>
        <form className="mt-10" method="POST">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              value={data.name}
              onChange={handleChange}
              className="mt-3 sm:m-[6vw] lg:m-[5vh] py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 sm:w-[50vh] lg:w-[30vw] "
            />
            <input
              type="text"
              placeholder="Enter Your Father Name"
              name="fname"
              required
              value={data.fname}
              onChange={handleChange}
              className="mt-3 sm:m-[6vw] lg:m-[5vh] py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 sm:w-[50vh] lg:w-[30vw]"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              required
              value={data.email}
              onChange={handleChange}
              className="mt-3 sm:m-[6vw] lg:m-[5vh] py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 sm:w-[50vh] lg:w-[30vw]"
            />
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              name="phone"
              required
              value={data.phone}
              onChange={handleChange}
              className="mt-3 sm:m-[6vw] lg:m-[5vh] py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 sm:w-[50vh] lg:w-[30vw]"
            />

            <div className="rounded-lg ml-10 outline-none">
              <DropdownMenue />
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 mt-10">
            <h4 className="text-center font-bold text-black">
              <input type="checkbox" required />{" "}
              <span className="">
                By enrolling in this Course, I commit to engaging actively in
                the learning process and completing all required <br />{" "}
                assignments to the best of my ability.
              </span>
            </h4>
            <button
              onClick={handleSubmit}
              className="text-white bg-blue-700 lg:w-[15vw] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
