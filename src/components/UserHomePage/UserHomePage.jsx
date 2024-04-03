import React from "react";
import { Link } from "react-router-dom";
import girlsImg from "../../assets/girls_img.jpg";
import { IoCamera } from "react-icons/io5";
const UserHomePage = () => {
  return (
    <div className="h-screen ">
      <div className="h-screen boxShadow  mx-auto md:[100%] lg:w-[30%] bg-[#F7F8F9]">
        <div className=" flex flex-col gap-5 w-[100%]">
          <div className="bg-white p-4">
            <h1 className="font-semibold text-[18px]">Account Setting</h1>
          </div>
          <div className="grid grid-cols-12 px-2">
            <div
              className="relative col-span-4 p-2 w-20 h-20 rounded-full  bg-[#ffffff] flex justify-center items-center cursor-pointer"
              style={{ border: "2px solid #a8a8a8" }}
            >
              <div className="overflow-hidden p-2 w-20 h-20 ">
                <img src={girlsImg} className="w-full h-full object-cover" />
              </div>
              <div className="absolute right-[-10px] top-10 p-1 bg-[#884EFF] rounded-full">
                <IoCamera className="w-4 h-4  text-white" />
              </div>
            </div>

            <div
              className="col-span-8"
              style={{ fontFamily: "Roboto Serif, serif", fontWeight: "400" }}
            >
              <h1 className="font-semibold">Marry Deo </h1>
              <p className="mt-1">marrydeo@gmail.com </p>
            </div>
          </div>

          <div
            style={{
              fontFamily: "Roboto Serif, serif",
              fontWeight: "400",
              textJustify: "inter-word",
            }}
            className="px-2"
          >
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              incidunt necessitatibus dignissimos hic doloremque nam facilis
              numquam ut voluptate autem.
            </p>
          </div>
          <div className="min-h-[55vh] flex align-center w-full  dashedBorder"></div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
