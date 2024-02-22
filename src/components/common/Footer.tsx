import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import aboutDetails from "@/configs/about";

export const Footer = () => {
  return (
    <div className="text-center flex flex-col gap-3 pt-5">
      <div className="flex flex-col gap-2">
        <div className=" text-sm">
          {aboutDetails.footerText}
        </div>
        <div className="text-[10px]">
          {aboutDetails.footerCopyright}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <MdOutlineAlternateEmail className="text-xl text-[#d1cdc7]" />
        <IoLogoLinkedin className="text-xl text-[#d1cdc7]" />
        <FaGithub className="text-xl text-[#d1cdc7]" />
      </div>
    </div>
  );
};
