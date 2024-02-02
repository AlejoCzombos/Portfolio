export type Project = {
  title: string;
  description: string;
  techs: string[];
  link: string;
  deploy?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Task Manager",
    description:
      "Aplicación web para la gestión de tareas. Permite crear, editar y eliminar tareas, además de asignarlas a un usuario. Cuenta con autenticación y autorización de usuarios.",
    techs: ["Spring Boot", "PostgreSQL", "ReactJs", "JWT"],
    link: "https://github.com/alejoczombos/TaskManager",
  },
  {
    title: "Educar para Transformar",
    description:
      "Sistema integral de gestión de escuelas. Permite gestionar alumnos, docentes, materias, notas, asistencias, y más. Cuenta con autenticación y autorización de usuarios.",
    techs: ["Spring Boot", "MySQL", "GdScript", "Godot Engine"],
    link: "/",
  },
];

export default projects;
