import { Experience } from "@/configs/experience";

type SingleExperienceProps = {
  data: Experience;
};

export const SingleExperience: React.FC<SingleExperienceProps> = ({
  data: { positionName, date, location, description },
}) => {
  return (
    <div className="rounded-lg shadow-2xl bg-[#3c4143] px-5 py-4 pb-7 text-center shadow-black">
      <div className="flex flex-col justify-between">
        <h3 className="font-bold">{positionName}</h3>
        <div className="flex flex-col text-sm">
          <p className="">{date}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="pt-5 text-left list-disc text-sm pl-5">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};
