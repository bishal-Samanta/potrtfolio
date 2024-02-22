import { Education } from "@/configs/education";

type SingleEducationProps = {
  data: Education;
};

export const SingleEducation: React.FC<SingleEducationProps> = ({
  data: { courseName, date, institutionName, location, skills },
}) => {
  return (
    <div
      className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black mb-5 flex flex-col justify-around"
      key={courseName}
    >
      <div className="flex flex-col justify-between">
        <h3 className="font-semibold lg:text-[16px]">{courseName}</h3>
        <h3 className="lg:text-[14px]">{institutionName}</h3>
      </div>
      <div className="pt-5 flex flex-wrap gap-2 justify-center text-[12px] ">
        {skills.map((desc, index) => (
          <div
            className="px-2.5 pb-[4px] py-0.5 bg-[#323539] shadow-2xl rounded-md hover:bg-[#8bbfed] hover:text-[#323539]"
            key={index}
          >
            {desc}
          </div>
        ))}
      </div>

      <div className="flex flex-col text-[12px] mt-4">
        <p className="">{date}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
