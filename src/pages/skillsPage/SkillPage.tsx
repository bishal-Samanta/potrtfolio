import { experience } from "@/configs/experience";
import { SingleExperience } from "./SingleExperience";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";



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

        <div className="pt-9">
          <h3 className=" font-bold text-xl ml-1">Technical Skills</h3>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-3">

          <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
            <FaHtml5 className="text-[40px] mb-1" />
            <p className="text-sm">HTML</p>
          </div>

          <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
            <FaCss3Alt className="text-[40px] mb-1" />
            <p className="text-sm">CSS</p>
          </div>

          <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
            <TbBrandJavascript className="text-[40px] mb-1" />
            <p className="text-sm">CSS</p>
          </div>

          <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
            <FaReact className="text-[40px] mb-1" />
            <p className="text-sm">CSS</p>
          </div>

        </div>
        

      </div>
    </div>
  )
}
