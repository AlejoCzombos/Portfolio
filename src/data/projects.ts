type Project = {
  title: string;
  description: string;
  image?: string;
  techs: string[];
  code: string;
  deploy?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Task Manager",
    description:
      "Aplicación web para la gestión de tareas, con autenticación basada en JWT",
    image: "task-manager.webp",
    techs: ["Spring Boot", "PostgreSQL", "ReactJs", "JWT"],
    code: "https://github.com/alejoczombos/TaskManager",
    deploy: "https://task-manager-alejoczombos.herokuapp.com/",
  },
  {
    title: "Educar para Transformar",
    description:
      "Sistema integral de gestión de escuelas. Permite gestionar alumnos, docentes, materias, notas, asistencias, y más. Cuenta con autenticación y autorización de usuarios.",
    techs: ["Spring Boot", "MySQL", "GdScript", "Godot Engine"],
    code: "/",
  },
];

const otherProjects: Project[] = [
  {
    title: "LUDO Game",
    description:
      "Juego de mesa recreado en C# con Windows Forms. Permite jugar de a 4 jugadores, con la posibilidad de elegir el color de cada uno.",
    techs: ["C#", "Windows Forms"],
    code: "https://github.com/AlejoCzombos/TPI_LUDO",
  },
  {
    title: "Wizard Crawler",
    description:
      "Juego de oleadas de enemigos en el que el jugador debe sobrevivir el mayor tiempo posible. Creado en Godot Engine con GdScript.",
    techs: ["GdScript", "Godot Engine"],
    code: "/",
    deploy: "https://alehoid.itch.io/wizard-crawler",
  },
];

export default projects;
