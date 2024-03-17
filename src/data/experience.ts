export type Experience = {
  title: string;
  company: string;
  date_start: string;
  date_end: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    title: "Desarrollador Full Stack - Pasante",
    company: "Club de la Universidad del Nordeste",
    date_start: "Diciembre 2023",
    date_end: "Febrero 2024",
    description: [
      "Líder del desarrollo del Sistema de Gestión Empresarial realizado con una API REST creada con Spring Boot y Java, React con JavaScript y MySQL.",
      "Realicé con éxito la migración de la Base de Datos desde Access 95 a MySQL, mejorando significativamente la eficiencia y escalabilidad del sistema.",
      "Colaboré estrechamente con equipos interdisciplinarios para asegurar una implementación fluida y una experiencia de usuario excepcional."
    ],
  },
];
