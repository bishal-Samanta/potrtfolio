export const experience = [
    {
        positionName : "Instructional Associate Lead",
        date : "Sep 2022 - Present",
        location : "Bengaluru, Karnataka, India",
        description : [
          "Delivered 150+ live lectures on React, Advanced JavaScript, and Databases.",
          "Conducted 300+ technical coding interviews, providing valuable feedback to students",
          " Led Tech Support Engineer curriculum development.",
          "Facilitated 500+ doubt and mentor sessions.",
          "Developed internal scripts for the Lead generation and placement team.",
          "Led development of EMI Dashboard and tracker system."
        ]
    },
    {
        positionName : "Instructional Associate",
        date : "Apr 2022 - Aug 2022",
        location : "Bengaluru, Karnataka, India",
        description : [
            "Conducted daily standups and one-on-one doubt sessions.",
            "Evaluated student performance and provided feedback.",
            "Guided students in building projects for placements.",
            "Managed stakeholder relationships and course planning."
        ]
    }
];

//Generate type of the above experience
export type Experience = { positionName: string; date: string; location: string; description: string[]; };

