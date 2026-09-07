// ---------------------------------------------------------------------------
// All portfolio content lives here, separate from UI components.
// Replace placeholder values (marked "PLACEHOLDER") with your real details.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'A Nantha Kumar',
  title: 'Full Stack Developer',
  focus: 'Full Stack Developer • Automation • Cybersecurity',
  headline: ['Building digital systems', 'that solve real problems.'],
  summary:
    'I build reliable web applications, automate processes, work with databases, and explore secure, scalable technology solutions.',
  image: '/profile.png', // Drop your photo at public/profile.jpg
  resume: '/Nantha_Kumar_Resume.docx',
  email: 'nantha2614@gmail.com',
  phone: '+91 9626452539',
  whatsapp: 'https://wa.me/919626452539',
  tryhackme:
    'https://tryhackme.com/p/nantha2614?utm_campaign=social_share&utm_medium=social&utm_content=profile&utm_source=copy&sharerId=67bea513fdf112f3bdff93f0',
  //github: 'https://github.com/your-username', // PLACEHOLDER
  linkedin: 'https://www.linkedin.com/in/a-nanthakumar-2614nk',
}

export const aboutStats = [
  { label: 'Technology', value: 'Full Stack Development' },
  { label: 'Focus', value: 'Developer • Cybersecurity' },
  { label: 'Database', value: 'MySQL • PostgreSQL' },
  { label: 'Interest', value: 'Building Practical Solutions' },
]

export const aboutText = [
  "I'm an Electronics & Communication Engineering graduate with hands-on experience across software development, IT operations, automation, database management, testing, and cybersecurity.",
  'My current role has exposed me to admin portal development, backend and database work, process automation, IT support and troubleshooting, ticket-based issue resolution, manual QA, and systems management — giving me a practical, end-to-end view of how technology is built, secured, and kept running.',
]

export const hobbies = [
  { id: 'movies', label: 'Watching movies', icon: 'Film' },
  { id: 'music', label: 'Listening to music', icon: 'Music' },
  { id: 'friends', label: 'Chill out with friends', icon: 'Users' },
  { id: 'travel', label: 'Travel', icon: 'Plane' },
  { id: 'food', label: 'Foods', icon: 'UtensilsCrossed' },
  { id: 'night', label: 'Loves dark night', icon: 'Moon' },
]

export const skillCategories = [
  {
    title: 'Development',
    icon: 'Code2',
    skills: ['Full Stack Development', 'Python', 'C', 'Admin Portal Development', 'Backend Development'],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['MySQL', 'Database Management', 'Database Backups'],
  },
  {
    title: 'Automation',
    icon: 'Workflow',
    skills: ['IT Process Automation', 'Workflow Automation'],
  },
  {
    title: 'Cybersecurity',
    icon: 'ShieldCheck',
    skills: ['Ethical Hacking', 'Vulnerability Assessment', 'Network Security', 'Penetration Testing'],
  },
  {
    title: 'Security Tools',
    icon: 'Terminal',
    skills: ['Kali Linux', 'Burp Suite', 'Nmap'],
  },
  {
    title: 'Testing',
    icon: 'FlaskConical',
    skills: ['Manual QA', 'Smoke Testing'],
  },
  {
    title: 'IT Operations',
    icon: 'Headset',
    skills: ['Ticketing', 'Troubleshooting', 'Systems Management', 'IT Support'],
  },
]

