"use client"
import ParticlesWrapper from "@/Components/ParticlesWrapper";
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";
import { AboutSection } from "@/sections/About";
import { EndSection } from "@/sections/Resume";
import  PersonalDetails from "@/sections/PersonalDetails";

import { useEffect, useRef } from "react";

export default function Home() {
  const referenceToTheFooter = useRef<HTMLDivElement>(null);
  let intersectionCounter = 0;
  useEffect(() => {

    // console.log("here")
    const footerNode = referenceToTheFooter.current;
    const observer = new IntersectionObserver(
      (entries) => {


        entries.forEach((entry) => {

          // console.log(entry)
          const board = referenceToTheFooter.current?.querySelector('.board');  
          board?.classList.add("hidden")
          board?.classList.remove("animate-pop-out")

          if (entry.isIntersecting && referenceToTheFooter.current) {

            // console.log("footer is visible")
                       
            board?.classList.remove("hidden")
            board?.classList.add("animate-pop-out")
          }
        });
      },
      { threshold: 0.5 }
    );

    if (footerNode) {
      observer.observe(footerNode);
    }

    return () => {
      if (footerNode) {
        observer.disconnect();
      }
    };


    // const intersectionCallback = (entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       let elem = entry.target;

    //       if (entry.intersectionRatio >= 0.75) {
    //         console.log(intersectionCounter++);
    //       }
    //     }
    //   });



    // };


    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       let elem = entry.target;
// console.log(elem)
          // if (entry.intersectionRatio >= 0.75) {
          //  console.log(intersectionCounter++) 
          // }
    //     }
    //   });
    // })


  },[])

    return (

      <main className="w-full max-h-max flex flex-col items-center overflow-clip px-5 sm:px-10 md:px-30 lg:px-40">

        <div className="relative w-full h-full">

          <ParticlesWrapper>

          <section id={"about-me"} className="w-full min-h-screen flex flex-col items-center justify-center">
              <AboutSection />
            </section>
            <section id={"education-and-work-experience"} className="w-full min-h-screen flex flex-col items-center justify-center pt-20">
              <PersonalDetails />
            </section>
            <section id={"projects" } className="w-full min-h-screen flex flex-col items-center justify-center pt-20">
              <ProjectsSection />
              {/* <h1>This is a section</h1> */}
            </section>
            <section id={"contact-me"} className="w-full min-h-screen flex flex-col items-center justify-center pt-20">
              <ContactSection />
              {/* <h1>This is a section</h1> */}
            </section>
            
            
            <section id="resume" className="w-full min-h-screen flex flex-col items-center justify-center relative">
              <EndSection referenceToTheFooter={referenceToTheFooter} />
            </section>




          </ParticlesWrapper>
        </div>
      </main >



    );
  }
