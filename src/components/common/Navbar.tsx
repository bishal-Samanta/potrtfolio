import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className=" flex justify-around py-2 items-center">
      <div>
        <h3 className=" text-xl font-semibold lg:text-[23px]">
          <Link to="/">Bishal Samanta</Link>
        </h3>
      </div>

      <div className="">
        <ul className="flex gap-3 text-sm lg:gap-5">
          <li className=" cursor-pointer">
            <Link to="/">About</Link>
          </li>
          <li className=" cursor-pointer">
            <Link to="/skills">Skills</Link>
          </li>
          <li className=" cursor-pointer">
            <Link to="/projects">Projects</Link>
          </li>
          <li className=" cursor-pointer">
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
