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
    company: "EME (Proyecto Freelance)",
    date_start: "Noviembre 2024",
    date_end: "Presente",
    description: [
      "Diseño, desarrollo y despliegue de sitio web personalizado utilizando HTML, CSS, JavaScript, React y Astro.",
      "Desarrollo de CMS personalizados utilizando Python (FastAPI) y MySQL.",
      "Resolución de problemas en desarrollo web, implementando soluciones eficientes y prácticas.",
    ],
  },
  {
    title: "Desarrollador Frontend",
    company: "Connectto (Proyecto Freelance) ",
    date_start: "Agosto 2024",
    date_end: "Septiembre 2024",
    description: [
      "Desarrollo y despliegue de sitio web personalizado utilizando HTML, CSS, JavaScript y Astro.",
      "Colaboración con el equipo de diseño UX para asegurar coherencia visual y funcionalidad.",
    ],
  },
  {
    title: "Desarrollador Backend",
    company: "Vida Digital S.A.S.",
    date_start: "Abril 2024",
    date_end: "Julio 2024",
    description: [
      "Desarrollo y colaboración en una aplicación web para la trazabilidad de la cadena de frío de medicamentos.",
      "Análisis, diseño y desarrollo de APIs REST utilizando Node.js y Express.js, siguiendo principios de arquitectura modular.",
      "Diseño y gestión de bases de datos NoSQL con Firebase Firestore",
      "Implementación de un servicio de autenticación y autorización usando Firebase Authentication, fortaleciendo el control de acceso y seguridad de la aplicación.",
      "Control de versiones con GitLab.",
    ],
  },
  {
    title: "Desarrollador Full Stack",
    company: "Club de la Universidad del Nordeste",
    date_start: "Diciembre 2023",
    date_end: "Febrero 2024",
    description: [
      "Diseño, desarrollo y despliegue de un Sistema de Gestión Empresarial Interna para optimizar la administración de recursos y operaciones.",
      "Análisis, diseño y desarrollo de una API RESTful utilizando Spring Boot y Java, integrando Hibernate y JDBC para el manejo eficiente de datos y utilizando Spring Security para robustecer la seguridaddel sistema.",
      "Diseño y gestión de bases de datos relacionales con MySQL, migrando exitosamente desde Access 95 y mejorando la escalabilidad y rendimiento de la base de datos.",
      "Desarrollo de un sistema de autenticación y autorización basado en JWT, permitiendo la gestión de roles y permisos de acceso de forma segura y eficaz.",
    ],
  },
];
