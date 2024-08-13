import React from "react";
import logo from "../../public/logo.png";
import DropdownMenue from "./DropdownMenue";

const Form = () => {
  const [data, setData] = React.useState({
    name: "",
    fname: "",
    email: "",
    phone: "",
    check: "",
  });

  const [course, setCourse] = React.useState(""); // State for the selected course

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, fname, email, phone } = data; // course is separately managed

    if (name && fname && email && phone && course) {
      try {
        let res = await fetch(
          "https://admission-form-64b5c-default-rtdb.firebaseio.com/user.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              fname,
              email,
              phone,
              course, // Include the selected course
            }),
          }
        );

        if (res.ok) {
          setData({
            name: "",
            fname: "",
            email: "",
            phone: "",
            course: "",
            check:'' // Reset the selected course
          });
          setCourse(" "); // Reset the selected course
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

  return (
    <div className="text-black">
      <div className="p-6 flex flex-col items-center justify-center">
        <img src={logo} alt="" className="h-[60px] w-[120px]" />
        <span className="text-[2rem] text-[#013488] font-black">
          DIGIX WELL
        </span>
      </div>

      <div>
        <p className="text-center font-bold text-black px-4 lg:text-[1vw]">
          Digix Well Admission Form, This Registration is Confidential for Our
          Institute. Fill Your Original Data in this form.
        </p>
        <form className="mt-3" method="POST">
          <div className="p-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              value={data.name}
              onChange={handleChange}
              className="mt-3  py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 w-full"
            />
            <input
              type="text"
              placeholder="Enter Your Father Name"
              name="fname"
              required
              value={data.fname}
              onChange={handleChange}
              className="mt-3  py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 w-full"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              required
              value={data.email}
              onChange={handleChange}
              className="mt-3  py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 w-full"
            />
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              name="phone"
              required
              value={data.phone}
              onChange={handleChange}
              className="mt-3  py-3 text-black font-bold shadow-md rounded-lg flex justify-evenly outline-none p-2 w-full"
            />

            <div className="rounded-lg ml-10 outline-none">
              <DropdownMenue
                course={course}
                setCourse={setCourse}
                value={data.course}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 mt-10">
            <div className="text-center font-bold text-black px-4">
              <input type="checkbox" required name="check" />
              <span className="lg:text-[1vw]">
                By enrolling in this Course, I commit to engaging actively in
                the learning process and completing all required assignments to
                the best of my ability.
              </span>
            </div>
            <button
              onClick={handleSubmit}
              className="text-white bg-[#003489] lg:w-[15vw] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
