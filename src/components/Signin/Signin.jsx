import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Input from "../Input/Input";
const Signin = () => {
  const inputLabelStyle = {
    color: "#A47AFC",
    fontSize: "1.2rem",
    fontWeight: "600",
    marginTop: "-0.3rem",
  };
  const inputStyle = {
    height: "3rem",
  };

  return (
    <div className="h-screen border-1">
      <div className="h-screen mx-auto flex items-center justify-center border-2 w-[40%]">
        <div className="flex flex-col gap-5 w-[80%]">
          <h1 className="text-center text-semibold text-[2rem]">
            Singup to you account ProX account
          </h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            optio.
          </p>
          <Input label="Email Address" plceholder="Enter email Address" />
          <Input label="Password" plceholder="Enter Password " />
          <div className=" flex flex-col gap-3">
            <Link to="/user-home">
              <button className=" w-full text-[#ffffff] p-2 bg-[#CBCBCB]">
                Longin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
