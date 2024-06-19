import person from "../../Images/todaycard.png";
import IconComponent from "../container/IconComponent";

const TodayInterviewCard = ({ data }: any) => {
  const {
    name,
    position,
    date,
    time,
    levels,
    meetVia,
    interviewers,
    attendees,
  } = data;
  return (
    <div className="border m-8 flex rounded" style={{ width: "75%" }}>
      <div className="w-80">
        <div className="border-b border-r flex flex-col p-5 justify-center items-center ">
          <img src={person} alt="person" style={{ borderRadius: "50%" }} />
          <div className="py-2 text-sm text-center">
            <p>John Smith</p>
            <p>Senior Python Developer</p>
          </div>
        </div>
        <div className="flex items-center justify-center text-blue-400">
          <div className="border-r  flex flex-col items-center w-1/2">
            <IconComponent
              icon="subway:calendar-1"
              className="w-5 cursor-pointer  bg-white h-9"
            />
            <p className="text-xs ">19th Feb 2024</p>
          </div>
          <div className="border-r flex flex-col items-center w-1/2 py-2">
            <IconComponent
              icon="radix-icons:clock"
              className="w-5 cursor-pointer  bg-white h-9"
            />
            <p className="text-xs ">10:30 AM</p>
          </div>
        </div>
      </div>
      <div className="w-80 text-xs">
        <div className="flex">
          <div className="w-2/3 ">
            <div className="h-[50px] flex items-center justify-center  border-b border-r">
              <p>1st level: 7/10</p>
            </div>
            <div className="h-[50px] flex items-center justify-center border-b border-r">
              <p>2nd Level: 7/10</p>
            </div>
            <div className="h-[50px] flex items-center justify-center border-b border-r">
              <p>3rd Level: waiting</p>
            </div>
            <div className="h-[50px] flex items-center justify-center border-b border-r">
              <p>Meet Via: G-Meet</p>
            </div>
          </div>
          <div className="w-2/3">
            <div className="h-[50px] flex items-center justify-center border-b">
              <p>Interviewer: stella</p>
            </div>
            <div className="h-[50px] flex items-center justify-center border-b">
              <p>Interviewer: Johnson</p>
            </div>
            <div className="h-[50px] flex items-center justify-center border-b">
              <p>Interviewer: Johnson</p>
            </div>
            <div className="h-[50px] flex items-center justify-center border-b">
              <p>Attendees: Johnson</p>
            </div>
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
