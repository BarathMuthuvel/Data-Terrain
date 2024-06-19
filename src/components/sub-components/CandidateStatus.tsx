import React from "react";
import Search from "./Search";
import IconComponent from "../container/IconComponent";
import StatusCard from "./StatusCard";

const candidates = [
  {
    jobId: "#001",
    name: "John Doe",
    position: "Designer",
    level1: "6/10",
    level2: "7/10",
    level3: ". . .",
    level4: ". . .",
    totalMarks: ". . .",
    status: "Active",
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  {
    jobId: "#002",
    name: "John Smith",
    position: "Angular Developer",
    level1: "6/10",
    level2: "5/10",
    level3: "5/10",
    level4: "8/10",
    totalMarks: "24/40",
    status: "Hired",
    bg: "bg-green-100",
    text: "text-green-500",
  },
  {
    jobId: "#003",
    name: "Johnson Smith",
    position: "Python Developer",
    level1: "6/10",
    level2: "7/10",
    level3: "3/10",
    level4: ". . .",
    totalMarks: ". . .",
    status: "Active",
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  {
    jobId: "#004",
    name: "Stella",
    position: "Android Developer",
    level1: "6/10",
    level2: "2/10",
    level3: null,
    level4: null,
    totalMarks: "8/40",
    status: "Reject",
    bg: "bg-red-100",
    text: "text-red-500",
  },
  {
    jobId: "#005",
    name: "Randy",
    position: "IOS Developer",
    level1: "6/10",
    level2: "7/10",
    level3: "3/10",
    level4: ". . .",
    totalMarks: ". . .",
    status: "Active",
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  {
    jobId: "#006",
    name: "John Doe",
    position: "Junior Designer",
    level1: "6/10",
    level2: "7/10",
    level3: "3/10",
    level4: ". . .",
    totalMarks: ". . .",
    status: "Active",
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
];

const CandidateStatus = () => {
  return (
    <div className="bg-white w-[100%] shadow-md rounded my-7 p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-lg font-semibold">Candidate Status</h1>
          <h2 className="text-blue-500 underline">View All</h2>
        </div>
        <div className="flex gap-8">
          <Search />
          <button className="px-2 shadow-md flex items-center gap-4">
            <IconComponent
              icon="hugeicons:menu-08"
              className="w-5 cursor-pointer text-blue-500 bg-white h-9"
            />
            Filters{" "}
          </button>
        </div>
      </div>
      <div className="bg-gray-100 p-2 flex mt-6 text-sm border-black border-b-2">
        <p className="w-14">Job ID</p>
        <p className="w-24">Name</p>
        <p className="w-24">Position</p>
        <p className="w-20">1st level</p>
        <p className="w-24">2nd level</p>
        <p className="w-24">3rd level</p>
        <p className="w-24">4th level</p>
        <p className="w-24">Total Marks</p>
        <p className="ml-4 w-20">Status</p>
        <p>Actions</p>
      </div>
      {candidates.map((candidate) => (
        <StatusCard
          key={candidate.jobId}
          jobId={candidate.jobId}
          name={candidate.name}
          position={candidate.position}
          level1={candidate.level1}
          level2={candidate.level2}
          level3={candidate.level3}
          level4={candidate.level4}
          totalMarks={candidate.totalMarks}
          status={candidate.status}
          bg={candidate.bg}
          text={candidate.text}
        />
      ))}{" "}
    </div>
  );
};

export default CandidateStatus;
