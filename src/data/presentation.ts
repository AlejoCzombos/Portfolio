export type Social = {
  label: string;
  link: string;
};

export type Presentation = {
  mail: string;
  title: string;
  subtitule: string;
  description: string;
  socials: Social[];
  profile?: string;
  openToWork?: boolean;
};

export const presentation: Presentation = {
  mail: "alejoczombos@gmail.com",
  title: "Alejo Czombos",
  description: "Backend / Full Stack Developer",
  subtitule: "Backend / Full Stack Developer",
  openToWork: true,
  //profile: "/profile.webp",
  //description:
  //"Backend / Full Stack developer y estudiante de Programación. Actualmente, trabajando con Spring Boot con Java y React con JavaScript, aprendiendo TypeScript.",
  socials: [
    {
      label: "LikedIn",
      link: "https://www.linkedin.com/in/alejoczombos/",
    },
    {
      label: "Github",
      link: "https://github.com/Alejoczombos",
    },
  ],
};
