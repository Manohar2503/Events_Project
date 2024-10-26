import React from "react";
import { useLocation } from "react-router-dom";
import demoImg from "../assets/demoImg.jpg";
const EventDetails = () => {
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return <div>No event details found.</div>;
  }

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center">
        <div className="mt-[100px] text-center text-[#5a58c8]">
          <h1 className="text-5xl font-bold">{event.title}</h1>
          <h1 className="pt-5 text-xl font-semibold">
            {event.date} | Event location is {event.location}
          </h1>
          <div className="bg-[#5a58c8] w-64 mx-auto text-white p-5 mt-10">
            <span>Tickets are not on sale</span>
            <br />
            <a href="http://" className="underline">
              See other events
            </a>
          </div>
          <div className="mt-[4rem] w-[160vh] mx-auto">
            <img src={demoImg} alt="" />
          </div>

          <div className="mt-10 mb-10">
            {" "}
            {/* Adding mb class here */}
            <h1 className="text-3xl font-bold">Time & Location</h1>
            <h1 className="pt-5 font-light">
              {event.date}, {event.time}
            </h1>
            <h1 className="font-light">Event location is {event.location}</h1>
          </div>

          <div className="mt-10 ">
            <h1 className="text-3xl font-bold">Description</h1>
            <h1 className="pt-5 font-light">{event.description}</h1>
          </div>

          <div className="mt-10 mb-[50px]">
            <h1 className="text-3xl font-bold">Share This Event</h1>
            <h1 className="text-xl pt-5 pb-10">
              <span className="font-bold pr-10">
                <a href="">f</a>
              </span>
              <span className="font-bold pr-10">
                <a href="">x</a>
              </span>
              <span className="font-bold">
                <a href="">in</a>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
