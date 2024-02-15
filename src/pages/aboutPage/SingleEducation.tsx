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
        <h3 className="font-bold">{courseName}</h3>
        <h3 className="font-semibold">{institutionName}</h3>
        <div className="flex flex-col text-sm">
          <p className="">{date}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="pt-5 text-left list-disc text-sm pl-5">
        {skills.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};
