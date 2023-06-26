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
  Certificate,
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
  ball7
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
    title: "Pursuing Challenge and Innovation",
    company_name: "",
    icon: timeline5,
    iconBg: "#E6DEDD",
    date: "Future",
    points: [
      "Unsatisfied with the status quo, I attempted to construct a trebuchet again, continuing my journey of innovation and challenge, with hopes of creating more possibilities.",
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
    image: './public/OIP.jpg',
  },
  {
    testimonial:
      "A versatile platform for photo editing and graphic design that honed my skills in image manipulation and creativity.",
    name: "Photoshop",
    designation: "",
    company: "",
    image: "./public/Photoshop_CC_icon.webp",
  },
  {
    testimonial:
      "A comprehensive digital painting software that enhanced my abilities in digital illustration, character creation, and storytelling.",
    name: "Clip Studio",
    designation: "",
    company: "",
    image: "./public/OIP (1).jpg",
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
        name: "Code",
        color: "green-text-gradient",
      },
      {
        name: "Recycle",
        color: "pink-text-gradient",
      },
    ],
    image: wheelChair,
    source_code_link: "https://github.com/",
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
        name: "Wood",
        color: "green-text-gradient",
      },
      {
        name: "Physics",
        color: "pink-text-gradient",
      },
    ],
    image: Trebuchet,
    source_code_link: "https://github.com/",
  },
  {
    name: "Certificate ",
    description:
      "This certificate is more than just an accolade. It's a testament to the countless hours of dedication, passion, and resilience throughout my artistic journey. It symbolizes my growth as an artist and as a person. More than a milestone, it propels me to push my creative boundaries further.",
    tags: [
      {
        name: "Microsoft",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe",
        color: "green-text-gradient",
      },
      {
        name: "Competition",
        color: "pink-text-gradient",
      },
    ],
    image: Certificate ,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
