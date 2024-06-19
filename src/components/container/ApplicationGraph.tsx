import React from "react";
import Dropdown from "../sub-components/DropDown";
import NewAssessment from "./NewAssessment";
import BarChart from "../sub-components/BarChart";

const GraphContainer = () => {
  return (
    <div className="h-[330px] flex flex-col ">
      <div className="flex flex-col gap-4" style={{ width: "100%" }}>
        <div className="flex gap-4 " style={{ width: "100%" }}>
          <div
            className=" shadow-md  p-4 bg-white  flex items-start h-[330px] rounded"
            style={{ width: "57%" }}
          >
            <div className=" w-[98%] ">
              <div className="flex gap-8 items-center justify-between font-light h-11 ">
                <div className="flex gap-3">
                  <div className="flex gap-3 items-center">
                    <h1 className="text-lg w-44 font-semibold">
                      Application’s Info
                    </h1>
                    <div className="h-5 w-5 bg-blue-700 rounded "></div>
                    <p>Received</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="h-5 w-5 bg-sky-800 rounded"></div>
                    <p>Processed</p>
                  </div>
                </div>
                <div>
                  <Dropdown />
                </div>
              </div>
              <BarChart />
            </div>
          </div>

          <div
            style={{ width: "40%" }}
            className="flex items-center justify-start"
          >
            <NewAssessment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphContainer;
