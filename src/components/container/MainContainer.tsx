import SideBar from "../SideBar/SideBar";
import ApplicationGraph from "./ApplicationGraph";
import MeetingInfo from "./MeetingInfo";
import PostedJobs from "./PostedJobs";
import CalendarComponent from "../sub-components/Calendar";
import UpcomingCard from "../sub-components/UpcomingCard";
import ActivityCard from "../sub-components/ActivityCard";
import HiringCard from "../sub-components/HiringCard";
import CandidateStatus from "../sub-components/CandidateStatus";
import user1 from "../../Images/user-1 6.png"
import user2 from "../../Images/user-2 1.png"
import user3 from "../../Images/user-3 1.png"
import person1 from "../../Images/Mask group.png"
import person2 from "../../Images/Mask group (1).png"
import person3 from "../../Images/Mask group (2).png"
import person4 from "../../Images/Mask group (3).png"
import person5 from "../../Images/Mask group (4).png"

const upcomingEvents = [
  {
    date: "07",
    month: "Feb",
    title: "Interview with Designer",
    createdBy: "Stella",
    time: "10 A.M to 11 A.M",
    bg: "bg-blue-200",
    text: "text-blue-500",
  },
  {
    date: "08",
    month: "Feb",
    title: "Meeting with Team",
    createdBy: "John",
    time: "1 P.M to 2 P.M",
    bg: "bg-gray-500",
    text: "text-gray-100",
  },
  {
    date: "09",
    month: "Feb",
    title: "Project Review",
    createdBy: "Emma",
    time: "3 P.M to 4 P.M",
    bg: "bg-gray-300",
    text: "text-gray-900",
  },
];

const activities = [
  {
    image: user1,
    name: "John Doe",
    role: "Python Developer",
    description: "Interview with Stella",
    time: "15 mins ago",
  },
  {
    image: user2,
    name: "Jane Smith",
    role: "Frontend Developer",
    description: "Meeting with John",
    time: "30 mins ago",
  },
  {
    image: user3,
    name: "Alice Johnson",
    role: "UI/UX Designer",
    description: "Project Review with Emma",
    time: "1 hour ago",
  },
];

const HiringUpdates = [
  {
    image: person1,
    name: "John Doe",
    description: "Python Developer",
    time: "15 mins ago",
  },
  {
    image: person2,
    name: "Jane Smith",
    description: "Python Developer",
    time: "30 mins ago",
  },
  {
    image: person3,
    name: "Alice Johnson",
    description: "Python Developer",
    time: "1 hour ago",
  },
  {
    image: person4,
    name: "Alice Johnson",
    description: "Python Developer",
    time: "1 hour ago",
  },
  {
    image: person5,
    name: "Jane Smith",
    description: "Python Developer",
    time: "30 mins ago",
  },
];

const MainContainer = () => {
  return (
    <div className="flex my-10 p-1 gap-1">
      <SideBar />
      <div className="py-3 pl-10 flex flex-col w-[94%]">
        <h1 className="text-xl">HR Employee</h1>
        <p className="text-gray-500 my-3">
          Enjoy your selecting potential candidates Tracking and Management
          System.
        </p>
        <div className="w-[100%] my-3">
          <ApplicationGraph />

          <div className="flex gap-2 w-[100%] ">
            <div className="w-[65%]">
              <MeetingInfo />
              <PostedJobs />
              <CandidateStatus />
            </div>
            <div className="w-[34%] border-none">
              <CalendarComponent />
              <div className="my-6  ml-4 w-[83%]">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold">Upcomings</h1>
                  <h3 className="text-sm text-blue-500 underline ">View All</h3>
                </div>
              </div>
              <div>
                {upcomingEvents.map((event, index) => (
                  <UpcomingCard
                    key={index}
                    date={event.date}
                    month={event.month}
                    title={event.title}
                    createdBy={event.createdBy}
                    time={event.time}
                    text={event.text}
                    bg={event.bg}
                  />
                ))}
              </div>
              <div className="my-7 ml-4 w-[83%]">
                <div className=" flex justify-between items-center">
                  <h1 className="text-xl font-semibold">Activity</h1>
                  <h3 className="text-sm text-blue-500 underline ">View All</h3>
                </div>
                <div>
                  {activities.map((activity, index) => (
                    <ActivityCard
                      key={index}
                      image={activity.image}
                      name={activity.name}
                      role={activity.role}
                      description={activity.description}
                      time={activity.time}
                    />
                  ))}
                </div>
              </div>
              <div className="my-7 ml-4 w-[83%]">
                <div className=" flex justify-between items-center">
                  <h1 className="text-xl font-semibold">Hiring Candidates</h1>
                  <h3 className="text-sm text-blue-500 underline ">View All</h3>
                </div>
                <div>
                  {HiringUpdates.map((activity, index) => (
                    <HiringCard
                      key={index}
                      image={activity.image}
                      name={activity.name}
                      description={activity.description}
                      time={activity.time}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
