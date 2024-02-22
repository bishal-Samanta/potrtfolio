import { education } from "@/configs/education";
import { useNavigate } from "react-router-dom";
import { SingleEducation } from "./SingleEducation";
import { Typewriter } from "react-simple-typewriter";

export const AboutPage = () => {
  const navigate = useNavigate();

  const handleResumeButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1y1a1dvGDj232aLHK37w7reMwS4ncbHUM/view?usp=sharing",
      "_blank"
    );
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
            <p className=" text-center text-lg md:text-left md:text-[25px] lg:text-[20px]">
              Namaste 🙏🏼 World!
            </p>
            <p className=" text-center md:mt-5 md:text-left md:text-[18px] lg:text-[20px]">
              My name is <strong>Bishal</strong> and I am a{" "}
            </p>
            <div className="text-center text-[20px] font-bold md:text-left lg:text-[25px] min-h-[50px] text-[#8bbfed] ">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Technical Trainer",
                  "Educator",
                ]}
                loop={100}
              />
            </div>
          </div>

          {/* Button Section */}
          <div className="flex justify-center md:justify-start gap-4 md:mt-4 md:mb-14 ">
            <button
              onClick={handleResumeButtonClick}
              className=" bg-[#3c4143] px-3 py-2 rounded-lg shadow-2xl shadow-black lg:text-[14px]"
            >
              Resume
            </button>
            <button
              onClick={handleMyWorkSectionClick}
              className="bg-[#3c4143] px-3 py-2 rounded-lg shadow-2xl shadow-black lg:text-[14px]"
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
                src="https://portfolio-bishal-samanta.vercel.app/assets/propic.183ff822.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 md:px-[100px] lg:px-[15%]">
        <div className="pb-3">
          <h3 className=" font-bold text-xl ml-1">About Me</h3>
        </div>
        <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black lg:px-7 lg:py-7 lg:text-[16px]">
          A Passion-driven MERN stack developer and trainer with hands-on
          experience in teaching complex technology and building scalable
          products. Adaptable to learning new technology, and open to using
          generative AI. Would like to bring his passion to any organization
          that appreciates it and presents ample intellectual challenges.
        </div>
      </div>

      <div className=" pt-14 md:px-[100px] lg:px-[15%]">
        <div className="pb-3">
          <h3 className=" font-bold text-xl ml-1">Education</h3>
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
