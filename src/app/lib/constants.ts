import { image } from "@nextui-org/react"
import { Domain } from "domain"

export const about_me_description   = "I am a final-year Computer Engineering student, currently pursuing a Bachelor of Technology in Computer Science and Engineering. Passionate about technology and problem-solving, I am dedicated to building innovative and efficient solutions across various domains. Currently, I am interning with Bugsmirror Research Private Limited, where I am honing my skills in web development using modern technologies like Next.js, TypeScript, and React. This hands-on experience has allowed me to deepen my understanding of frontend development and sharpen my skills in creating responsive, user-centric applications. In addition to web development, I have a strong interest in competitive programming. I regularly solve challenges on platforms such as GeeksforGeeks, LeetCode, and CodeChef, primarily using C++. This practice has strengthened my problem-solving abilities, helping me think critically and approach complex issues methodically. With a solid foundation in computer science principles and a commitment to continuous learning, I am enthusiastic about leveraging my skills to contribute to impactful projects and advance in the tech industry."


export const workExperience =[
{
    image: "/bugsmirror-logo.webp",
    companyName: "Bugsmirror Research Private Limited",
    duration: "6 months, Work from Office",
    type: "Technical Role",
    role: "Member of Technical Staff Intern",

},{
    image:"/valethi-logo.png",
    companyName: "Valethi Technologies LLP",
    duration: "2 months, Work from Home",
    type: "Non Technical Role",
    role: "Customer Support Intern",
}
]

export const education = [
    {
        image: "/mit.png",
        period: {
            from:2023,
            till: 2025
        },
        major: "Computer Science And Engineering",
        degree: "Bachelors of Technology",
        marks: "9.4 / 10",
        college: "MIT-WPU, Pune, Maharashtra"

    },

    {
        image: "/mit.png",
        period: {
            from:2019,
            till: 2023
        },
        major: "Computer Engineering",
        degree: "Diploma",
        marks: "90.74%",
        college:"MIT-WPU, Pune, Maharashtra"
    }
]



export const projects = [
  {
      Title:"Website for Bugsmirror Research Pvt Ltd",
      Domain: "Web-Development, Next JS, Typescript, React",
      Description: "Developed the company's official website.\n\n- Collaborated on developing the official company website using Next.js, React, TypeScript, and Tailwind CSS. \n- Implemented reusable UI components, optimized performance, and ensured responsive design across all devices.\n- Worked in an Agile environment, using Git for version control and contributing to sprint deliverables.",
      Link: "https://bugsmirror.com/"
    },
    {
        Title:"Admin Portal for Bugsmirror Research Pvt Ltd",
        Domain: "Web-Development, Next JS, Typescript, React",
        Description: "Development of an internal portal for administrative use, designed to manage various company operations and processes.",
        Link:""
    },
  {
    Title:"BusRoute Planner: Journey Finder using GTFS Data",
    Domain: "CPP, Data Structures and Algorithms",
    Description: "Developed a C++ Application for Optimal Bus Route Analysis: \n\n - It processes GTFS (General Transit Feed Specification) transit data\n - It finds all possible routes between two stops as:-  direct routes, one-transfer routes, and two-transfer route journeys, \n - Enhances travel planning efficiency through intelligent data analysis.",
    Link: "https://github.com/madhura824/Question-2/"


  },
  {
    Title:"Smart Document Analyzer ",
    Domain: "Web Development",
    Description: "This system allows users to upload and store documents daily, with a credit limit for each. \n\n - It also had the \"Check Document similarity feature\" \n - The content similarity feature compares documents using the Gemini API, identifying similar content from the database. \n - The Admin Dashboard is for approving credits and viewing user analytics, \n - Automated Credit Reset at midnight, and Export Reports for downloading scan history. \n - The system supports multiple users on a local server, enhancing accessibility and scalability.",
    Link: "https://github.com/madhura824/DocumentScannerAndMatcher"


  },
  {
      Title:"Path Finding Algorithms Visualizer",
      Domain: "Web Development, Data Structures and Algorithms",
      Description: "Developed an Interactive Path-Finding-Algorithm Visualizer:\n\n - Showcases workings of algorithms such as A*, Dijkstra’s, BFS, and DFS\n - Provides interactive visualizations to demonstrate the inner workings of each algorithm \n - Offers an engaging and educational experience for learners and developers\n - Built using React.js, Javascript and Tailwind CSS for a responsive and visually appealing interface",
      Link: "https://github.com/madhura824/pathFindingVisualizer/"
  
  
    },
    {
      Title:"File Compressor using Huffman Encoding",
      Domain: "Python, Data Structures and Algorithms",
      Description: "Developed a File Compressor using Huffman Encoding: \n\n - Implements lossless compression and decompression (extraction)\n - Significantly reduces file size, improving storage efficiency\n - Developed using Python, leveraging data structures and algorithms for optimal performance",
      Link: "https://github.com/madhura824/huffmanEncoding"
  
    },
    

    {
      Title: "ERP (Enterprise Resource Planning) for the College Management System",
      Domain: "Web-Development, Node, Javascript",
      Description: "Created REST APIs and developed the backend for an ERP system to streamline administrative tasks in educational institutions primarily using Node JS, JavaScript and Thunder Client.",
      Link:"https://github.com/madhura824/erp_backend"

    },
    {
  
      Title:"Bus Scheduling and Depot Management System",
      Domain: "DataBase Management System",
      Description: "Developed an effective Bus Depot Management System using core programming concepts and database management system to :\n \n - Optimize depot operations, scheduling, staffing, ticketing \n - Enhance operational efficiency and reduce manual effort.",
      Link: "https://github.com/madhura824/busDepotManagement"
  
    },
  ]
  export const resumeURL = "https://drive.google.com/drive/folders/1ZrH0FKY3oCBOWvoPr09rTSDde8-uR2XA?usp=sharing"
  