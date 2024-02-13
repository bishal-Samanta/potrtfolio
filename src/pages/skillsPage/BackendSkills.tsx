import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";




type BackendSkillsProps = {
    name : string;
    icon : string;
    index : number;
}

export const BackendSkills : React.FC<BackendSkillsProps> = ({ name , icon , index}) => {
    const IconComponent = icon === "TbBrandJavascript" ? TbBrandJavascript : null 
            || icon === "FaHtml5" ? FaHtml5 : null
            
            

    return (
        <div key={index} className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
          {IconComponent ? <IconComponent className="text-[35px] mb-1" /> : (<img src={icon} className=" filter grayscale(100%)" />)}
          <p className="text-[7px]">{name}</p>
        </div>
      );
}
