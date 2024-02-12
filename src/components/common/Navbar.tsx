import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className=" flex justify-around py-2 shadow-md">
      <div>
        <h3 className=" text-xl font-semibold">Editorials</h3>
      </div>

      <div>
        <ul className="flex gap-3 text-sm">
          <li className=" cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className=" cursor-pointer">Editorials</li>
          <li className=" cursor-pointer">News</li>
          <li className=" cursor-pointer">Reviews</li>
        </ul>
      </div>
    </div>
  );
};
