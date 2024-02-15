import { Education } from "@/configs/education";

type SingleEducationProps = {
  data: Education;
};

export const SingleEducation: React.FC<SingleEducationProps> = ({
  data: { courseName, date, institutionName, location, skills },
}) => {
  return (
    <div
      className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black mb-5"
      key={courseName}
    >
      <div className="flex flex-col justify-between">
        <h3 className="font-semibold">{courseName}</h3>
        <h3>{institutionName}</h3>
        {/* <div className="flex flex-col text-sm">
          <p className="">{date}</p>
          <p>{location}</p>
        </div> */}
      </div>
      <div className="pt-5 flex flex-wrap gap-2 justify-center text-sm ">
        {skills.map((desc, index) => (
          <div
            className="px-2.5 pb-[4px] py-0.5 bg-[#323539] shadow-2xl rounded-md"
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
