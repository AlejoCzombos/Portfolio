export enum TechIcons {
    Spring= <any>"spring",
  React = <any>"react",
  CSharp = <any>"csharp",
  Godot = <any>"godot",
  Java = <any>"java",
  JWT = <any>"jwt",
  Hibernate = <any>"hibernate",
  JUnit = <any>"junit",
  MongoDB = <any>"mongodb",
  MySQL = <any>"mysql",
  PostgreSQL = <any>"postgresql",
  SQL_Server = <any>"sql_server",
  TypeScript = <any>"typescript",
  JavaScript = <any>"javascript",
  Docker = <any>"docker",
  Django = <any>"django",
  Python = <any>"python",
  Git = <any>"git",
  Swagger = <any>"swagger",
  TailwindCSS = <any>"tailwindcss",
  Unity = <any>"unity",
}

export type Project = {
  title: string;
  description: string;
  image?: string;
  techs: TechIcons[];
  code: string;
  deploy?: string;
  isComingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "Task Manager",
    description:
      "Aplicación web para la gestión de tareas, con autenticación basada en JWT",
    image: "task-manager.webp",
    techs: [TechIcons.Spring, TechIcons.React, TechIcons.JWT, TechIcons.PostgreSQL],
    code: "https://github.com/alejoczombos/TaskManager",
    deploy: "https://task-manager-alejoczombos.herokuapp.com/",
  },
  {
    title: "Educar para Transformar",
    description: "Sistema integral de gestión de escuelas.",
    techs: [TechIcons.Spring, TechIcons.Godot, TechIcons.MySQL],
    code: "/",
  },
];

export const otherProjects: Project[] = [
  {
    title: "LUDO Game",
    description:
      "Juego de mesa recreado en C# con Windows Forms. Permite jugar de a 4 jugadores, con la posibilidad de elegir el color de cada uno.",
    techs: [TechIcons.CSharp],
    code: "https://github.com/AlejoCzombos/TPI_LUDO",
  },
  {
    title: "Wizard Crawler",
    description:
      "Juego de oleadas de enemigos en el que el jugador debe sobrevivir el mayor tiempo posible. Creado en Godot Engine con GdScript.",
    techs: [TechIcons.Godot],
    code: "/",
    deploy: "https://alehoid.itch.io/wizard-crawler",
  },
];
