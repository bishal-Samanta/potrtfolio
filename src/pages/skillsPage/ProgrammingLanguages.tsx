import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";


type ProgrammingLanguagesProps = {
    name : string;
    icon : string;
    index : number;
}

export const ProgrammingLanguages : React.FC<ProgrammingLanguagesProps> = ({ name , icon , index}) => {
    const IconComponent = icon === "TbBrandJavascript" ? TbBrandJavascript : null 
            || icon === "FaHtml5" ? FaHtml5 : null
            || icon === "FaCss3Alt" ? FaCss3Alt : null 
            || icon === "FaReact" ? FaReact : null
            || icon === "SiTypescript" ? SiTypescript : null
            || icon === "BiLogoTypescript" ? BiLogoTypescript : null
            || icon === "FaPython" ? FaPython : null
            || icon === "FaJava" ? FaJava : null

    return (
        <div key={index} className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
          {IconComponent && <IconComponent className="text-[40px] mb-1" />}
          <p className="text-sm">{name}</p>
        </div>
      );
}
