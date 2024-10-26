
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EventsData from "../Data/EventsData";


function EventCard({ event }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const getDetails = () => navigate("/event-details",{ state: { event } });
  
  
    const toggleDetails = () => {
      setIsOpen((prev) => !prev);
    };
  
    return (
      <div className="bg-white mr-5">
        {/* Main Event Card */}
        <div
          className="px-10 py-10 cursor-pointer"
          onClick={toggleDetails}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Event Header */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">{event.date}</p>
              <h1
                className={`text-3xl font-thin ${
                  isHovered ? "text-blue-600" : "text-black"
                }`}
              >
                {event.title} /{" "}
                <span className="text-xl">Event Location {event.location}</span>{" "}
                {isOpen ? "▴" : "▾"}
              </h1>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={getDetails}>
              Details
            </button>
          </div>
  
          {/* Conditional Rendering of Details */}
          {isOpen && (
            <div className="mt-4 text-gray-600">
              <p>
                {event.date}, {event.time}
              </p>
              <p>Event location is {event.location}.</p>
            </div>
          )}
        </div>
        <hr
          className={`mx-5 border-1 ${
            isHovered ? "border-blue-600" : "border-gray-200"
          } `}
        />
      </div>
    );
  }
  
const EventsMain = () => {
  return <>
    <div>
        <div className="w-full h-[200px] flex justify-center items-center">
          <h1 className="text-7xl font-bold">Alumni Nexus Events</h1>
        </div>
        <div className="bg-[#1d1d34] w-full h-full  z-0">
          <div className="w-full h-[70px]"></div>
          {EventsData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}

          <div className="w-full h-[100px]"></div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col gap-6">
            <h1 className="mt-[100px] text-5xl font-bold text-gray-800">
              Wanna Conduct an Event?
            </h1>
            <h2 className=" text-center text-xl">
              Please take a moment to fill out the form.
            </h2>
          </div>
        </div>
        {/* form details */}
        <div className="flex justify-center items-center min-h-screen">
          <form className=" p-8  w-full max-w-4xl">
            <div className="flex justify-between w-full">
              {/* Left Column */}
              <div className="w-1/2 pr-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Event Name</label>
                  <input
                    type="text"
                    placeholder="Event Name"
                    className="w-full mt-2 p-2 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Aim</label>
                  <input
                    type="text"
                    placeholder="Aim"
                    className="w-full mt-2 p-2 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">No. of Members</label>
                  <input
                    type="text"
                    placeholder="No. of Members"
                    className="w-full mt-2 p-2 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email *</label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full mt-2 p-2 border  "
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Subject *</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full mt-2 p-2 border  "
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-1/2 pl-4">
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Brief Description about your event...
                  </label>
                  <textarea
                    rows="16"
                    placeholder="Brief Description"
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3  hover:bg-white hover:text-blue-600  hover:border hover:border-blue-400 transition-all duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  </>
}

export default EventsMain