type Experience = {
  title: string;
  company: string;
  date_start: string;
  date_end: string;
  description: string[];
};

const experience: Experience[] = [
  {
    title: "Backend / Full Stack Developer",
    company: "Freelance",
    date_start: "Diciembre 2023",
    date_end: "actualidad",
    description: [
      "Desarrollo de aplicaciones web y móviles.",
      "Tecnologías utilizadas: Java, JavaScript, React, Spring Boot, MySQL, MongoDB, Firebase, entre otras.",
    ],
  },
];

export default experience;
