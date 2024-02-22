import { education } from "@/configs/education";
import { useNavigate } from "react-router-dom";
import { SingleEducation } from "./SingleEducation";
import { Typewriter } from "react-simple-typewriter";
import aboutDetails from "@/configs/about";

export const AboutPage = () => {
  const navigate = useNavigate();

  const handleResumeButtonClick = () => {
    window.open(aboutDetails.resumeLink, "_blank");
  };

  const handleMyWorkSectionClick = () => {
    navigate("/projects");
  };
  return (
    <div className="flex flex-col px-10 md:text-[20px]">
      <div className="md:grid md:grid-cols-2 md:gap-5 md:px-[100px] lg:px-[15%] ">
        <div className="flex flex-col justify-center gap-7 lg:pr-9 ">
          {/* Intro section */}
          <div className="flex flex-col gap-3 md:mt-16 lg:gap-0">
            <p className=" text-center text-lg md:text-left md:text-[25px] lg:text-[30px]">
              {aboutDetails.intro}
            </p>
            <p className=" text-center md:mt-5 md:text-left md:text-[18px] lg:text-[22px]">
              My name is <strong>{aboutDetails.name}</strong>{" "}
            </p>
            <div className="text-center text-[20px] font-bold md:text-left lg:text-[22px] min-h-[50px] text-[#8bbfed] ">
              <Typewriter words={aboutDetails.designation} loop={100} />
            </div>
          </div>

          {/* Button Section */}
          <div className="flex justify-center md:justify-start gap-4 md:mt-4 md:mb-14 ">
            <button
              onClick={handleResumeButtonClick}
              className=" bg-[#3c4143] px-3 py-2 rounded-lg shadow-2xl shadow-black lg:text-[12px] hover:bg-[#8bbfed] hover:text-black"
            >
              Resume
            </button>
            <button
              onClick={handleMyWorkSectionClick}
              className="bg-[#3c4143] px-3 py-2 rounded-lg shadow-2xl shadow-black lg:text-[12px] hover:bg-[#8bbfed] hover:text-black"
            >
              Projects
            </button>
          </div>
        </div>

        <div className=" pt-8  ">
          <div className="flex justify-end">
            <div className="shadow-2xl p-3 rounded-lg bg-[#383d40] shadow-black h-[300px] w-fit ">
              <img
                className="rounded-lg shadow-2xl shadow-gray-700 h-full"
                src={aboutDetails.profilePhoto}
                alt="profile photo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 md:px-[100px] lg:px-[15%]">
        <div className="pb-3">
          <h3 className=" font-bold text-xl ml-1 text-[#8bbfed]">About Me</h3>
        </div>
        <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black lg:px-7 lg:py-7 lg:text-[16px]">
          {aboutDetails.aboutMeText}
        </div>
      </div>

      <div className=" pt-14 md:px-[100px] lg:px-[15%]">
        <div className="pb-3">
          <h3 className=" font-bold text-xl ml-1 text-[#8bbfed]">Education</h3>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 ">
          {/* Education */}
          {education.map((el) => {
            return <SingleEducation data={el} />;
          })}
        </div>
      </div>
    </div>
  );
};
