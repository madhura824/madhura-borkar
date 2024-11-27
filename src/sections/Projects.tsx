
import Image from 'next/image' 
import ProjectCard from "@/Comp/ProjectCard";
import { projects } from '@/app/lib/constants';
import { Dancing_Script, Lobster } from "next/font/google";
const dancingScript = Lobster({ weight: "400", subsets: ["latin"] })

// const portfolioProjects = [
//   {
//     company: "Acme Corp",
//     year: "2022",
//     title: "Dark Saas Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/4k7IdSLxh6w",
//     image: darkSaasLandingPage,
//   },
//   {
//     company: "Innovative Co",
//     year: "2021",
//     title: "Light Saas Landing Page",
//     results: [
//       { title: "Boosted sales by 20%" },
//       { title: "Expanded customer reach by 35%" },
//       { title: "Increased brand awareness by 15%" },
//     ],
//     link: "https://youtu.be/7hi5zwO75yc",
//     image: lightSaasLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
// ];

export const ProjectsSection = () => {
 return(
  <div className="w-full h-full flex flex-col pt-10 sm:pt-20 md:pt-30 lg:pt-20">
<div className="w-max h-max">
<span className={`self-start text-5xl md:font-bold md:text-7xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-300 text-transparent bg-clip-text ${dancingScript.className} w-max self-start`}>Projects </span>
</div>
    <div className="relative w-full h-full flex flex-wrap gap-10 items-center justify-center p-10">
      <Image
      height={300}
      width={300}
      src={"/joy-of-react-mascot.png"}
      alt="joy of react mascot"
      className="absolute  animate-space-effect2 top-10 -left-32   md:top-28 md:left-5"
      ></Image>
      <Image
      height={200}
      width={200}
      src={"/joy-of-react-mascot.png"}
      alt="joy of react mascot"
      className="absolute animate-space-effect1  top-64 -right-20 md:top-60 md:right-3 "
      >

      </Image>
      <Image
      height={100}
      width={100}
      src={"/joy-of-react-mascot.png"}
      alt="joy of react mascot"
      className="absolute animate-space-effect3 bottom-0 -left-3 md:bottom-2 md:left-2"
      ></Image>
{
  projects.map((project, key)=>{
    return (
      <ProjectCard project={project} key={key}/>
    )
  })
}
      
    </div>
  </div>
 )
};
