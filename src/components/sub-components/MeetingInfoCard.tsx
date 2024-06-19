import React from "react";
import IconComponent from "../container/IconComponent";

interface InterviewData {
  name: string;
  position: string;
  date: string;
  time: string;
  levels: string[];
  meetVia: string;
  interviewers: string[];
  attendees: string[];
  interviewerImage: string;
}

const TodayInterviewCard: React.FC<{ data: InterviewData }> = ({ data }) => {
  const {
    name,
    position,
    date,
    time,
    levels,
    meetVia,
    interviewers,
    attendees,
    interviewerImage,
  } = data;
  return (
    <div className="border m-8 flex rounded" style={{ width: "75%" }}>
      <div className="w-80">
        <div className="border-b border-r flex flex-col p-5 justify-center items-center ">
          <img src={interviewerImage} alt="person" style={{ borderRadius: "50%" }} />
          <div className="py-2 text-sm text-center">
            <p>{name}</p>
            <p>{position}</p>
          </div>
        </div>
        <div className="flex items-center justify-center text-blue-400">
          <div className="border-r  flex flex-col items-center w-1/2">
            <IconComponent
              icon="guidance:calendar"
              className="w-5 cursor-pointer  bg-white h-9"
            />
            <p className="text-xs ">{date}</p>
          </div>
          <div className="border-r flex flex-col items-center w-1/2 py-2">
            <IconComponent
              icon="radix-icons:clock"
              className="w-5 cursor-pointer  bg-white h-9"
            />
            <p className="text-xs ">{time}</p>
          </div>
        </div>
      </div>
      <div className="w-80 text-xs">
        <div className="flex">
          <div className="w-2/3 ">
            {levels.map((level, index) => (
              <div key={index} className="h-[50px] flex items-center justify-center  border-b border-r">
                <p>{`Level ${index + 1}: ${level}`}</p>
              </div>
            ))}
            <div className="h-[50px] flex items-center justify-center border-b border-r">
              <p>{`Meet Via: ${meetVia}`}</p>
            </div>
          </div>
          <div className="w-2/3">
            {interviewers.map((interviewer, index) => (
              <div key={index} className="h-[50px] flex items-center justify-center border-b">
                <p>{`Interviewer: ${interviewer}`}</p>
              </div>
            ))}
            {attendees.map((attendee, index) => (
              <div key={index} className="h-[50px] flex items-center justify-center border-b">
                <p>{`Attendee: ${attendee}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-evenly h-[70px]">
          <button className="border border-blue-300 text-blue-500 shadow-md px-3 py-1 h-8 w-36 rounded">
            Reschedule Meeting
          </button>
          <button className="border bg-blue-600 text-white px-3 py-1 h-8 rounded w-36">
            Join Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodayInterviewCard;
