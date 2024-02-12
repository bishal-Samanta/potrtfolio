

export const AboutPage = () => {
  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5">
          <p className=" text-center text-xl">Namaste 🙏🏼 World!</p>
          <p className=" text-center text-2xl">My name is <strong>Bishal</strong> and I am a <strong>Full Stack Developer</strong> based in <strong>India</strong>.</p>
        </div>

        <div className="flex justify-center">
          <button>Resume</button>
          <button>My Work</button>
        </div>
      </div>
      

      <div>
        <div>
          <div className="border shadow-2xl p-5 rounded-lg bg-[#383d40]">
            <img className="rounded-lg shadow-2xl shadow-gray-700" src="https://portfolio-bishal-samanta.vercel.app/assets/propic.183ff822.jpeg" alt="" />
          </div>
        </div>
      </div>
        
    </div>
  )
}
