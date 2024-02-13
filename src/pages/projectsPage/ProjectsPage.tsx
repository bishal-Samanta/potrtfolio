import { ButtonWithIcon } from "@/components/ui/ButtonWithIcon";
import { projects } from "@/configs/sampleProjects";

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
  return (
    <div className="px-10">
      <div className="pb-3">
        <h3 className=" font-bold text-xl ml-1">Projects</h3>
      </div>


      {projects.map(( project  , index) => {

        return (
          <div key={index} className="pt-7 grid grid-cols-1">
              <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
                  <div>
                    <img src={project.hero_image_link} alt="" />
                  </div>

                  <div className="w-[100%]">
                    <h3 className="font-bold text-left mt-1">{project.title}</h3>
                    <p className="text-left">{project.sub_title}</p>
                    <p className="text-left" >{project.content}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-left mt-1">Features : </h3>
                    {project.features.map((feature , index) => {
                    
                    return(
                      <ul className=" list-disc">
                        <li  key={index} className="text-left ml-4">{feature}</li>

                      </ul>
                    )
                    })}

                  </div>

                  <div className="flex justify-between gap-4 pt-4">
                    <ButtonWithIcon icon="FaGithub" name="Github" className=" shadow-2xl"   />
                    <ButtonWithIcon icon="FaPlay" name="Deployed" className=" shadow-2xl" />
                    {/* <button className="bg-[#2e3234] px-3 py-2 rounded-lg shadow-2xl shadow-black">Blog</button> */}
                  </div>
              </div>
          </div>
          
        )
      })}
      
      

    </div>
  )
}
