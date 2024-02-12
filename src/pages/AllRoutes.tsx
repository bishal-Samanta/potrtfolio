import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./aboutPage/AboutPage";
import { ProjectsPage } from "./projectsPage/ProjectsPage";
import { BlogsPage } from "./blogsPage/BlogsPage";
import { SkillPage } from "./skillsPage/SkillPage";
import { NotFoundPage } from "./NotFoundPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/skills" element={<SkillPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
