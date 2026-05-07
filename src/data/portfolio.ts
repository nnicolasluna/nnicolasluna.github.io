import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
    personal: {
        name: "Joel Nicolas Luna Valdivia",
        title: "Full-Stack",
        titleHighlight: "Software Engineer",
        summary:
            "Building scalable, high-performance web applications with modern technologies. Passionate about clean architecture, developer experience, and impactful software.",
        bio: [
            "I am a Systems Engineer and Full-Stack Developer specializing in building scalable web applications with Spring Boot, NestJS, NextJS, Laravel, VueJS, NET, Flask and Angular. With a strong background in QA automation and secure software development, I focus on delivering high-quality code that is both resilient and performant. I enjoy solving complex technical challenges, from architecting microservices to optimizing database efficiency.",
        ],
        location: "La Paz, Bolivia",
        cvUrl: "https://docs.google.com/document/d/1JCc0MBqpmCHur8IitMULxELrovFjdLxnwuQIPQBPAvA/edit?usp=sharing",
    },

    social: {
        github: "https://github.com/nnicolasluna",
        linkedin: "https://www.linkedin.com/in/jnlv/",
        email: "nnicolasluna@gmail.com",
    },

    about: {
        highlights: [
            { value: "2+", label: "Years of Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "10+", label: "Technologies" },
            { value: "2", label: "Cybersecurity Certs" },
        ],
    },

    skillCategories: [
        {
            category: "Frontend",
            skills: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "VueJs",
                "Angular",
                "Flutter",
            ],
        },
        {
            category: "Backend",
            skills: [
                "Node.js",
                "Laravel",
                "NestJS",
                "Python",
                "Flask",
                "FastAPI",
                "Spring Boot",
                ".NET",
            ],
        },
        {
            category: "Databases",
            skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"],
        },
        {
            category: "Tools",
            skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Jest"],
        },
        {
            category: "QA",
            skills: ["Playwright", "Robot Framework", "Appium", "Cypress"],
        },
    ],

    experience: [
        {
            company: "ANDENCODE",
            role: "Systems analyst",
            startDate: "Nov 2025",
            endDate: "At the moment",
            location: "La Paz, Bolivia",
            responsibilities: [
                "End-to-end solutions leadership and comprehensive execution of the development lifecycle, ensuring strategic alignment between client needs and the technical delivery of highly available software products.",
                "Client interface management as the primary technical liaison in scope negotiation and requirements definition, ensuring the feasibility of proposals and stakeholder satisfaction.",
                "Systems design and validation, applying comprehensive testing methodologies to certify the security, reliability, and proper flow of processes.",
            ],
            achievements: [
                "Time to market reduction: I optimized the entire development lifecycle, achieving on-time deliveries through rigorous planning and the design of scalable architectures from the initial phase.",
                "Quality assurance in implementation: I ensured the operational stability of delivered products by implementing comprehensive validation cycles, resulting in implementations with minimal critical errors in production.",
                "System design optimization: I designed persistence models and software architectures that improved the operational efficiency of the clients processes, guaranteeing data integrity and platform scalability.",
            ],
            technologies: [
                "NextJs",
                "NestJs",
                "PostgreSQL",
                "Typescript",
                "Git",
                "GitLab",
                "Typescript",
                "Docker",
                "NextJs",
                "Pythyon",
                "Flask",
            ],
        },
        {
            company: "Empresa Boliviana de Alimentos (EBA)",
            role: "Software Development Assistant",
            startDate: "Oct 2024",
            endDate: "Dec 2024",
            location: "La Paz, Bolivia",
            responsibilities: [
                "Integration of Strategic Modules, technical analysis, and development of new components to strengthen the core functionalities of the enterprise system.",
                "Management of Evolutionary Maintenance, implementation of continuous improvements, and resolution of technical incidents to raise the stability and performance standards of existing platforms.",
                "System Validation (QA), application of comprehensive testing methodologies (black box and white box) to certify the security, reliability, and correct flow of processes.",
                "Optimization of Technical Debt, Proactive refactoring of source code to improve the maintainability, scalability, and efficiency of the companys software infrastructure.",
            ],
            achievements: [
                "Quality and Security Assurance: I certified the reliability and proper flow of critical processes by applying comprehensive white-box and black-box testing methodologies, ensuring software security.",
                "Critical Process Validation: I ensured business continuity through rigorous system validation, guaranteeing that each component met the required reliability standards.",
            ],
            technologies: [
                "VueJS",
                "Laravel",
                "PostgreSQL",
                "Typescript",
                "Git",
                "GitLab",
                "Typescript",
                "Docker",
                "NextJs",
                "SQL Server",
            ],
        },
        {
            company: "Gambarte SRL",
            role: "Systems analyst",
            startDate: "Dec 2023",
            endDate: "Sep 2024",
            location: "La Paz, Bolivia",
            responsibilities: [
                "Comprehensive Software Engineering: Leadership throughout the development lifecycle, from initial analysis and technical design to the implementation and deployment of robust systems.",
                "Architecture and Persistence Design: Strategic database modeling and definition of scalable architectures, ensuring data integrity and system operational efficiency.",
                "Frontend Development with a Focus on User Experience (UX): Design and deployment of modern and functional user interfaces, prioritizing usability and a seamless user experience.",
                "Backend Engineering and Microservices: Development of REST services under a microservices architecture with Spring Boot, ensuring scalable and high-performance business logic.",
                "Quality Assurance and Automation: Implementation of automated test cycles with Karma and Cypress to guarantee software stability and reduce production time.",
            ],
            achievements: [
                "Architecture Optimization: I designed strategic database models and architectures that improved the systems operational efficiency and ensured the integrity of the companys critical information.",
                "Backend Scalability: I implemented REST services under a microservices architecture with Spring Boot, enabling high-performance business logic capable of scaling according to demand.",
                "Release Efficiency (QA): I reduced time-to-market by automating test cycles with Karma and Cypress, ensuring software stability before each deployment.",
            ],
            technologies: [
                "Angular",
                "Spring Boot",
                "PostgreSQL",
                "Java",
                "Git",
                "Karma",
                "Cypress",
                "Typescript",
                "Docker",
                "Python",
                "Flask",
            ],
        },
        {
            company: "ADSIB",
            role: "Systems Development Assistant",
            startDate: "Apr 2023",
            endDate: "Sep 2023",
            location: "La Paz, Bolivia",
            responsibilities: [
                "Management of the digital signature infrastructure, technical support, and maintenance of the integrated digital signature infrastructure across multiple government platforms nationwide.",
                "Technical documentation and training. Development of technical manuals and user guides for web systems, facilitating technology adoption and optimizing staff training time.",
            ],
            achievements: [
                "I developed a technical knowledge base that facilitated the transition and evolutionary maintenance of the agencys systems, improving the development teams response to failures.",
                "I resolved complex technical problems related to the implementation of digital signatures, ensuring the integrity and authenticity of digital processes in various state entities.",
            ],
            technologies: [
                "Angular",
                "Python",
                "Cypress",
                "PostgreSQL",
                "Java",
                "Spring Boot",
                "Typescript",
                "Git",
            ],
        },
        {
            company: "ATT",
            role: "Systems Development Intern",
            startDate: "Sep 2021",
            endDate: "Nov 2021",
            location: "La Paz, Bolivia",
            responsibilities: [
                "Data Engineering and Visualization: Leadership in the analysis and implementation of a centralized report storage system, integrating graphical visualization modules to facilitate the interpretation of key metrics.",
                "Software Evolutionary Maintenance: Technical support and source code optimization for various institutional systems, ensuring operational continuity and platform efficiency.",
                "Cybersecurity Training: Facilitator of training sessions on information security and the proper use of digital signatures, promoting integrity and authenticity standards in digital processes.",
            ],
            achievements: [
                "Efficient data storage.",
                "Improved data analysis.",
                "Reduced data storage time.",
            ],
            technologies: [
                "Laravel",
                "PostgreSQL",
                "Docker",
                "PHP",
                "JavaScript",
                "Git",
            ],
        },
    ],

    projects: [
        {
            name: "Local inventory system",
            description:
                "Development of a robust desktop solution for comprehensive inventory control, designed to operate in environments with limited or no connectivity.",
            problemSolved:
                "The digital divide in retail businesses that rely on manual processes or expensive cloud-based software with latency due to internet connection issues in Bolivia",
            stack: [
                "Next.js",
                "TypeScript",
                "Node.js",
                "SQLite",
                "Electron",
            ],
            githubUrl: "https://github.com/nnicolasluna/inventarios",
            liveUrl: "",
            featured: true,
        },
        {
            name: "Patient registration system",
            description:
                "Clinical management platform for digitizing medical records and scheduling appointments, focused on data sovereignty and local administrative efficiency.",
            problemSolved:
                "Lack of privacy and high maintenance costs associated with digitizing medical records for independent practices.",
            stack: ["Next.js", "TypeScript", "Node.js", "SQLite", "Electron"],
            githubUrl: "https://github.com/nnicolasluna/medicina",
            liveUrl: "",
            featured: true,
        },
    ],

    education: [
        {
            institution: "University of SAN ANDRÉS",
            degree: "Bachelor's Degree in Computer Systems Engineering",
            field: "Systems Engineering",
            period: "2016 – 2022",
            description:
                "Coursework: Data Structures and Algorithms, Agile Development Methodologies, Networks and Computer Security, Mobile Application Development, Software Architecture.",
        },
    ],

    certifications: [
        {
            name: "Full Stack Developer Certification with Spring Boot and Angular",
            issuer: "College of Computer Scientists of Cochabamba",
            date: "2024",

        },
        {
            name: "Ethical Hacking and Pentesting Certification",
            issuer: "Hacker Mentor Cybersecurity Academy,",
            date: "2024",
            
        },
        {
            name: "ecure Development Certification",
            issuer: "DEVELOPING SECURE SOFTWARE LINUX FOUNDATION",
            date: "2026",
            
        },
    ],
};
