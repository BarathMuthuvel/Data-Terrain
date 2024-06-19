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
    <div className="shadow-md border px-2 my-5 " style={{}}>
      <div className="flex items-center justify-evenly gap-1 border-b w-60">
        <IconComponent
          icon={icon}
          className="w-5 cursor-pointer text-gray-400 bg-white h-9"
        />
        <p>{title}</p>
        <p>{code}</p>
      </div>
      <div className="my-3 text-center flex flex-col items-center justify-center w-full py-10 border-b ">
        <h3 className="text-sm">{position}</h3>
        <div
          className={`my-5 ${bg} ${text} h-20 py-4 w-24 flex justify-center items-center rounded`}
        >
          <h1 className="text-2xl  font-semibold">{topApplicants}</h1>
        </div>
        <h1 className="text-sm">Top Applicants</h1>
      </div>
      <div className="flex items-center pb-3 justify-between gap-3 text-xs">
        <p className="flex items-center gap-1">
          {" "}
          <span className="text-blue-600 flex items-center">
            {" "}
            <IconComponent
              icon="ph:arrow-up-thin"
              className="w-5 cursor-pointer text-blue-600 bg-white h-9"
            />
            {lastMonthComparison}
          </span>
          vs Last month
        </p>
        <p>{updated}</p>
      </div>
    </div>
  );
};

export default PostedJobsCard;
