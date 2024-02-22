import { ButtonWithIcon } from "@/components/ui/ButtonWithIcon";
import { projects } from "@/configs/sampleProjects";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";



export const ProjectsPage = () => {
  const properties = {
    prevArrow: (
      <GrFormPrevious className="text-xl text-white bg-gray-500 rounded-full ml-2 backdrop-blur-md" />
    ),
    nextArrow: (
      <GrFormNext className="text-xl text-white bg-gray-500 rounded-full mr-2 backdrop-blur-md" />
    ),
  };

  return (
    <div className="px-10 md:px-[12%] lg:px-[8%]">
      <div className="pt-5 pb-3">
        <h3 className=" font-bold text-xl ml-1">Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 gap-x-7 lg:grid-cols-3">
        {projects.map((project, index) => {
          return (
            <div key={index} className="">
              <div className="rounded-lg shadow-2xl bg-[#3c4143] px-3 py-3 text-center shadow-black ">
                {/* Image carosal */}
                <div>
                  <Fade {...properties}>
                    {project.hero_image_link.map((image, index) => {
                      return (
                        <div key={index} className="each-fade">
                          <div className="image-container h-[160px] lg:h-[180px]">
                            <img
                              src={image.url}
                              alt={image.caption}
                              className="border-gray-400 border-2 rounded-lg shadow-2xl shadow-black h-full w-[100%] object-cover"
                            />
                            {/* <h2>{image.caption}</h2> */}
                          </div>
                        </div>
                      );
                    })}
                  </Fade>
                </div>

                {/* Remaining CARD */}
                <div className="">
                  {/* Part 1 */}
                  <div>
                    <div className="w-[100%] mb-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-left mt-1.5 text-lg text-[#97baff] lg:text-[16px]">
                          {project.title}
                        </h3>

                        <div className=" text-[10px] px-2.5 pb-[4px] py-0.5 bg-[#323539] shadow-2xl rounded-md mt-2">
                          {project.tags}
                        </div>
                      </div>

                      <p className="text-left text-sm lg:text-[12px]">
                        {project.sub_title}
                      </p>
                      <p className="text-left text-sm lg:text-[12px] ">
                        {project.content}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[12px] font-bold text-left mt-1">
                        Features :{" "}
                      </h3>
                      {project.features.map((feature, index) => {
                        return (
                          <ul className=" list-disc">
                            <li
                              key={index}
                              className="text-[12px] text-left ml-4"
                            >
                              {feature}
                            </li>
                          </ul>
                        );
                      })}
                    </div>

                    <div className="pt-3">
                      <h3 className="font-bold text-left mt-1 text-[12px]">
                        Tech Stacks :{" "}
                      </h3>
                      <div className="pt-2 flex flex-wrap gap-2 justify-start text-[12px] ">
                        {project.techStack.map((techStack, index) => {
                          return (
                            <div
                              className="px-2.5 pb-[4px] py-0.5 bg-[#323539] shadow-2xl rounded-md text-[10px]"
                              key={index}
                            >
                              {techStack}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Part 2 */}
                  <div>
                    <div className="flex justify-end gap-2 pt-1">
                      <ButtonWithIcon
                        icon="FaGithub"
                        name="Github"
                        className=" shadow-2xl bg-[#2e3234] px-3 font-semibold text-[12px] hover:bg-[#97baff] hover:text-[#2e3234] lg:text-[10px]"
                      />
                      <ButtonWithIcon
                        icon="FaPlay"
                        name="Deployed"
                        className=" shadow-2xl bg-[#2e3234] px-3 font-semibold text-[12px] lg:text-[10px]"
                        iconStyle=" text-[10px]"
                      />
                      {/* <button className="bg-[#2e3234] px-3 py-2 rounded-lg shadow-2xl shadow-black">Blog</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
