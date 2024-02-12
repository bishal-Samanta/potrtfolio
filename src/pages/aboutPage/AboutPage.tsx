

export const AboutPage = () => {
  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5">
          <p className=" text-center text-xl">Namaste 🙏🏼 World!</p>
          <p className=" text-center text-2xl">My name is <strong>Bishal</strong> and I am a <strong>Full Stack Developer</strong> based in <strong>India</strong>.</p>
        </div>

        <div className="flex justify-center gap-4">
          <button className=" bg-[#3c4143] px-3 py-2 rounded-lg shadow-2xl shadow-gray-700" >Resume</button>
          <button className="bg-[#3c4143] px-3 py-2 rounded-lg shadow-2xl shadow-gray-700">My Work</button>
        </div>
      </div>


      <div className="pt-8">
        <div>
          <div className="shadow-2xl p-5 rounded-lg bg-[#383d40]">
            <img className="rounded-lg shadow-2xl shadow-gray-700" src="https://portfolio-bishal-samanta.vercel.app/assets/propic.183ff822.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className="pt-7">
        <div className="pb-3">
          <h3 className=" font-bold text-xl ml-1">About Me</h3>
        </div>
        <div className="rounded-lg shadow-2xl bg-[#3c4143] px-4 py-4 text-center">
        I am a Passion-driven MERN developer with hands-on experience in developing and organizing projects, curious and detail-oriented with a keen interest to build interactive and user-friendly websites. Looking for an exciting opportunity to work as a full-stack developer that promotes long-term learning and growth alongside the organization.
        </div>
      </div>
        
    </div>
  )
}
