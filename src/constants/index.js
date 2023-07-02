import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  wheelChair,
  Trebuchet,
  
  threejs,
  timeline1,
  timeline2,
  timeline3,
  timeline4,
  timeline5,
  ball1,
  ball2,
  ball3,
  ball4,
  ball5,
  ball6,
  ball7,
  MOS,
  Adobe,
  Awards
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "TimeLine",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "3D Modeling",
    icon: web,
  },
  {
    title: "Animation",
    icon: mobile,
  },
  {
    title: "Handcraft",
    icon: backend,
  },
  {
    title: "Dynamic Artwork",
    icon: creator,
  },
];

const technologies = [
  {
    name: "ball",
    icon: ball1,
  },
  {
    name: "ball2",
    icon: ball2,
  },
  {
    name: "ball3",
    icon: ball3,
  },
  {
    name: "ball4",
    icon: ball4,
  },
  {
    name: "ball5",
    icon: ball5,
  },
  {
    name: "ball6",
    icon: ball6,
  },
  {
    name: "ball7",
    icon: ball7,
  },
];

const experiences = [
  {
    title: "Realizing Innovative Dreams",
    company_name: "",
    icon: timeline1,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
     "first trebuchet",
     "This year marked the beginning of my innovative journey. I made my first trebuchet, showcasing my strong innovation skills and potential."
    ],
  },
  {
    title: "learning Blender",
    company_name: "",
    icon: timeline2,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Learning Blender is an exciting journey that can unleash your creativity in 3D modeling, animation and rendering. While mastering Blender's comprehensive toolset can be challenging, it provides a powerful platform for creating stunning visual projects."
      ],
  },
  {
    title: "Certifications and Artistic Achievements",
    company_name: "",
    icon: timeline3,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "In this period, Earned several Adobe and Microsoft professional certificates, demonstrating your proficiency in technical applications. Additionally, I distinguished myself in multiple international art competitions.",
      "Won the runner-up in the Yunshang Miaobi competition.",
      "Won the third place in the \"2023 Macao International Museum Painting Competition\".",
      "In the \"Italy Venice International Youth Painting Competition\", won the gold medal in the preliminary round."
      ],
  },
  {
    title: "Pursuing Challenge and Innovation",
    company_name: "",
    icon: timeline4,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Unsatisfied with the status quo, I attempted to construct a trebuchet again, continuing my journey of innovation and challenge, with hopes of creating more possibilities.",
    ],
  },
  {
    title: "Design, 3D",
    company_name: "",
    icon: timeline5,
    iconBg: "#E6DEDD",
    date: "Future",
    points: [
      " I plan to study interactive design in Taiwan and make an animation. Starting from learning character design, I hope to become an animator or model designer in the future.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "An incredible tool for 3D modeling and animation that deepened my understanding of spatial design and visualization.",
    name: "Blender",
    designation: "",
    company: "",
    image: './OIP.jpg',
  },
  {
    testimonial:
      "A versatile platform for photo editing and graphic design that honed my skills in image manipulation and creativity.",
    name: "Photoshop",
    designation: "",
    company: "",
    image: "./Photoshop_CC_icon.webp",
  },
  {
    testimonial:
      "A comprehensive digital painting software that enhanced my abilities in digital illustration, character creation, and storytelling.",
    name: "Clip Studio",
    designation: "",
    company: "",
    image: "./OIP (1).jpg",
  },
  
];

const projects = [
  {
    name: "Pioneering Smart Wheelchair",
    description:
      "During these years, I focused on resolving social issues. Utilized Arduino technology and eco-friendly materials to develop a special wheelchair for the visually impaired, equipped with sensors to detect and avoid obstacles.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "Recycle",
        color: "green-text-gradient",
      },
      {
        name: "Project",
        color: "pink-text-gradient",
      },
    ],
    image: wheelChair,
    source_code_link: "https://drive.google.com/file/d/1azoydjzJIVkqHafGJkRGqPOZ3DtQIzI2/view?usp=sharing",
  },
  {
    name: "Trebuchet",
    description:
      "Hand-making a trebuchet is a fantastic, hands-on way to learn about physics, engineering, and history. The process fosters problem-solving skills, attention to detail, and patience. Upon completion,It offers a tangible, interactive way to explore the principles of gravity, force, and projectile motion. Moreover, it provides a historical glimpse into medieval warfare technology, making learning both fun and engaging.",
    tags: [
      {
        name: "Geometry",
        color: "blue-text-gradient",
      },
      {
        name: "Physics",
        color: "green-text-gradient",
      },
      {
        name: "Project",
        color: "pink-text-gradient",
      },
    ],
    image: Trebuchet,
    source_code_link: "https://youtu.be/GoyM09nBccc",
  },
  {
    name: "Microsoft Office Specialist ",
    description:
      "I have obtained many certificates on Microsoft's software, and I will take the word associate exam next.",
    tags: [
      {
        name: "Microsoft",
        color: "blue-text-gradient",
      },
      {
        name: "Office",
        color: "green-text-gradient",
      },
      {
        name: "Certificate",
        color: "pink-text-gradient",
      },
    ],
    image: MOS ,
    source_code_link: "https://flic.kr/s/aHBqjAKVig",
  },
  {
    name: "Adobe Certified Professional",
    description:
      "I applied for Adobe photoshop and Illustrator, so I have an Adobe Certified Professional certificate.",
    tags: [
      {
        name: "Adobe",
        color: "blue-text-gradient",
      },
      {
        name: "Visual Design",
        color: "green-text-gradient",
      },
      {
        name: "Certificate",
        color: "pink-text-gradient",
      },
    ],
    image: Adobe ,
    source_code_link: "https://flic.kr/s/aHBqjAL11E",
  },
  {
    name: "Awards",
    description:
      "In the pursuit of personal growth and self-improvement, I choose to participate in competitions while studying for exams or tests. This decision showcases my exceptional ability to balance multiple commitments and signs my dedication to achieving success in various do mains simultaneously taking time to improve Art design myself, and got me some awards.",
    tags: [
      {
        name: "Painting",
        color: "blue-text-gradient",
      },
      {
        name: "Art",
        color: "green-text-gradient",
      },
      {
        name: "Competition",
        color: "pink-text-gradient",
      },
    ],
    image: Awards ,
    source_code_link: "https://flic.kr/s/aHBqjAKVDv",
  },
];

export { services, technologies, experiences, testimonials, projects };
