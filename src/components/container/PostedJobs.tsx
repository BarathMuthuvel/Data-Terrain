import React from "react";
import Search from "../sub-components/Search";
import IconComponent from "./IconComponent";
import PostedJobsCard from "../sub-components/PostedJobsCard";

const PostedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Python Developer",
      code: "#001",
      position: "Senior developers",
      topApplicants: 258,
      lastMonthComparison: "28%",
      updated: "6 mins ago",
      icon: "logos:python",
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      id: 2,
      title: "Angular Developer",
      code: "#002",
      position: "Mid-Level developers",
      topApplicants: 258,
      lastMonthComparison: "28%",
      updated: "10 mins ago",
      icon: "vscode-icons:file-type-angular",
      bg: "bg-blue-300",
      text: "text-white",
    },
    {
      id: 3,
      title: "Java Developer",
      code: "#003",
      position: "Senior developers",
      topApplicants: 258,
      lastMonthComparison: "28%",
      updated: "6 mins ago",
      icon: "devicon:java",
      bg: "bg-green-800",
      text: "text-white",
    },
    {
      id: 4,
      title: "UX|UI Designers",
      code: "#004",
      position: "Mid-Level developers",
      topApplicants: 258,
      lastMonthComparison: "15%",
      updated: "10 mins ago",
      icon: "vscode-icons:file-type-uiua",
      bg: "bg-blue-900",
      text: "text-white",
    },
  ];

  return (
    <div className="bg-white w-[100%] shadow-md rounded my-7 p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-lg font-semibold">Posted Jobs</h1>
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
      <div className="flex pt-2 border-b-2 gap-4">
        <p className="bg-gray-200 w-32 p-2">Activated Jobs</p>
        <p className="p-2">Inactive Jobs</p>
        <p className="p-2">Completed Jobs</p>
      </div>

      <div className="flex flex-wrap justify-between py-2 gap-2">
        {jobs.map((job) => (
          <PostedJobsCard key={job.id} data={job} />
        ))}
      </div>
    </div>
  );
};

export default PostedJobs;
