export const SOCIAL_LINKS = {
  github: 'https://github.com/rupeshbuddhu78-dev',
  linkedin: 'https://linkedin.com/in/rupesh-kumar-a0ba88410',
  email: 'rupeshbuddhu78@gmail.com',
  whatsapp: '+919877638282',
};

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'Socket.io'],
  },
  {
    category: 'Tools & Services',
    skills: ['Git', 'GitHub', 'Docker', 'Cloudinary', 'Supabase', 'Vercel', 'Render'],
  },
  {
    category: 'Integrations',
    skills: ['Razorpay', 'Cashfree', 'JWT Auth', 'Nodemailer', 'Multer', 'AI APIs'],
  },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'HomeBite',
    shortDescription: 'Enterprise Food Subscription Platform',
    description: 'A premium food subscription service connecting customers with home chefs and students with meal plans.',
    image: '/projects/homebite.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Cloudinary'],
    features: [
      'Food Subscription Management',
      'Home Chef Network',
      'Student Meal Subscription',
      'Razorpay Integration',
      'Smart Leave System',
      'Responsive Dashboard',
    ],
    links: {
      github: 'https://github.com/rupeshbuddhu78-dev/homebite',
    },
    problem: 'Students and working professionals needed affordable, home-cooked meal solutions with flexible subscription management.',
    solution: 'Built a comprehensive platform connecting home chefs with customers, featuring intelligent subscription management and payment processing.',
    architecture: 'MERN Stack with microservices for orders, payments, and user management',
  },
  {
    id: '2',
    title: 'ZHI College ERP',
    shortDescription: 'Enterprise College Management System',
    description: 'A complete 20+ module college management system with advanced role-based access and comprehensive reporting.',
    image: '/projects/zhi-erp.jpg',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'JWT'],
    features: [
      '20+ Management Modules',
      '20+ User Roles',
      'Student Dashboard',
      'Teacher Dashboard',
      'Parent Portal',
      'Principal Dashboard',
      'Admission Management',
      'Attendance Tracking',
      'Examination Module',
      'Fee Management',
      'Library System',
    ],
    links: {
      github: 'https://github.com/rupeshbuddhu78-dev/zhi-erp',
    },
    problem: 'Colleges needed a unified system to manage students, teachers, parents, admissions, attendance, exams, and finances.',
    solution: 'Developed an enterprise-grade ERP with granular role-based access, real-time dashboards, and comprehensive reporting.',
    architecture: 'Scalable MERN architecture with JWT authentication and MongoDB for complex data relationships',
  },
  {
    id: '3',
    title: 'Parent Control System',
    shortDescription: 'Advanced Parental Monitoring Platform',
    description: 'A comprehensive parental control platform for monitoring children with location tracking, screen time management, and activity reports.',
    image: '/projects/parent-control.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Cloudinary'],
    features: [
      'Parent Dashboard',
      'Child Dashboard',
      'App Monitoring',
      'Location Tracking Ready',
      'Screen Time Monitoring',
      'Remote Device Management',
      'Real-time Notifications',
      'Activity Reports',
      'Secure Authentication',
    ],
    links: {
      github: 'https://github.com/rupeshbuddhu78-dev/parent-control',
    },
    problem: 'Parents needed a secure way to monitor their children\'s digital activities and device usage.',
    solution: 'Created a secure monitoring platform with real-time notifications, activity tracking, and comprehensive analytics.',
    architecture: 'Real-time architecture using Socket.io for live updates and MongoDB for efficient data storage',
  },
  {
    id: '4',
    title: 'KhaanaLeAao',
    shortDescription: 'Three-App Logistics Ecosystem',
    description: 'A complete food delivery platform with separate apps for customers, restaurants, and delivery partners with real-time tracking.',
    image: '/projects/khana-leao.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Cashfree', 'Razorpay'],
    features: [
      'Customer App',
      'Restaurant App',
      'Delivery Partner App',
      'Live Order Tracking',
      'Real-time Updates',
      'Multiple Payment Gateways',
      'Cloudinary Integration',
      'Rating & Reviews',
    ],
    links: {
      github: 'https://github.com/rupeshbuddhu78-dev/khana-leao',
    },
    problem: 'Need for a complete food delivery ecosystem with separate mobile and web interfaces for all stakeholders.',
    solution: 'Built a comprehensive three-app ecosystem with real-time order tracking, multiple payment options, and seamless logistics management.',
    architecture: 'Microservices-based MERN stack with Socket.io for real-time communication and distributed data management',
  },
];

export const EXPERIENCES = [
  {
    id: '1',
    company: 'Self-Employed',
    position: 'Full Stack Developer',
    duration: '2023 - Present',
    description: 'Building enterprise-grade web applications and platforms using modern tech stack.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Next.js', 'TypeScript'],
    type: 'work' as const,
  },
  {
    id: '2',
    company: 'Chandigarh University',
    position: 'Bachelor of Computer Applications',
    duration: '2020 - 2023',
    description: 'Specialized in web development and software engineering.',
    technologies: ['Web Development', 'Database Design', 'Software Engineering'],
    type: 'education' as const,
  },
];

export const SERVICES = [
  {
    id: '1',
    title: 'MERN Stack Development',
    description: 'Build scalable, modern web applications using React, Node.js, MongoDB, and Express.js.',
    icon: '⚛️',
    features: ['Custom Web Apps', 'API Development', 'Database Design', 'Real-time Features'],
  },
  {
    id: '2',
    title: 'Enterprise Dashboard',
    description: 'Create powerful admin dashboards for data visualization and business intelligence.',
    icon: '📊',
    features: ['Analytics', 'Reports', 'Real-time Data', 'User Management'],
  },
  {
    id: '3',
    title: 'College ERP',
    description: 'Comprehensive college management system with multiple modules and role-based access.',
    icon: '🎓',
    features: ['Student Management', 'Attendance', 'Fees', 'Results & Grades'],
  },
  {
    id: '4',
    title: 'Food Delivery Systems',
    description: 'Complete food delivery platforms with customer, restaurant, and delivery partner apps.',
    icon: '🍕',
    features: ['Order Management', 'Live Tracking', 'Payment Gateway', 'Multi-vendor Support'],
  },
  {
    id: '5',
    title: 'Payment Integration',
    description: 'Integrate Razorpay, Cashfree, and other payment gateways with robust security.',
    icon: '💳',
    features: ['Razorpay', 'Cashfree', 'Stripe', 'Subscription Management'],
  },
  {
    id: '6',
    title: 'Cloud Solutions',
    description: 'Deploy and manage applications on Vercel, Render, AWS, and other cloud platforms.',
    icon: '☁️',
    features: ['Deployment', 'Scaling', 'Monitoring', 'Performance Optimization'],
  },
];
