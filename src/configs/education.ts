export const education: Education[] = [
  {
    courseName: "Bachelor of Computer Applications (BCA)",
    date: "Jan 2023 - Present",
    institutionName: "Lovely Professional University",
    location: "Punjab , India",
    display: 1,
    skills: ["Oops", "DBMS", "OS", "Networking", "C", "C++"],
  },
  {
    courseName: "Full stack web Development Bootcamp",
    date: "Oct 2021 - Sept 2022",
    institutionName: "Masai School",
    location: "Bengaluru, Karnataka, India",
    display: 2,
    skills: [
      "Html",
      "CSS",
      "JS",
      "React",
      "NodeJS",
      "Express",
      "MongoDB",
      "Data Structure",
      "Algorithm",
      "Soft Skill Training",
      "Project Management",
    ],
  },
];

export type Education = {
  courseName: string;
  date: string;
  institutionName: string;
  location: string;
  display: number;
  skills: string[];
};


//this is test 1
//this is test 1
