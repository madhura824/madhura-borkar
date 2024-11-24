"use client"
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { Lora } from 'next/font/google';
const lora = Lora({ weight: "400", subsets: ["latin"] })


import { Footer } from "./Footer";
import { RefObject } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const EndSection = ({ referenceToTheFooter }: { referenceToTheFooter: RefObject<HTMLDivElement> }) => {

  const downloadResume = () => {
    const link = document.createElement('a'); // Create an anchor element
    link.href = '/MADHURA_BORKAR_RESUME_SEPTEMBER_2024.pdf'; // Set the file path
    link.download = 'Madhura-Borkar-Resume.pdf'; // Set the file name for download
    document.body.appendChild(link); // Append the link to the document
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up by removing the link element
  };

  return (

    <>

      <div className="w-full min-h-screen bg-transparent flex flex-col items-center md:items-end justify-center relative pt-10 sm:pt-20 md:pt-30 lg:pt-40">

        <div className="flex flex-col items-center justify-center  w-full h-full md:w-[50%] my-5 mb-40 md:mb-5">

          <div className="text-wrapper my-20 md:my-10 w-full h-full flex flex-col items-start justify-center ">
            <p className={`p-5 ${lora.className} indent-0 text-justify`}>
              <span className="inline-block py-2">{" You've Reached the End! 🎉"}</span><br />
              {"Thank you so much for taking the time to explore my website! It truly means a lot to me. 😊"}

            </p>
            <p className={`p-5 ${lora.className} indent-0 text-justify`}>
              {"I’d love to hear your thoughts—feel free to share any feedback you have. If you think my skills align with a career opportunity or project you have in mind, don’t hesitate to reach out! Let’s stay connected! You can find me on social media, and I’d be thrilled to connect and engage with you there."}

            </p>
            <p className={`p-5 ${lora.className} indent-0 text-justify`}>{"Once again, thank you for visiting—it’s been a joy having you here! 🌟"}
            </p>
            <Button className={"self-center m-2 bg-transparent border-spacing-50 border-small border-gray-500 text-gray-300 hover:scale-110"} onClick={downloadResume}>Download Resume</Button>
          </div>

        </div>

        <div className="footer-wrapper absolute bottom-0 -left-16 w-[100px] h-[150px] md:left-0 lg:left-0 lg:w-[100px] lg:h-[150px]">
          <Footer referenceToTheFooter={referenceToTheFooter}></Footer>
        </div>

      </div>
    </>
  );
};
