import React from "react";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="h-screen">
      <div className="h-screen mx-auto flex items-center justify-center w-[40%] bg-[#F7F8F9]">
        <div className="flex flex-col gap-5 w-[70%]">
          <Input label="Full Name" plceholder="Enter name" />
          <Input label="Phone number" plceholder="Enter Password " />
          <Input label="Email Address" plceholder="Enter Password " />
          <Input label="Password" plceholder="Enter Password " />
          <Input label="Company name" plceholder="Enter Password " />
          <div>
            <label htmlFor="agency">Are you an agency?</label>
            <br />
            <div className="flex">
              <div>
                <input type="radio" id="yes" name="agency" value="yes" />
                <label htmlFor="yes" className="ml-2">
                  Yes
                </label>
              </div>
              <div className="ml-4">
                <input type="radio" id="no" name="agency" value="no" />
                <label htmlFor="no" className="ml-2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="font-semibold flex flex-col gap-3">
            <Link to="/user-home">
              <button className="rounded-md w-full text-[#ffffff] py-3 bg-[#6c25ff]">
                Create Accout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
