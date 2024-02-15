import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="text-center flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div className=" text-sm">
          Designed and Developed with ❤️ by Bishal Samanta
        </div>
        <div className="text-[10px]">
          © 2023 - 2024 | Bishal Samanta | All rights reserved.
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
