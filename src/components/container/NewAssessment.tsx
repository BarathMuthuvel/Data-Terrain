import documentIcon from "../../Images/document_icon.png";
import officeOne from "../../Images/office_girl.png";
import officeTwo from "../../Images/office_girl_2.png";
const NewAssessment = () => {
  return (
    <div className="linear flex items-end w-[92%] h-[330px]  rounded shadow-lg">
      <div className="m-8 flex flex-col text-white w-[280px]">
        <div className="bg-white h-28 w-28 flex items-center rounded ">
          <img src={documentIcon} className="px-8 object-contain" alt="" />
        </div>
        <h1 className="text-5xl py-6 font-semibold">0033</h1>
        <p className="text-lg">New Assessment's</p>
      </div>
      <div className="absolute">
        <div className="flex relative left-40 bottom-10">
          <img
            src={officeTwo}
            alt=""
            className="object-contain h-40  relative left-8"
          />
          <img
            src={officeOne}
            alt=""
            className="object-contain relative bottom-20 h-64"
          />
        </div>
      </div>
      <button className="bg-white p-2 m-5 rounded h-10 w-52 text-sm font-semibold">
        VIEW DETAILS
      </button>
    </div>
  );
};

export default NewAssessment;
