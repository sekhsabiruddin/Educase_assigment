import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-screen ">
      <div className="h-screen mx-auto flex items-center justify-center w-[40%]">
        <div className="flex flex-col gap-5 w-[70%]">
          <h1 className="text-center text-semibold text-[2rem]">
            Wellcome to Porx
          </h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            optio.
          </p>
          <div className="font-semibold flex flex-col gap-3">
            <Link to="/sign-in">
              <button className="rounded-md w-full text-[#ffffff] py-3 bg-[#6c25ff]">
                Create Accout
              </button>
            </Link>
            <button className="rounded-md w-full text-[#23282C] py-3 bg-[#CEBAFB]">
              {" "}
              Alredy Register?Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