export const projects = [
  {
    id: 'vacuum-robot',
    featured: true,
    layout: 'horizontal',
    category: 'Robotics / Machine Learning',
    name: 'Smart Autonomous Vacuum Cleaner Robot',
    description:
      'An autonomous robot designed to detect and collect waste cotton using a vacuum-based collection mechanism, sensors, camera-based image processing, and machine learning concepts.',
    tech: ['Python', 'OpenCV', 'Raspberry Pi', 'Image Processing', 'Machine Learning', 'Ultrasonic Sensors', 'PIR Sensor', 'DC Motor', 'BLDC Motor'],
    image: '/projects/vacuum-robot.jpg',
    video: '/projects/Smart Autonomous Vacuum Cleaner Robot.mp4',
    ppt: '/projects/Smart Autonomous Vacuum Cleaner Robot.pptx',
    pptView: '/projects/Smart Autonomous Vacuum Cleaner Robot.pdf',
    pptLabel: 'Smart Autonomous Vacuum Cleaner Robot.ppt',
    github: '',
    demo: '',
    pipeline: ['Camera', 'Image Processing', 'Cotton Detection', 'Decision', 'Autonomous Movement', 'Vacuum Collection'],
    caseStudy: {
      problem:
        'Manual collection of waste cotton is slow and labor-intensive, and needs a system that can identify and reach scattered material on its own.',
      solution:
        'A vacuum-based robot that combines camera vision with sensor input to locate waste cotton and navigate toward it autonomously.',
      technology: 'Python, OpenCV, Raspberry Pi, ultrasonic and PIR sensors, DC and BLDC motors.',
      howItWorks:
        'The onboard camera feeds frames into an image-processing pipeline that detects cotton in view. Ultrasonic and PIR sensors support obstacle awareness. Based on detection results, the robot decides on a movement direction, navigates toward the target, and activates the vacuum mechanism to collect it.',
      contribution:
        'Designed and built the detection-to-collection pipeline, integrated the sensor and motor hardware, and implemented the control logic tying vision output to movement decisions.',
      outcome:
        'A working prototype that demonstrates autonomous detection and collection of waste cotton end to end.',
    },
  },
  {
    id: 'admin-portal',
    featured: false,
    layout: 'portal',
    category: 'Full Stack / Real-time Systems',
    name: 'Internal Admin Portal',
    description:
      'An internal admin portal built for administrators, live-integrated with a mobile application so operations stay in sync in real time.',
    tech: ['Full Stack', 'Admin Portal', 'Real-time Sync', 'Mobile Integration', 'Backend', 'Database'],
    image: '/projects/Adminportal.png',
    imageFit: 'contain',
    github: '',
    demo: '',
    caseStudy: {
      problem:
        'Admins needed a centralized portal to manage operations while staying aligned with what users do in the mobile app.',
      solution:
        'A web-based internal admin portal connected to the same backend as the mobile app, with live updates for real-time visibility and control.',
      technology: 'Full stack web development, backend APIs, database management, and real-time mobile integration.',
      howItWorks:
        'Administrators manage users, workflows, and operational data from the portal. Changes sync with the mobile application in real time so both surfaces reflect the latest state.',
      contribution:
        'Developed admin portal features, supported backend and database work, and helped wire live integration between the portal and the mobile application.',
      outcome:
        'A live admin system that keeps portal and mobile app data consistent for day-to-day operations.',
    },
  },
  {
    id: 'bluetooth-home',
    featured: false,
    layout: 'vertical',
    category: 'Embedded Systems',
    name: 'Bluetooth Controlled Home Appliances',
    description:
      'A Bluetooth-based system for remotely controlling home appliances using embedded hardware and wireless communication.',
    tech: ['Embedded Systems', 'Bluetooth Communication', 'Microcontroller', 'Automation', 'Hardware Control'],
    image: '/projects/Bluetooth Controlled Home Appliances.png',
    imageFit: 'contain',
    github: '',
    demo: '',
    caseStudy: {
      problem: 'Home appliances are often controlled only from fixed switches, which is inconvenient from another room.',
      solution: 'A Bluetooth-linked controller that lets a smartphone send commands to switch appliances on or off wirelessly.',
      technology: 'Embedded microcontroller hardware with Bluetooth communication and appliance switching circuits.',
      howItWorks:
        'The phone pairs with the Bluetooth module. User taps controls in the companion app; the microcontroller receives the command and toggles the connected relays/appliances.',
      contribution: 'Built the hardware control path and wireless command handling for remote appliance switching.',
      outcome: 'A working demo of smartphone-based wireless home appliance control.',
    },
  },
  {
    id: 'servo-nrf24',
    featured: false,
    layout: 'technical',
    category: 'Embedded Systems',
    name: 'Servo Motor Control with Arduino & NRF24L01',
    description:
      'A wireless servo motor control project using Arduino and NRF24L01 communication modules.',
    tech: ['Arduino', 'Servo Control', 'Wireless Communication', 'Embedded Systems', 'NRF24L01'],
    image: '/projects/Servo Motor NRF24L01.png',
    imageFit: 'contain',
    ppt: '/projects/Servo Motor Control with Arduino & NRF24L01.pptx',
    pptView: '/projects/Servo Motor Control with Arduino & NRF24L01.pdf',
    pptLabel: 'Servo Motor Control with Arduino & NRF24L01.ppt',
    github: '',
    demo: '',
    caseStudy: {
      problem: 'Wired servo control limits where the operator and mechanism can be placed.',
      solution: 'An Arduino + NRF24L01 wireless link that sends position commands to a remote servo.',
      technology: 'Arduino boards, servo motors, and NRF24L01 2.4 GHz transceiver modules.',
      howItWorks:
        'The transmitter Arduino reads input and sends packets over NRF24L01. The receiver Arduino parses the packet and drives the servo to the requested angle.',
      contribution: 'Implemented the wireless transmit/receive path and servo actuation logic.',
      outcome: 'Reliable wireless servo positioning suitable for remote embedded control demos.',
    },
  },
  {
    id: 'crackers-store',
    featured: false,
    layout: 'ecommerce',
    category: 'Web Development',
    name: 'Online Crackers Purchase Website',
    description: 'An e-commerce-style web application designed for browsing and purchasing crackers online.',
    tech: ['Web Development', 'UI', 'Database', 'Product Management', 'User Interaction'],
    image: '/projects/crackers-cover.jpg',
    imageFit: 'contain',
    github: '',
    demo: '',
    caseStudy: {
      problem: 'Local crackers shopping is often offline-only, making product browsing and ordering harder for customers.',
      solution: 'A simple web storefront for browsing cracker products and placing purchase-oriented interactions online.',
      technology: 'HTML/CSS/JS web pages with product listing UI and basic user flows (browse, login/signup patterns).',
      howItWorks:
        'Users land on the storefront, browse product visuals/categories, and move through signup/login-style pages toward purchase intent.',
      contribution: 'Designed and built the front-end pages and product presentation for the crackers purchase experience.',
      outcome: 'A working e-commerce-style website prototype focused on online crackers browsing and purchase flow.',
    },
  },
]

