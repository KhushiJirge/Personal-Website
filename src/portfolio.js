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
          name: "JavaScript",
          imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
        },
        {
          name: "Java",
          imageUrl: "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
        },
        {
          name: "SQL",
          imageUrl: "https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png",
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
    {
      title: emoji(
        "⚡ Frontend/Backend Frameworks:"
      ),
      imageUrl: [
        
        {
          name: "React.js",
          imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        },
        {
          name: "Node.js",
          imageUrl: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
        },
        {
          name: "HTML5",
          imageUrl: "https://static-00.iconduck.com/assets.00/html-icon-1451x2048-69sehqrp.png",
        },
        {
          name: "CSS3",
          imageUrl: "https://static-00.iconduck.com/assets.00/css-3-icon-726x1024-610441pl.png",
        },
        {
          name: "Flask",
          imageUrl: "https://ih1.redbubble.net/image.5527411452.4567/st,small,507x507-pad,600x600,f8f8f8.jpg",
        },
        {
          name: "React Native",
          imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        },
        {
          name: "Express.js",
          imageUrl: "https://www.manektech.com/storage/developer/1646733543.webp",
        },
        {
          name: "Expo",
          imageUrl: "https://static-00.iconduck.com/assets.00/file-type-expo-icon-1807x2048-zlqoaiu7.png",
        },
        {
          name: "Selenium",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png",
        },
        {
          name: "Beautiful Soup",
          imageUrl: "https://datascientest.com/en/files/2024/01/beautiful-soup.png",
        },
        
      ]
    },
    {
      title: emoji(
        "⚡ Tools/Technologies:"
      ),
      imageUrl: [
        
        {
          name: "Git",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
        },
        {
          name: "Jupyter Notebook",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
        },
        {
          name: "Power BI",
          imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.png",
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
      subHeader: "Bachelor of Computer Science Honours with Co-op",
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
      duration: "September 2019 - June 2023",
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
      role: "Computer Vision Engineer Intern",
      company: "Martinrea International Inc.",
      companylogo: require("./assets/images/martinrea.png"),
      date: "September 2024 – December 2024",
      desc: "Developed AI models for welding inspection, improving accuracy and reducing cycle times. Built camera to computer pipelines for real-time image processing and model retraining, and implemented multithreading to minimize downtime. Created tools for data augmentation and synthetic image generation, and trained models using platforms like Teachable Machine and Roboflow. Additionally, I created SQL queries to display company productivity data on Power BI visualizations.",
      descBullets: [
      ],
      tech: [
          {
            name: "Python",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
          },          
          {
            name: "TensorFlow",
            imageUrl: "https://static-00.iconduck.com/assets.00/tensorflow-icon-955x1024-hd4xzbqj.png",
          },
          {
            name: "Flask",
            imageUrl: "https://ih1.redbubble.net/image.5527411452.4567/st,small,507x507-pad,600x600,f8f8f8.jpg",
          },
          {
            name: "React.js",
            imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          },
          {
            name: "Ultralytics YOLO",
            imageUrl: "https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64994922cf2a6385a4bf4489_UltralyticsYOLO_mark_blue.svg",
          },
          {
            name: "Keras",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png",
          },
          {
            name: "Roboflow",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9pl1f0FUgfttU7hr0ZZcxaGCTMTGO1ZNrA&s",
          },
          {
            name: "PyTorch",
            imageUrl: "https://static-00.iconduck.com/assets.00/pytorch-icon-1694x2048-jgwjy3ne.png",
          },
          {
            name: "SQL",
            imageUrl: "https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png",
          },
          {
            name: "CVAT",
            imageUrl: "https://cdn.prod.website-files.com/62c2f68750086204ad7a18f9/640616a471bfc400062bc25c_Avatar%2004.png",
          },
          {
            name: "Hugging Face",
            imageUrl: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
          },
          
        ],
    },
    {
      role: "Web Developer Intern",
      company: "PharmAchieve",
      companylogo: require("./assets/images/pharmachieve.jpg"),
      date: "July 2022 – August 2022",
      desc: "I enhanced the company's educational website, used by 45,000 pharmacists and 8,000 nurses annually, by making it WCAG (Web Content Accessibility Guidelines) compliant. Additionally, I converted over 100 medical images into accessible SVG formats, enabling screen readers to read the visual content aloud for visually-impaired people.",
      tech: [
        {
          name: "HTML5",
          imageUrl: "https://static-00.iconduck.com/assets.00/html-icon-1451x2048-69sehqrp.png",
        },
        {
          name: "CSS3",
          imageUrl: "https://static-00.iconduck.com/assets.00/css-3-icon-726x1024-610441pl.png",
        },
        {
          name: "JavaScript",
          imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
        },
        
      ],
    },
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
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/storybook.jpg"),
      projectName: "Tale Teller",
      projectDesc: "Developed a storybook app with the MERN stack, featuring Google OAuth for secure authentication. I implemented genre analysis with XLM-RoBERTa and story prompts using GPT-2 via a Flask API, and used Beautiful Soup to scrape writing contest opportunities for user growth.",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://github.com/KhushiJirge/Tale-Teller"
        }
        //  you can add extra buttons here.
      ],
      tech: [
        {
          name: "MongoDB",
          imageUrl: "https://www.svgrepo.com/show/331488/mongodb.svg",
        },
        {
          name: "Express.js",
          imageUrl: "https://www.manektech.com/storage/developer/1646733543.webp",
        },
        {
          name: "React.js",
          imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        },
        {
          name: "Node.js",
          imageUrl: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
        },
        {
          name: "Python",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        },
        {
          name: "Flask",
          imageUrl: "https://ih1.redbubble.net/image.5527411452.4567/st,small,507x507-pad,600x600,f8f8f8.jpg",
        },
        {
          name: "Beautiful Soup",
          imageUrl: "https://datascientest.com/en/files/2024/01/beautiful-soup.png",
        },
        {
          name: "Hugging Face",
          imageUrl: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
        },

      ]
    },
    {
      image: require("./assets/images/pawfectmatch.jpg"),
      projectName: "Pawfect Match",
      projectDesc: "Developed a mobile app for pet adoption using React Native and Expo, enabling users to browse available pets. User data, adoption criteria, and pet details were managed with Firebase, ensuring real-time syncing. I also implemented real-time chat messaging via Firebase for communication between users and adoption centers.",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://github.com/KhushiJirge/Pawfect-Match"
        }
      ],
      tech: [
        {
          name: "Firebase",
          imageUrl: "https://www.gstatic.com/devrel-devsite/prod/v3239347c48d1e3c46204782fd038ba187a6753dfa7d7a0d08a574587ae2085f5/firebase/images/touchicon-180.png",
        },
        {
          name: "React Native",
          imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        },
        {
          name: "Expo",
          imageUrl: "https://static-00.iconduck.com/assets.00/file-type-expo-icon-1807x2048-zlqoaiu7.png",
        },
        {
          name: "JavaScript",
          imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
        },
      ]
    },
    {
      image: require("./assets/images/plantpal.jpg"),
      projectName: "Plant Pal",
      projectDesc: "Developed an AI-driven indoor plant recommender app that considers user location, budget, lighting, and season. The app's frontend was built with HTML/CSS/JavaScript, while the backend used Python with Flask for handling requests. I integrated the Gemini Pro Vision API to analyze room lighting and layout images.",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://devpost.com/software/plant-pal"
        }
      ],
      tech: [
        {
          name: "Flask",
          imageUrl: "https://ih1.redbubble.net/image.5527411452.4567/st,small,507x507-pad,600x600,f8f8f8.jpg",
        },
        {
          name: "HTML5",
          imageUrl: "https://static-00.iconduck.com/assets.00/html-icon-1451x2048-69sehqrp.png",
        },
        {
          name: "CSS3",
          imageUrl: "https://static-00.iconduck.com/assets.00/css-3-icon-726x1024-610441pl.png",
        },
        {
          name: "JavaScript",
          imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
        },
        {
          name: "Gemini",
          imageUrl: "https://camo.githubusercontent.com/77ba4ba362fc39151379e4e7691125c8bb130eb2ade811ce9f76d4d5236c6847/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f662f66302f476f6f676c655f426172645f6c6f676f2e7376672f3132303070782d476f6f676c655f426172645f6c6f676f2e7376672e706e67",
        },
      ]
    },
    {
      image: require("./assets/images/covid.jpg"),
      projectName: "COVID-19 Simulator",
      projectDesc: "Designed a graphical COVID-19 simulator using Java with OOP concepts, Gradle, and GUI tools like Swing and AWT in Apache NetBeans. The simulator visualizes COVID-19 spread under various factors, including vaccinations, quarantine, and gathering limits, using line charts and visual elements to predict accurate results.",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://github.com/KhushiJirge/MyProjects/tree/COVID-19-Simulation"
        }
      ],
      tech: [
        {
          name: "Java",
          imageUrl: "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
        },

      ]
    },
    {
      image: require("./assets/images/drone.avif"),
      projectName: "WARG Bootcamp",
      projectDesc: "Used the Ultralytics object detection AI to identify drone landing pads and developed an algorithm for the drone to land on the closest pad upon reaching its waypoint. I tested the drone's functionality in a Python-based simulator environment.",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://github.com/KhushiJirge/Autonomy-Bootcamp"
        }
      ],
      tech: [
        {
          name: "Python",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        },
        {
          name: "Ultralytics YOLO",
          imageUrl: "https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64994922cf2a6385a4bf4489_UltralyticsYOLO_mark_blue.svg",
        },
        {
          name: "PyTorch",
          imageUrl: "https://static-00.iconduck.com/assets.00/pytorch-icon-1694x2048-jgwjy3ne.png",
        },

      ]
    },
    {
      image: require("./assets/images/space.png"),
      projectName: "Space Invaders",
      projectDesc: "Replicated the classic Space Invaders game using Python and PyGame, featuring player-controlled movement, shooting mechanics, custom graphics, and a scoring system with increasing difficulty.",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://github.com/KhushiJirge/MyProjects/tree/Space-Invaders-Replica"
        }
      ],
      tech: [
        {
          name: "Python",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        },
        {
          name: "PyGame",
          imageUrl: "https://user-images.githubusercontent.com/9541/97474395-5b9a9b80-194c-11eb-8ada-5fbe23fb37c9.png",
        },

      ]
    },
    {
      image: require("./assets/images/tic.png"),
      projectName: "Tic-Tac-Toe AI",
      projectDesc: "Created a classic Tic-Tac-Toe game using Python and PyGame for Harvard’s CS50 Intro to AI course, incorporating tree traversal algorithms like DFS and the Minimax algorithm, optimized with Alpha-Beta pruning.",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://github.com/KhushiJirge/MyProjects/tree/Harvard-CS50-Intro-to-Artificial-Intelligence/tictactoe"
        }
      ],
      tech: [
        {
          name: "Python",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        },
        {
          name: "PyGame",
          imageUrl: "https://user-images.githubusercontent.com/9541/97474395-5b9a9b80-194c-11eb-8ada-5fbe23fb37c9.png",
        },

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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all :)",
  number: "",
  email_address: "khushi.jirge@gmail.com",
  other_email: "ksjirge@uwaterloo.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
