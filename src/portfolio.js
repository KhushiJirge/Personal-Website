/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Khushi Jirge",
  title: "Hey there, I'm Khushi Jirge!",
  subTitle: emoji(
    "I am a student at the University of Waterloo studying Honors Computer Science. I am always enthusiastic about learning new skills and applying my passion for technology while collaborating with like-minded people. Feel free to connect with me and chat!"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KhushiJirge",
  linkedin: "https://www.linkedin.com/in/khushi-jirge/",
  gmail: "khushi.jirge@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Tech Stack",
  subTitle: "",
  skills: [
    {
      title: emoji(
        "⚡ Programming Languages:"
      ),
      imageUrl: [
        
        {
          name: "Python",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        },
        {
          name: "C",
          imageUrl: "https://static-00.iconduck.com/assets.00/c-original-icon-1788x2048-6b74oi6m.png",
        },
        {
          name: "C++",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
        },
        {
          name: "Java",
          imageUrl: "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
        },
        {
          name: "SQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png",
        },
        {
          name: "Racket",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Racket-logo.svg/1200px-Racket-logo.svg.png",
        },
        {
          name: "Turing",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PP7ZOgL3_KrTc7QoJiT_Kfj5EZbzvRrZnw&s",
        },
        
      ]
    },

    {
      title: emoji(
        "⚡ Machine Learning Libraries/Tools:"
      ),
      imageUrl: [
        
        {
          name: "Ultralytics YOLO",
          imageUrl: "https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64994922cf2a6385a4bf4489_UltralyticsYOLO_mark_blue.svg",
        },
        {
          name: "TensorFlow",
          imageUrl: "https://static-00.iconduck.com/assets.00/tensorflow-icon-955x1024-hd4xzbqj.png",
        },
        {
          name: "Keras",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png",
        },
        {
          name: "OpenCV",
          imageUrl: "https://static-00.iconduck.com/assets.00/opencv-icon-828x1024-zpluvq45.png",
        },
        {
          name: "PyTorch",
          imageUrl: "https://static-00.iconduck.com/assets.00/pytorch-icon-1694x2048-jgwjy3ne.png",
        },
        {
          name: "Matplotlib",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png",
        },
        {
          name: "Numpy",
          imageUrl: "https://static-00.iconduck.com/assets.00/file-type-numpy-icon-1901x2048-oulkqypt.png",
        },
        {
          name: "Roboflow",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9pl1f0FUgfttU7hr0ZZcxaGCTMTGO1ZNrA&s",
        },
        {
          name: "CVAT",
          imageUrl: "https://cdn.prod.website-files.com/62c2f68750086204ad7a18f9/640616a471bfc400062bc25c_Avatar%2004.png",
        },
        {
          name: "Hugging Face",
          imageUrl: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
        },
        
        
      ]
    },
    {
      title: emoji(
        "⚡ Databases:"
      ),
      imageUrl: [
        
        {
          name: "MongoDB",
          imageUrl: "https://www.svgrepo.com/show/331488/mongodb.svg",
        },
        {
          name: "Firebase",
          imageUrl: "https://www.gstatic.com/devrel-devsite/prod/v3239347c48d1e3c46204782fd038ba187a6753dfa7d7a0d08a574587ae2085f5/firebase/images/touchicon-180.png",
        },
        {
          name: "MySQL",
          imageUrl: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
        },
        
      ]
    },
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Waterloo",
      logo: require("./assets/images/uwLogo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "September 2023 - April 2028",
      desc: "Relevant Courses",
      descBullets: [
        "Data Structures and Data Management",
        "Foundations of Sequential Programs",
        "Computer Organization and Design",
        "Object-Oriented Software Development",
        "Algorithm Design and Data Abstraction",
        "Designing Functional Programs"
      ]
    },
    {
      schoolName: "Georges Vanier Secondary School",
      logo: require("./assets/images/GVSS_logo.jpg"),
      subHeader: "High School Diploma",
      duration: "September 2013 - April 2017",
      desc: "STEM+ Program, Information and Communication Technology SHSM",
      descBullets: ["Extracurriculars: Robotics, Math Club, Student Council, Social Justice, Ambassador's Club",
        "Achievements: Won 4 certificates of Distinctions for Math contests by placing in the top 25%.",
        "Awards: Computer Science, Math, and Business Leadership subject awards for top grades.",
        "Scholarships: Waterloo President's Scholarship of Distinction, Telesat Women in STEM, Ted Rogers Scholarship, Schulich Leader Scholarship offer"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