export const experience = [
  {
    year: 'Oct 2025 — Present',
    title: 'Graduate Engineer Trainee (Full Stack Developer)',
    org: 'Arche Global Private Limited, Bangalore',
    detail:
      'Admin portal development, full stack development, backend and database work, IT process automation, manual QA and smoke testing, ticket-based troubleshooting, and IT operations support.',
  },
]

export const education = [
  {
    year: '2026 — Present',
    title: 'MBA Artificial Intelligence and Data Science',
    org: 'SRM University Kattankulathur, Chennai',
    detail: 'CGPA	9.83',
  },
  {
    year: '2021 — 2025',
    title: 'B.E. Electronics & Communication Engineering',
    org: 'Ramco Institute of Technology, Rajapalayam',
    detail: 'CGPA: 7.3',
  },
  {
    year: '2020 — 2021',
    title: '12th (HSC)',
    org: 'Rasi International School (CBSE), Namakkal',
    detail: '74.2%',
  },
  {
    year: '2018 — 2019',
    title: '10th (SSLC)',
    org: 'AAA International School (CBSE), Sivakasi',
    detail: '60.2%',
  },
]

// Drop certificate images in public/certificates/ using these filenames.
export const certifications = [
  {
    id: 'cpt',
    name: 'Certified Penetration Tester (CPT)',
    provider: 'RedTeam Hacker Academy',
    year: 'May 2025',
    image: '/certificates/cpt.png',
  },
  {
    id: 'cisco',
    name: 'Introduction to Cybersecurity',
    provider: 'Cisco Networking Academy',
    year: 'March 2025',
    image: '/certificates/cisco.png',
  },
  {
    id: 'simplilearn',
    name: 'Introduction to Cyber Security',
    provider: 'Simplilearn',
    year: 'May 2024',
    image: '/certificates/simplilearn.png',
  },
  {
    id: 'infosys',
    name: 'Introduction to Digital Marketing',
    provider: 'Infosys Springboard',
    year: 'February 2024',
    image: '/certificates/infosys.png',
  },
  {
    id: 'coursera',
    name: 'Foundations of Cybersecurity',
    provider: 'Coursera',
    year: 'February 2024',
    image: '/certificates/coursera.png',
  },
  {
    id: 'Cappriciosec University',
    name: 'Certified Wifi Pentesting 101(DEAUTH, SPAM AND CAPTIVE PORTAL',
    provider: 'Cappriciosec University',
    year: 'July 2025',
    image: '/certificates/cappriciosec.png',
  },
]

// Drop both award images in public/achievements/
export const achievement = {
  name: 'Agility | Innovation Award',
  org: 'Arche Global',
  event: '2026 Delivery Townhall',
  images: ['/achievements/agility-1.jpg', '/achievements/agility-2.jpg'],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
