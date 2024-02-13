import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";


type FrontendSkillsProps = {
    name : string;
    icon : string;
    index : number;
}

export const FrontendSkills : React.FC<FrontendSkillsProps> = ({ name , icon , index}) => {
    const IconComponent = icon === "TbBrandJavascript" ? TbBrandJavascript : null 
            || icon === "FaHtml5" ? FaHtml5 : null
            || icon === "IoLogoCss3" ? IoLogoCss3 : null
            || icon === "SiTailwindcss" ? SiTailwindcss : null
            || icon === "SiChakraui" ? SiChakraui : null
            || icon === "FaReact" ? FaReact : null
            || icon === "BiLogoRedux" ? BiLogoRedux : null
            || icon === "SiNextdotjs" ? SiNextdotjs : null
            

    return (
        <div key={index} className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
          {IconComponent ? <IconComponent className="text-[35px] mb-1" /> : (<img src={icon} className=" filter grayscale(100%)" />)}
          <p className="text-sm">{name}</p>
        </div>
      );
}
