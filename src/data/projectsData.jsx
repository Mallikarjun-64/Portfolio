import { images } from "../Images";
export const categories = [
  "All",
  "Web Development",
  "Cybersecurity",
];

export const projects = [
  // Web Development - AI Projects
  {
    title: "SkinAI – AI-Powered Dermatology Assistant",
    category: "Web Development",
    download: null,
    images: [
      images.project1,
      images.project2,
    ],
    live: null,
    repo: "https://github.com/Mallikarjun-64",
    video: null,
    alt: "Project image",
    desc: `Built an AI-powered skin disease detection platform using React, Firebase, and Machine Learning.

💻 Tech Stack:
-> Frontend: React.js
-> Backend: Firebase, Cloud Firestore
-> AI/ML: Image-based diagnosis
-> Deployment: Vercel

✨ Features:
-> Integrated image-based diagnosis for skin diseases
-> Secure authentication and real-time user data management
-> Responsive healthcare-focused UI
-> Deployed on Vercel for fast, reliable access`,
  },

  // Cybersecurity
  {
    title: "Human Firewall – AI-Powered Cybersecurity Ecosystem",
    category: "Cybersecurity",
    download: null,
    images: [
      images.project3,
      images.project4,
    ],
    live: null,
    repo: "https://github.com/Mallikarjun-64",
    video: null,
    alt: "Project image",
    desc: `Developed a comprehensive cybersecurity platform for phishing detection, URL analysis, and email security awareness training.

💻 Tech Stack:
-> Frontend: Next.js, TypeScript
-> Backend: FastAPI, Python
-> ML: Scikit-learn
-> Database: Firebase

✨ Features:
-> Phishing detection and URL analysis
-> Hybrid machine-learning and heuristic-based threat detection engine
-> Email security awareness training module
-> Chrome extension for real-time malicious URL detection and protection
-> Built with Scikit-learn and Python for intelligent threat classification`,
  },
];
