import { experience } from "@/configs/experience";
import { SingleExperience } from "./SingleExperience";



export const SkillPage = () => {
  return (
    <div className="px-10">
       <div className="pt-7">
        <div className="pb-3">
          <h3 className=" font-bold text-xl ml-1">Experience</h3>
        </div>

        <div className="flex flex-col gap-7">

          {experience.map((data , index) => <SingleExperience key={index} data={data} />)}

        </div>
        

      </div>
    </div>
  )
}
