import { ButtonWithIcon } from "@/components/ui/ButtonWithIcon";
import { projects } from "@/configs/sampleProjects";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

// id: 4,
// 		hero_image_link: "https://www.applify.com.sg/blog/wp-content/uploads/2022/03/A-pathway-that-UIUX-team-follows-before-designing-your-app.png",
// 		title: "Node API PRoject ",
// 		sub_title: "A sample project",
// 		content: "This is the content of the sample project.",
// 		date: "2023-10-22T10:00:00.000Z",
// 		github_link: "https://github.com/sample-project1",
// 		deployed_link: "https://sample-project1.com",
// 		blog_link: "https://blog.sample-project1.com",
// 		type: "Web Application",
// 		created_at: "2023-10-28T10:06:29.806Z",
// 		updated_at: "2023-10-28T10:06:29.806Z"

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
    <div className="px-10">
      <div className="pt-5 pb-3">
        <h3 className=" font-bold text-xl ml-1">Projects</h3>
      </div>

      {projects.map((project, index) => {
        return (
          <div key={index} className="pb-5 grid grid-cols-1">
            <div className="rounded-lg shadow-2xl bg-[#3c4143] px-3 py-3 text-center shadow-black">
              <div>
                <Fade {...properties}>
                  {project.hero_image_link.map((image, index) => {
                    return (
                      <div key={index} className="each-fade">
                        <div className="image-container h-[160px]">
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

              <div className="w-[100%] mb-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-left mt-1.5 text-lg text-[#97baff]">
                    {project.title}
                  </h3>

                  <div className=" text-[10px] px-2.5 pb-[4px] py-0.5 bg-[#323539] shadow-2xl rounded-md mt-2">
                    {project.tags}
                  </div>
                </div>

                <p className="text-left text-sm">{project.sub_title}</p>
                <p className="text-left text-sm ">{project.content}</p>
              </div>

              <div>
                <h3 className="font-bold text-left mt-1">Features : </h3>
                {project.features.map((feature, index) => {
                  return (
                    <ul className=" list-disc">
                      <li key={index} className="text-left ml-4">
                        {feature}
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div className="pt-3">
                <h3 className="font-bold text-left mt-1">Tech Stacks : </h3>
                <div className="pt-2 flex flex-wrap gap-2 justify-start text-[12px] ">
                  {project.techStack.map((techStack, index) => {
                    return (
                      <div
                        className="px-2.5 pb-[4px] py-0.5 bg-[#323539] shadow-2xl rounded-md"
                        key={index}
                      >
                        {techStack}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <ButtonWithIcon
                  icon="FaGithub"
                  name="Github"
                  className=" shadow-2xl bg-[#2e3234] px-3 font-semibold text-[12px] hover:bg-[#97baff] hover:text-[#2e3234]"
                />
                <ButtonWithIcon
                  icon="FaPlay"
                  name="Deployed"
                  className=" shadow-2xl bg-[#2e3234] px-3 font-semibold text-[12px]"
                  iconStyle=" text-[10px]"
                />
                {/* <button className="bg-[#2e3234] px-3 py-2 rounded-lg shadow-2xl shadow-black">Blog</button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
