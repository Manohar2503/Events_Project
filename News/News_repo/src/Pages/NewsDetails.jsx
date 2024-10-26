import React from "react";
import { Link, useNavigate } from "react-router-dom";
import news1 from "../assets/news1.jpg";

const details = () => {
  const navigate = useNavigate();
  const newPage = () => navigate("/newsMain");
  return (
    <>
      <div className="">
        <h1 className="ml-40 mt-10 text-xl font-light">
          <Link to="/newsMain"> All Posts</Link>
        </h1>
        <div className="flex justify-center mt-14">
          <div className="h-auto w-full mx-40  border border-black px-[100px] py-10">
            <h1>
              <span>Logo</span> &nbsp; UserName
            </h1>
            <h1 className="text-4xl font-bold mt-7">
              Graduation Day of 2024 Batch Students at VVIT
            </h1>
            <div className="mt-8">
              <img src={news1} alt="" srcset="" className="w-full" />
            </div>
            <div className="mt-7">
              <h1 className="text-2xl font-semibold">Description</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                voluptatem in at quam voluptates ex iure ipsum vero, dolore odio
                amet ipsa accusamus incidunt necessitatibus non dolorem magni
                fugiat id, labore ratione! Necessitatibus dicta fugiat
                provident, eveniet culpa nihil eaque aliquid distinctio,
                temporibus ea reiciendis? Quod iure exercitationem neque.
                Exercitationem eius officiis assumenda alias delectus molestias
                facilis consectetur incidunt reprehenderit? Accusantium
                reprehenderit sint aut enim quis officiis architecto impedit,
                officia, adipisci tenetur quibusdam minus molestias! Sunt
                pariatur minima labore delectus. Delectus eius incidunt soluta
                dolores corrupti fuga, officia adipisci molestias quas tenetur,
                est et voluptate, officiis perspiciatis repudiandae beatae
                exercitationem.
              </p>
            </div>
            <hr className="border mt-10 " />
            <div className="mt-3">
              <h1 className="text-xl pt-2 pb-4">
                <span className="font-bold pr-10 hover:text-indigo-400">
                  <a href="">f</a>
                </span>
                <span className="font-bold pr-10 text-[25px] hover:text-indigo-400">
                  <a href="">x</a>
                </span>
                <span className="font-bold hover:text-indigo-400">
                  <a href="">in</a>
                </span>
              </h1>
            </div>
            <hr className="border  " />
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
        <div className="flex justify-center my-[4rem] ">
          <button
            className="bg-indigo-400 font-bold   h-[40px] w-[300px] hover:bg-indigo-300"
            onClick={newPage}
          >
            See All
          </button>
        </div>
        <div className="flex justify-center my-10">
          <div className="h-auto w-full mx-40  border border-black">
            <div className="px-[80px] pt-6 mb-10">
              <h1 className="font-bold text-xl">Comments</h1>
              <hr className="border mt-5 " />
              <textarea
                rows="2"
                placeholder="Brief Description"
                className="w-full mt-5 p-2 border border-gray-300 "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
