import React from "react";
import IconComponent from "../container/IconComponent";

const StatusCard = ({
  jobId,
  name,
  position,
  level1,
  level2,
  level3,
  level4,
  totalMarks,
  status,
  bg,
  text,
}: any) => {
  return (
    <div className="py-2 pr-1 flex my-2 items-center justify-start border-b text-start text-xs">
      <p className="w-[60px] pl-2">{jobId}</p>
      <p className="w-24 px-1">{name}</p>
      <p className="w-28 ">{position}</p>
      <p className="w-20 px-1">{level1}</p>
      <p className="w-24 px-1">{level2}</p>
      <p className="w-24 px-2">{level3 === null ? <span className="bg-red-100 p-2 rounded-full">❌</span> : level3}</p>
      <p className="w-24 px-2">{level4 === null ? <span className="bg-red-100 p-2 rounded-full">❌</span> : level4}</p>
      <p className="w-24 px-2">{totalMarks}</p>
      <p className="w-24 px-1">
        <button className={`border ${bg} ${text} py-1 px-2`}>{status}</button>
      </p>
      <IconComponent
        icon="ph:eye-light"
        className="w-5 ml-2 cursor-pointer text-black bg-white h-9"
      />
    </div>
  );
};

export default StatusCard;
