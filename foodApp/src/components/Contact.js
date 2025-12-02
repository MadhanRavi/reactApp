import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault;
  };
  return (
    <div className="w-4/12 mx-auto bg-amber-100 border border-gray-400 my-4 rounded">
      <h1 className="font-bold text-4xl text-center p-2 m-2">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="m-4">
          <label className="m-4">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="p-2 border border-gray-400"
          />
        </div>
        <div className="m-4">
          <label className="m-4">Email:</label>
          <input
            type="text"
            placeholder="Enter Email"
            className="p-2 border border-gray-400"
          />
        </div>
        <div className="m-4">
          <label className="m-4">Comments:</label>
          <input
            type="text"
            placeholder="Enter Comments"
            className="p-2 border border-gray-400"
          />
        </div>
        <div className="m-4">
          <button
            type="submit"
            className="m-4 bg-gray-200 hover:bg-gray-400 rounded p-4 cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
