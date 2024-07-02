export type Experience = {
  title: string;
  company: string;
  date_start: string;
  date_end: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    title: "Desarrollador Full Stack",
    company: "Vida Digital S.A.S.",
    date_start: "Abril 2024",
    date_end: "Julio 2024",
    description: [
      "Desarrollé con éxito la aplicación “Smart C2” que se encarga de la trazabilidad de la cadena de frío de los medicamentos.",
      "Trabajé durante todo el proceso con las tecnologías Vue.js, Express.js, Firebase Firestore.",
    ],
  },
  {
    title: "Desarrollador Full Stack - Pasante",
    company: "Club de la Universidad del Nordeste",
    date_start: "Diciembre 2023",
    date_end: "Febrero 2024",
    description: [
      "Lideré el desarrollo del Sistema de Gestión Empresarial realizado con una API REST creada con Spring Boot MySQL y React.",
      "Realicé con éxito la migración de la Base de Datos desde Access 95 a MySQL, mejorando significativamente la eficiencia y escalabilidad del sistema",
    ],
  },
];
