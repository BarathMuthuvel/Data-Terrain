import IconComponent from "./IconComponent";
import MeetingInfoCard from "../sub-components/MeetingInfoCard";
import person1 from "../../Images/todaycard.png";
import person2 from "../../Images/Mask group (5).png"
import person3 from "../../Images/Mask group (5).png"

const MeetingInfo = () => {
  const interviews = [
    {
      id: 1,
      name: "John Smith",
      position: "Senior Python Developer",
      date: "19th Feb 2024",
      time: "10:30 AM",
      levels: ["7/10", "7/10", "waiting"],
      meetVia: "G-Meet",
      interviewers: ["Stella"], 
      attendees: ["Johnson"],
      interviewerImage: person1,
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Frontend Developer",
      date: "20th Feb 2024",
      time: "11:00 AM",
      levels: ["8/10", "waiting", "waiting"],
      meetVia: "Zoom",
      interviewers: ["Alice"],
      attendees: ["Alice"],
      interviewerImage: person2,
    },
    {
      id: 3,
      name: "Jane Doe",
      position: "React Developer",
      date: "20th Feb 2024",
      time: "11:00 AM",
      levels: ["8/10", "waiting", "waiting"],
      meetVia: "Zoom",
      interviewers: ["Bob"],
      attendees: ["Alice"],
      interviewerImage: person3,
    },
  ];
  
  return (
    <div className="w-[100%] bg-white shadow-md rounded my-5 p-4">
      <div className="flex items-center justify-between h-12 pb-1 border-b">
        <h1 className="text-lg font-semibold">
          Today Interviews Meetings Info
        </h1>
        <IconComponent
          icon="majesticons:more-menu-vertical-line"
          className="text-black h-7 w-7"
        />
      </div>
      <div className="flex overflow-x-scroll max-w-5xl scrollbar">
        {interviews.map((interview) => (
          <MeetingInfoCard key={interview.id} data={interview} />
        ))}
      </div>
    </div>
  );
};

export default MeetingInfo;
