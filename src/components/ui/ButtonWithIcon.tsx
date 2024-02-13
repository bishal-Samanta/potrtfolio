import React from "react";
import { Button } from "./button"
import { FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";

type ButtonWithIconProps = {
    icon : string;
    name : string;
    className? : string;
    iconStyle? : string;
}

export const ButtonWithIcon : React.FC<ButtonWithIconProps> = ({icon , name , className , iconStyle } ) => {
  const IconComponent = icon === "FaPlay" ? FaPlay : null 
  || icon === "FaGithub" ? FaGithub : null
  || icon === "FaReadme" ? FaReadme : null

  return (
    <Button className={className}>
        {IconComponent && <IconComponent className={`${iconStyle} mr-2`} />}
        {" " + name}
    </Button>

  )
}
