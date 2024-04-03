import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-screen  ">
      <div
        className="h-screen  boxShadow mx-auto flex items-end p-2  w-[98%]  lg:max-w-[40%] lg:items-center  lg:p-2"
        style={{ border: "2px solid #dddddd" }}
      >
        <div className="flex flex-col justify-center gap-5 w-[100%] ">
          <h1 className="lg:text-center text-semibold text-[2rem]">
            Wellcome to Porx
          </h1>
          <p className="lg:text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            optio.
          </p>
          <div className="font-semibold flex flex-col gap-3">
            <Link to="/sign-up">
              <button className="rounded-md w-full text-[#ffffff] py-3 bg-[#6c25ff]">
                Create Accout
              </button>
            </Link>
            <Link to="/sign-in">
              <button className="rounded-md w-full text-[#23282C] py-3 bg-[#CEBAFB]">
                {" "}
                Alredy Register?Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
