export const profile = {
  name: 'Prachi Sharma',
  tagline: 'Full Stack Developer | Angular & NestJS Enthusiast',
  photo: 'assets/images/profile.jpeg',
};

export const about = {
  heading: 'About Me',
  summary: `Hi! I’m a passionate Full Stack Developer with 2.5 years of hands-on experience creating modern, scalable web applications. 
  I love crafting clean, responsive user interfaces with Angular and building secure, high-performance backends using NestJS. 
  
  Over the years, I’ve worked on everything from RESTful APIs to complex database integrations (both SQL and NoSQL), and I’m always looking for ways to make applications faster, cleaner, and easier to maintain. 
  
  I’m also an AWS Certified Cloud Practitioner, with practical experience deploying and optimizing apps in the cloud. Whether it’s collaborating with a team, leading a feature build, or solving tricky bugs, I bring a mix of technical skill and a “let’s make it happen” attitude to every project.`,
};

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Wipro',
    role: 'Full Stack Developer',
    duration: 'March 2023 – Present',
    responsibilities: [
      'Built and maintained responsive, user-friendly modules with Angular, Angular Material, and TypeScript.',
      'Developed secure, scalable REST APIs with NestJS, Express.js, and Node.js.',
      'Integrated third-party services, mentored junior developers, and led code reviews.',
      'Followed Agile practices to deliver features on time without compromising quality.',
    ],
  },
  {
    company: 'Freelance Web Developer',
    role: 'Frontend & Full Stack Projects',
    duration: '2024 – Present',
    responsibilities: [
      'Delivered “Maps And Mantras,” a feature-rich travel platform from scratch.',
      'Handled end-to-end lifecycles for e-commerce and service-based startups.',
      'Built fast, SEO-friendly UIs to help clients grow their user base quickly.',
    ],
  },
];

export interface Project {
  title: string;
  type: string;
  stack: string[];
  description: string;
  contributions: string[];
  image: string;
  demo?: string;
  code?: string;
}

export const projects: Project[] = [
  {
    title: 'EDG (US Foods)',
    type: 'Company Project (Wipro)',
    stack: ['Angular'],
    description:
      'A portal to streamline and automate data entry processes, reducing manual spreadsheet work.',
    contributions: [
      'Developed core frontend features and improved workflows for better usability.',
      'Collaborated with backend teams to align UI with API enhancements.',
    ],
    image: 'assets/images/usFoods.png',
  },
  {
    title: 'ForwardBuy (US Foods)',
    type: 'Company Project (Wipro)',
    stack: ['Angular', 'NestJS', 'Snowflake'],
    description:
      'A platform that offers customers discounted assortments with a smooth purchasing flow.',
    contributions: [
      'Built a multi-step UI for ordering, integrated with secure APIs for payments and document uploads.',
      'Enhanced order management to improve customer experience.',
    ],
    image: 'assets/images/usFoods.png',
  },
  {
    title: 'Map And Mantras',
    type: 'Freelance Project',
    stack: ['Angular', 'NestJS', 'Angular Material'],
    description:
      'A unified travel platform with intuitive design and fast performance.',
    contributions: [
      'Designed and built the frontend with modern UI elements and custom components.',
      'Optimized for fast load times and engaging user interactions.',
    ],
    image: 'assets/images/map.jpeg',
  },
  {
    title: 'Modern E-Commerce Store',
    type: 'Personal Project',
    stack: ['Angular', 'Node.js', 'MongoDB'],
    description:
      'A full-stack online store with product search, cart, payments, and a live admin dashboard.',
    contributions: [
      'Integrated Stripe for secure payments and implemented real-time order tracking.',
      'Developed REST APIs and an intuitive admin interface for store management.',
    ],
    image: 'assets/images/ecommerce.jpg',
  },
  {
    title: 'Portfolio Website',
    type: 'Personal Project',
    stack: ['Angular', 'Vite', 'CSS'],
    description:
      'This very site—built to showcase my work with a clean, modern, and mobile-first design.',
    contributions: [
      'Planned, designed, and developed with accessibility in mind.',
      'Used glassmorphism and gradient accents for a fresh, standout look.',
    ],
    image: 'assets/images/portfolio.jpg',
  },
];

export const contact = {
  email: 'prachi8july@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prachi-sharma01',
  github: 'https://github.com/Prachi08Sharma',
};
