"use client"

import { Lora } from 'next/font/google';
const lora = Lora({ weight: "400", subsets: ["latin"] })


import { Footer } from "./Footer";
import { RefObject } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import {resumeURL} from "../app/lib/constants"
import AnimatedButton from '@/Components/AnimatedButton';

export const EndSection = ({ referenceToTheFooter }: { referenceToTheFooter: RefObject<HTMLDivElement> }) => {

  // const downloadResume = () => {
  //   const link = document.createElement('a'); // Create an anchor element
  //   link.href = '/MADHURA_BORKAR_RESUME_Cathago_Bausoftware.pdf'; // Set the file path
  //   link.download = 'MADHURA-BORKAR-RESUME-SOFTWARE-DEVELOPMENT-PROFILE'; // Set the file name for download
  //   document.body.appendChild(link); // Append the link to the document
  //   link.click(); // Trigger the download
  //   document.body.removeChild(link); // Clean up by removing the link element
  // };
  const viewResume = ()=>{

    openInNewTab(resumeURL);

  }
  const openInNewTab = (url : string ) =>{
    if (!url) {
      console.error("No URL provided");
      return;
    }
  
    try {
      new URL(url); 
    } catch {
      console.error("Invalid URL");
      return;
    }
  
  
    const newTab = window.open(url, "_blank");
  
    if (newTab) {
      newTab.focus();
    } else {
      console.warn("Popup blocked by the browser");
    }
  }

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
            {/* <Button className={"self-center m-2 bg-transparent border-spacing-50 border-small border-gray-500 text-gray-300 hover:scale-110"} onClick={viewResume}>View Resume</Button> */}
            <div className='self-center m-3' >
          <AnimatedButton text = "View Resume" onClick={viewResume}></AnimatedButton>
          </div>
          </div>

        </div>

        <div className="footer-wrapper absolute bottom-0 -left-16 w-[100px] h-[150px] md:left-0 lg:left-0 lg:w-[100px] lg:h-[150px]">
          <Footer referenceToTheFooter={referenceToTheFooter}></Footer>
        </div>

      </div>
    </>
  );
};
// "use client"

// import { Lora } from 'next/font/google';
// const lora = Lora({ weight: "400", subsets: ["latin"] })


// import { Footer } from "./Footer";
// import { RefObject } from "react";
// import Image from "next/image";
// import { Button } from "@nextui-org/react";


// export const EndSection = ({ referenceToTheFooter }: { referenceToTheFooter: RefObject<HTMLDivElement> }) => {

//   const downloadResume = () => {
//     const link = document.createElement('a'); // Create an anchor element
//     link.href = '/MADHURA_BORKAR_RESUME_Cathago_Bausoftware.pdf'; // Set the file path
//     link.download = 'MADHURA-BORKAR-RESUME-SOFTWARE-DEVELOPMENT-PROFILE'; // Set the file name for download
//     document.body.appendChild(link); // Append the link to the document
//     link.click(); // Trigger the download
//     document.body.removeChild(link); // Clean up by removing the link element
//   };

//   return (

//     <>

//       <div className="w-full min-h-screen bg-transparent flex flex-col items-center md:items-end justify-center relative pt-10 sm:pt-20 md:pt-30 lg:pt-40">

//         <div className="flex flex-col items-center justify-center  w-full h-full md:w-[50%] my-5 mb-40 md:mb-5">

//           <div className="text-wrapper my-20 md:my-10 w-full h-full flex flex-col items-start justify-center ">
//             <p className={`p-5 ${lora.className} indent-0 text-justify`}>
//               <span className="inline-block py-2">{" You've Reached the End! 🎉"}</span><br />
//               {"Thank you so much for taking the time to explore my website! It truly means a lot to me. 😊"}

//             </p>
//             <p className={`p-5 ${lora.className} indent-0 text-justify`}>
//               {"I’d love to hear your thoughts—feel free to share any feedback you have. If you think my skills align with a career opportunity or project you have in mind, don’t hesitate to reach out! Let’s stay connected! You can find me on social media, and I’d be thrilled to connect and engage with you there."}

//             </p>
//             <p className={`p-5 ${lora.className} indent-0 text-justify`}>{"Once again, thank you for visiting—it’s been a joy having you here! 🌟"}
//             </p>
//             <Button className={"self-center m-2 bg-transparent border-spacing-50 border-small border-gray-500 text-gray-300 hover:scale-110"} onClick={downloadResume}>Download Resume</Button>
//           </div>

//         </div>

//         <div className="footer-wrapper absolute bottom-0 -left-16 w-[100px] h-[150px] md:left-0 lg:left-0 lg:w-[100px] lg:h-[150px]">
//           <Footer referenceToTheFooter={referenceToTheFooter}></Footer>
//         </div>

//       </div>
//     </>
//   );
// };

// // "use client"

// // import { Lora } from 'next/font/google';
// // const lora = Lora({ weight: "400", subsets: ["latin"] })


// // import { Footer } from "./Footer";
// // import { RefObject } from "react";
// // import Image from "next/image";
// // import { Button } from "@nextui-org/react";


// // export const EndSection = ({ referenceToTheFooter }: { referenceToTheFooter: RefObject<HTMLDivElement> }) => {

// //   const downloadResume = () => {
// //     const link = document.createElement('a'); // Create an anchor element
// //     link.href = '/MADHURA_BORKAR_RESUME_Cathago_Bausoftware.pdf'; // Set the file path
// //     link.download = 'MADHURA-BORKAR-RESUME-SOFTWARE-DEVELOPMENT-PROFILE'; // Set the file name for download
// //     document.body.appendChild(link); // Append the link to the document
// //     link.click(); // Trigger the download
// //     document.body.removeChild(link); // Clean up by removing the link element
// //   };

// //   return (

// //     <>

// //       <div className="w-full min-h-screen bg-transparent flex flex-col items-center md:items-end justify-center relative pt-10 sm:pt-20 md:pt-30 lg:pt-40">

// //         <div className="flex flex-col items-center justify-center  w-full h-full md:w-[50%] my-5 mb-40 md:mb-5">

// //           <div className="text-wrapper my-20 md:my-10 w-full h-full flex flex-col items-start justify-center ">
// //             <p className={`p-5 ${lora.className} indent-0 text-justify`}>
// //               <span className="inline-block py-2">{" You've Reached the End! 🎉"}</span><br />
// //               {"Thank you so much for taking the time to explore my website! It truly means a lot to me. 😊"}

// //             </p>
// //             <p className={`p-5 ${lora.className} indent-0 text-justify`}>
// //               {"I’d love to hear your thoughts—feel free to share any feedback you have. If you think my skills align with a career opportunity or project you have in mind, don’t hesitate to reach out! Let’s stay connected! You can find me on social media, and I’d be thrilled to connect and engage with you there."}

// //             </p>
// //             <p className={`p-5 ${lora.className} indent-0 text-justify`}>{"Once again, thank you for visiting—it’s been a joy having you here! 🌟"}
// //             </p>
// //             <Button className={"self-center m-2 bg-transparent border-spacing-50 border-small border-gray-500 text-gray-300 hover:scale-110"} onClick={downloadResume}>Download Resume</Button>
// //           </div>

// //         </div>

// //         <div className="footer-wrapper absolute bottom-0 -left-16 w-[100px] h-[150px] md:left-0 lg:left-0 lg:w-[100px] lg:h-[150px]">
// //           <Footer referenceToTheFooter={referenceToTheFooter}></Footer>
// //         </div>

// //       </div>
// //     </>
// //   );
// // };