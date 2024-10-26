import React from 'react'
import demo from "../assets/demo.jpg";
import { Link, useNavigate } from "react-router-dom";

function NewCard() {
  const navigate = useNavigate();
  const getDetails = () => navigate("/newsdetails");
  return (
    <>
      <div className="flex flex-wrap justify-center my-4">
  <div className="flex border border-black">
    <div className="bg-red-600 w-[450px] h-[350px]">
      <img src={demo} className="h-full" alt="" />
    </div>
    <div className="bg-white w-[450px] h-[350px]">
      <div className="mt-4 pl-16">
        <h1>
          <span>logo</span> UserName
        </h1>
      </div>
      <div className="mt-5 px-16 mx-auto text-left text-black hover:text-[#6565e2]" onClick={getDetails}>
        <h1 className="text-2xl font-bold">
          Graduation Day of 2024 Batch Students at VVIT
        </h1>
        <h1 className="pt-3">
          Introduction Brief overview of VVIT (Vasireddy Venkatadri Institute of Technology).
          Mention the significance of graduation day for...
        </h1>
      </div>
      <hr className="border-[1px] mx-8 mt-16" />
      <div className="mt-3 px-16">
        <div className="flex justify-between">
          <div>
            <span className="font-light text-sm pr-7">9 Views</span>
            <span className="font-light text-sm">0 comments</span>
          </div>
          <div>
            <span className="font-light mr-0">1 &#9829;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
const NewsMain = () => {
  return (
    <>
      <div className="m-0 p-0 w-[100%] h-[100vh]">
        <div className="flex justify-center my-20">
          <h1 className="text-6xl font-bold text-[#1d1d34]">LATEST NEWS</h1>
        </div>
        <div className="bg-half-color">
          <div className=" h-full w-full">
            <div className="flex  flex-col ">
              <h1 className="text-white text-xl mb-5 text-center mt-2">
                
                <Link to="/">
                  All Posts
                </Link>
              </h1>
              <NewCard />
              <NewCard />
              <NewCard />
              <NewCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsMain
