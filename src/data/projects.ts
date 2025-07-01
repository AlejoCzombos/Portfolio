export enum TechIcons {
  TypeScript = <any>"typescript",
  JavaScript = <any>"javascript",
  Java = <any>"java",
  Python = <any>"python",
  CSharp = <any>"csharp",
  Spring = <any>"spring",
  NodeJS = <any>"nodejs",
  Express = <any>"express",
  Django = <any>"django",
  FastAPI = <any>"fastapi",
  React = <any>"react",
  Jest = <any>"jest",
  SQLServer = <any>"sqlserver",
  PostgreSQL = <any>"postgresql",
  MySQL = <any>"mysql",
  MongoDB = <any>"mongodb",
  Godot = <any>"godot",
  JWT = <any>"jwt",
  Hibernate = <any>"hibernate",
  JUnit = <any>"junit",
  Docker = <any>"docker",
  Git = <any>"git",
  Swagger = <any>"swagger",
  TailwindCSS = <any>"tailwindcss",
  Unity = <any>"unity",
  Jenkins = <any>"jenkins",
  Blender = <any>"blender",
}

export type Project = {
  title: string;
  description: string;
  techs: TechIcons[];
  link: string;
  isComingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tiny URL",
    description: "Acortador de URL con Base de Datos y arquitectura hexagonal",
    techs: [
      TechIcons.Spring,
      TechIcons.Java,
      TechIcons.MongoDB,
      TechIcons.JUnit,
      TechIcons.Swagger,
      TechIcons.Docker,
      TechIcons.Jenkins,
    ],
    link: "https://github.com/AlejoCzombos/TinyURL",
  },
  {
    title: "Task Manager",
    description: "Gestor de tareas con Base de Datos y autenticación JWT",
    techs: [
      TechIcons.Spring,
      TechIcons.Java,
      TechIcons.PostgreSQL,
      TechIcons.JWT,
      TechIcons.JUnit,
      TechIcons.Swagger,
    ],
    link: "https://github.com/alejoczombos/TaskManager",
  },
  {
    title: "Educar para transformar",
    description: "Backend del Sistema de Gestión Escolar",
    link: "https://github.com/AlejoCzombos/EducarParaTransdormar_Backend",
    techs: [TechIcons.Spring, TechIcons.Java, TechIcons.Hibernate, TechIcons.MySQL, TechIcons.JWT],
  },
  {
    title: "Viaja Plus",
    description: "Reserva de pasajes con Base de Datos",
    link: "https://github.com/joseialegre/ViajaPlus",
    techs: [TechIcons.Django, TechIcons.Python, TechIcons.MySQL],
  },
];
