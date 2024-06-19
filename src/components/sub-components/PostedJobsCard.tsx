import React from "react";
import IconComponent from "../container/IconComponent";

const PostedJobsCard = ({ data }: any) => {
  const {
    title,
    code,
    position,
    topApplicants,
    lastMonthComparison,
    updated,
    icon,
    bg,
    text,
  } = data;

  return (
    <div
      className="shadow-md border px-2 my-5"
      style={{ width: "calc(25% - 8px)" }}
    >
      <div className="flex items-center justify-evenly border-b">
        <IconComponent
          icon={icon}
          className="w-5 cursor-pointer text-gray-400 bg-white h-9"
        />
        <p className="text-sm">{title}</p>
        <p className="text-sm">{code}</p>
      </div>
      <div className="my-3 text-center flex flex-col items-center justify-center w-full py-6 border-b ">
        <h3 className="text-sm">{position}</h3>
        <div
          className={`my-5 ${bg} ${text} h-16 py-2 w-20 flex justify-center items-center rounded`}
        >
          <h1 className="text-lg  font-semibold">{topApplicants}</h1>
        </div>
        <h1 className="text-sm">Top Applicants</h1>
      </div>
      <div className="flex items-center pb-3 justify-between gap-3 text-xs">
        <p className="flex items-center gap-1 text-sm">
          <span className="text-blue-600 flex items-center">
            <IconComponent
              icon="ph:arrow-up-thin"
              className="w-3 cursor-pointer text-blue-600 bg-white h-9"
            />
            {lastMonthComparison}
          </span>
          vs Last month
        </p>
        <p className="text-xs">{updated}</p>
      </div>
    </div>
  );
};

export default PostedJobsCard;

