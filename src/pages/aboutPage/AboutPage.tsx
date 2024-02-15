import { education } from "@/configs/education";
import { useNavigate } from "react-router-dom"
import { SingleEducation } from "./SingleEducation";

export const AboutPage = () => {
  const navigate = useNavigate();

  const handleResumeButtonClick = () =>{
    window.open("https://drive.google.com/file/d/1y1a1dvGDj232aLHK37w7reMwS4ncbHUM/view?usp=sharing" , "_blank")
  }

  const handleMyWorkSectionClick = () =>{
    navigate("/projects");
  }
  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5">
          <p className=" text-center text-xl">Namaste 🙏🏼 World!</p>
          <p className=" text-center text-2xl">My name is <strong>Bishal</strong> and I am a <strong>Full Stack Developer</strong> based in <strong>India</strong>.</p>
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={handleResumeButtonClick} className=" bg-[#3c4143] px-3 py-2 rounded-lg shadow-2xl shadow-black" >Resume</button>
          <button onClick={handleMyWorkSectionClick} className="bg-[#3c4143] px-3 py-2 rounded-lg shadow-2xl shadow-black">Projects</button>
        </div>
      </div>


      <div className="pt-8">
        <div>
          <div className="shadow-2xl p-5 rounded-lg bg-[#383d40] shadow-black">
            <img className="rounded-lg shadow-2xl shadow-gray-700" src="https://portfolio-bishal-samanta.vercel.app/assets/propic.183ff822.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className="pt-7">
        <div className="pb-3">
          <h3 className=" font-bold text-xl ml-1">About Me</h3>
        </div>
        <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center shadow-black">
            A Passion-driven MERN stack developer and trainer with hands-on experience in
            teaching complex technology and building scalable products. Adaptable to learning
            new technology, and open to using generative AI. Would like to bring his passion to
            any organization that appreciates it and presents ample intellectual challenges.
        </div>
      </div>


      <div className=" pt-7">
        <div className="pb-3">
          <h3 className=" font-bold text-xl ml-1">About Me</h3>
        </div>

        {/* Education */}
        {education.map((el) => {
          return <SingleEducation data={el} />
        })}
      </div>  

      
        
    </div>
  )
}
