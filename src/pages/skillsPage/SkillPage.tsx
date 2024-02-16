import { experience } from "@/configs/experience";
import { SingleExperience } from "./SingleExperience";
import { skills } from "@/configs/skills";
import { ProgrammingLanguages } from "./ProgrammingLanguages";
import { FrontendSkills } from "./FrontendSkills";

export const SkillPage = () => {
  return (
    <div className="px-10 md:px-[17%]">
      <div className="pt-7">
        {/* Exp */}
        <div>
          <div className="pb-3">
            <h3 className=" font-bold text-xl ml-1">Experience</h3>
          </div>

          <div className="flex flex-col gap-7 md:grid md:grid-cols-2">
            {experience.map((data, index) => (
              <SingleExperience key={index} data={data} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="pt-9">
            <h3 className=" font-bold text-xl ml-1">Programming Languages</h3>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-3 md:flex md:flex-row md:flex-wrap">
            {skills.programmingLanguages
              .sort((a, b) => a.display - b.display)
              .map((skill, index) => {
                return (
                  <ProgrammingLanguages
                    name={skill.name}
                    icon={skill.icon}
                    index={index}
                  />
                );
              })}
          </div>
        </div>

        <div>
          <div className="pt-9">
            <h3 className=" font-bold text-xl ml-1">Frontend Skills</h3>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-3 md:flex md:flex-row md:flex-wrap">
            {skills.fronendTechnicalSkills
              .sort((a, b) => a.display - b.display)
              .map((skill, index) => {
                return (
                  <FrontendSkills
                    name={skill.name}
                    icon={skill.icon}
                    index={index}
                  />
                );
              })}
          </div>
        </div>

        <div>
          <div className="pt-9">
            <h3 className=" font-bold text-xl ml-1">Backend Skills</h3>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-3 md:flex md:flex-row md:flex-wrap">
            {skills.backendTechnicalSkills
              .sort((a, b) => a.display - b.display)
              .map((skill, index) => {
                return (
                  <FrontendSkills
                    name={skill.name}
                    icon={skill.icon}
                    index={index}
                  />
                );
              })}
          </div>
        </div>

        <div>
          <div className="pt-9">
            <h3 className=" font-bold text-xl ml-1">Database Skills</h3>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-3 md:flex md:flex-row md:flex-wrap">
            {skills.backendTechnicalSkills
              .sort((a, b) => a.display - b.display)
              .map((skill, index) => {
                return (
                  <FrontendSkills
                    name={skill.name}
                    icon={skill.icon}
                    index={index}
                  />
                );
              })}
          </div>
        </div>

        <div className="lg:mb-16">
          <div className="pt-9">
            <h3 className=" font-bold text-xl ml-1">Other Tools</h3>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-3 md:flex md:flex-row md:flex-wrap">
            {skills.backendTechnicalSkills
              .sort((a, b) => a.display - b.display)
              .map((skill, index) => {
                return (
                  <FrontendSkills
                    name={skill.name}
                    icon={skill.icon}
                    index={index}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
