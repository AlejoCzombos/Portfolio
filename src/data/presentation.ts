export type Social = {
  name: string;
  link: string;
};

export type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
  openToWork?: boolean;
};

export const presentation: Presentation = {
  mail: "alejoczombos@gmail.com",
  title: "Alejo Czombos",
  description: "Backend / Full Stack Developer",
  openToWork: true,
  profile: "profile.webp",
  socials: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/alejoczombos/",
    },
    {
      name: "Github",
      link: "https://github.com/Alejoczombos",
    },
  ],
};
