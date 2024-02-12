import { Route, Routes } from "react-router-dom";
import { Home } from "./homePage/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
