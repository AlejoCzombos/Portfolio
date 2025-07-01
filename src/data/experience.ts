export type Experience = {
  title: string;
  company: string;
  date_start: string;
  date_end: string;
  description: string[];
  tecnologies: string[];
};

export const experience: Experience[] = [
  {
    title: "Desarrollador Backend",
    company: "GOAT S.A.",
    date_start: "Febrero 2025",
    date_end: "Presente",
    description: [
      "Desarrollo de funcionalidades backend en una plataforma modular con enfoque en arquitectura de microservicios y principios de Domain-Driven Design (DDD).",
      "Participación activa en el diseño e implementación de múltiples módulos, incluyendo el desarrollo completo de un módulo de pago y recarga de servicios.",
      "Trabajo colaborativo con equipos de desarrollo bajo metodologías ágiles, aplicando buenas prácticas de diseño, control de versiones con Git y documentación técnica clara.",
    ],
    tecnologies: ["TypeScript", "Node.js", "Express.js", "Sequelize", "PostgreSQL"],
  },
  {
    title: "Desarrollador Full Stack",
    company: "EME (Freelance)",
    date_start: "Noviembre 2024",
    date_end: "Enero 2025",
    description: [
      "Diseño, desarrollo y despliegue de sitio web personalizado utilizando HTML, CSS, JavaScript, React y Astro.",
      "Desarrollo de CMS personalizados utilizando Python, FastAPI y MySQL.",
      "Resolución de problemas en desarrollo web, implementando soluciones eficientes y prácticas.",
    ],
    tecnologies: ["Python", "FastAPI", "MySQL", "Docker", "TypeScript", "React", "Astro"],
  },
  {
    title: "Desarrollador Frontend",
    company: "Connectto (Freelance) ",
    date_start: "Agosto 2024",
    date_end: "Septiembre 2024",
    description: [
      "Desarrollo y despliegue de sitio web personalizado utilizando HTML, CSS, JavaScript y Astro.",
      "Colaboración con el equipo de diseño UX para asegurar coherencia visual y funcionalidad.",
    ],
    tecnologies: ["TypeScript", "Astro", "Tailwind", "JavaScript"],
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
    ],
    tecnologies: ["Node.js", "Express.js", "Firebase Firestore", "Firebase Authentication", "GitLab"],
  },
];
