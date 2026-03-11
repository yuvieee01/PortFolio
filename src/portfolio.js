/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/myAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yuvraj",
  title: "Hi all, I'm Yuvraj",
  subTitle: emoji(
    "An AI-ML Enthusiast 🚀 with a passion for building intelligent systems using Python, PyTorch, and TensorFlow, alongside robust full-stack web applications."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1JaffxcPzqS_toCsvzzbifr4zfhi236RxUoogZWQovPk/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yuvieee01",
  linkedin: "https://www.linkedin.com/in/yuvraj432",
  gmail: "me.yuvraj432@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI/ML ENGINEER WHO LOVES SOLVING PROBLEMS & BUILDING FULL-STACK APPS",
  skills: [
    emoji(
      "⚡ Developing predictive models and deep learning solutions using PyTorch and TensorFlow"
    ),
    emoji(
      "⚡ Data engineering, statistical analysis, feature engineering, and rigorous model evaluation"
    ),
    emoji(
      "⚡ Building responsive full-stack web applications with React, Tailwind, and Django"
    ),
    emoji(
      "⚡ Deploying and scaling applications and machine learning models using MLOps tools like Docker and AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "SQL & Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lovely Professional University, Punjab",
      logo: require("./assets/images/lpuLogo.png"), // TODO: Replace with LPU logo or your own image in the assets folder
      subHeader: "B.Tech. Computer Science and Engineering - Artificial Intelligence and Machine Learning",
      duration: "2023 - 2027",
      desc: "CGPA: 8.44",
      descBullets: [
        "Strong focus on Machine Learning, Algorithms, and Data Engineering",
        "Active participant in hackathons, collaborative coding, and building scalable software solutions"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend / Django",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend / React",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  display: false, // Hidden since you have no formal work experience yet
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "SOME OF THE SOFTWARE AND AI TOOLS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // TODO: Replace with a screenshot of your app
      projectName: "Breakmoney",
      projectDesc: "A robust Django-based expense splitting application engineered to manage and calculate shared costs efficiently.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/yuvieee01" // Feel free to link directly to the repo here
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // TODO: Replace with a related image
      projectName: "Computer Vision Automation",
      projectDesc: "Developed a Python-based automation script utilizing computer vision techniques to autonomously play and navigate games on mobile applications.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/yuvieee01"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Impact 🏆 "),
  subtitle: "Hackathons, real-world development, and milestones.",

  achievementsCards: [
    {
      title: "Smart India Hackathon 2024 - Top 10",
      subtitle: "Ranked in the Top 10 nationally for developing 'Rakshak', a comprehensive Women's Safety Application.",
      image: require("./assets/images/codeInLogo.webp"), // TODO: Replace with SIH logo or app screenshot
      imageAlt: "Smart India Hackathon Logo",
      footerLink: [
        {
          name: "View Details",
          url: "" // Add a link if you have a devpost or GitHub repo for Rakshak
        }
      ]
    },
    {
      title: "Karam Setu Foundation",
      subtitle: "Successfully co-developed and launched a live production website for the Karam Setu Foundation NGO in a collaborative team of two.",
      image: require("./assets/images/googleAssistantLogo.webp"), // TODO: Replace with Karam Setu logo
      imageAlt: "Karam Setu Foundation Logo",
      footerLink: [
        {
          name: "Visit Live Website",
          url: "https://www.karamsetufoundation.org"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  display: false // Hidden
};

// Talks Sections
const talkSection = {
  display: false // Hidden
};

// Podcast Section
const podcastSection = {
  display: false // Hidden
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "me.yuvraj432@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false // Hidden
};

const isHireable = true; // Set to true to show you are open to opportunities on the footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};