export enum TechIcons {
  Spring= "spring",
  React = "react",
  CSharp ="csharp",
  Godot = "godot",
  Java = "java",
  JWT = "jwt",
  Hibernate ="hibernate",
  JUnit = "junit",
  MongoDB = "mongodb",
  MySQL = "mysql",
  PostgreSQL = "postgresql",
  SQLServer = "sqlserver",
  TypeScript = "typescript",
  JavaScript = "javascript",
  Docker = "docker",
  Django = "django",
  Python = "python",
  Git = "git",
  Swagger = "swagger",
  TailwindCSS = "tailwindcss",
  Unity = "unity",
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
      "Aplicación web para la gestión de tareas, con autenticación basada en JWT y Base de Datos",
    image: "task-manager.webp",
    techs: [TechIcons.Spring, TechIcons.Java , TechIcons.React, TechIcons.JWT, TechIcons.PostgreSQL],
    code: "https://github.com/alejoczombos/TaskManager",
    deploy: "https://taskmanager-u3h3.onrender.com",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Educar para transformar",
    description: "Backend del Sistema de Gestión Escolar",
    code: "https://github.com/AlejoCzombos/EducarParaTransdormar_Backend",
    techs: [TechIcons.Spring, TechIcons.Java, TechIcons.Hibernate, TechIcons.MySQL],
  },
  {
    title: "Viaja Plus",
    description: "Reserva de pasajes con Base de Datos",
    code: "https://github.com/joseialegre/ViajaPlus",
    techs: [TechIcons.Django, TechIcons.Python, TechIcons.MySQL],
  },
  {
    title: "Wizard Crawler",
    description:
      "Videojuego de supervivencia de oleadas",
    techs: [TechIcons.Godot],
    code: "https://github.com/AlejoCzombos/Wizard_Crawler",
    deploy: "https://alehoid.itch.io/wizard-crawler",
  },
  {
    title: "LUDO Game",
    description:
      "Recreación del juego de mesa Ludo",
    techs: [TechIcons.CSharp],
    code: "https://github.com/AlejoCzombos/TPI_LUDO",
  },
];
