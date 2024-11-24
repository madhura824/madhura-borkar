import { Dancing_Script, Lobster } from 'next/font/google';
import { LinedBorder, OrangeCircle, YellowStar1, YellowStar2, YellowStar3 } from '@/assets/icons';
const dancingScript = Lobster({ weight: "400", subsets: ["latin"] })
import Image from 'next/image';
import { about_me_description } from '@/app/lib/constants'
import localFont from 'next/font/local';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
// Font files can be colocated inside of `app`
const wotfardRegular = localFont({
  src: '../../public/wotfard_regular_webfont.woff2',
  display: 'swap',
})
const scaryHalloween = localFont({
  src: '../../public/Scary_Halloween_Font.ttf',
  display: 'swap',
})
export const AboutSection = () => {

  // const wotfardRegular = localFont({ src: './my-font.woff2' })
  return (
    <div className='about-section min-h-max w-full flex flex-col items-center justify-center pt-20 sm:pt-30 md:pt-40 lg:pt-40'>
      <h1 className='self-start p-5 md:p-10'>
        <span className={`text-5xl self-start md:self-center md:text-7xl font-bold  bg-gradient-to-r from-blue-500 via-purple-600 to-pink-300 text-transparent bg-clip-text ${dancingScript.className}`}>About </span>
        <span className={`text-5xl self-start md:self-center md:text-7xl font-bold bg-gradient-to-r from-orange-300 via-yellow-200 to-red-400 text-transparent bg-clip-text ${dancingScript.className}`}>Me</span>
      </h1>

      <div className='flex flex-col items-center justify-center gap-5 w-full h-full'>
        <div className='1 flex flex-1 w-full items-center justify-center'>
          <div className=' 2 relative flex items-center justify-center sm:gap-5 md:gap-10 w-full h-full'>
            <div className='3 animate-line-border-rotate min-h-[300px] min-w-[300px]  sm:min-h-[400px] sm:min-w-[400px] md:min-h-[500px] md:min-w-[500px]'>
              <LinedBorder>

              </LinedBorder>
            </div>
            <Image
              src={"/madhura.jpeg"}
              width={300}
              height={300}
              alt="Its's me"
              className='rounded-full overflow-clip h-[200px] w-[200px]  sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] absolute'>

            </Image>
            {/* <div className='rounded-full overflow-clip h-[200px] w-[200px]  sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] absolute bg-gray-600'></div> */}
          </div>


        </div>
        <div className='flex flex-1 h-full w-full'>
          <span className={`${wotfardRegular.className}  text-gray-400 text-justify text-l sm:text-xl md:text-2xl p-5 md:p-10 w-full`}>{

            <>
              {" Hi, it's"} <span className='bg-gradient-to-r from-yellow-200 via-orange-300 to-red-500 text-transparent bg-clip-text'> {"Madhura Borkar"}</span>
              {". I am a final-year"}  <span className='inline-block items-center justify-center relative w-fit '><div className="relative flex flex-col w-max h-full justify-center items-center">
                <span className="relative z-10">{"Computer Engineering"}</span>
                <span className="absolute inset-0 top-full w-full flex items-center justify-start h-fit">
                  <Image
                    width={300} // Set a proper width
                    height={10} // Set a proper height
                    alt="underline"
                    src="/double-underline.png"
                    className="object-contain w-[60%] h-min"
                  />
                </span>
              </div></span>{" student, currently pursuing a Bachelor of Technology in Computer Science and Engineering. Passionate about technology and problem-solving, I am dedicated to building innovative and efficient solutions across various domains. Currently, I am interning with Bugsmirror Research Private Limited, where I am honing my skills in web development using modern technologies like "}<span className=' relative justify-center items-center max-w-fit !inline-block'><div className='max-w-max h-full'>{"Next.js, TypeScript, and React"}</div> <Image src={'/long-underline.png'} alt='something' className='w-full h-max absolute bottom-0' width={0} height={0} ></Image></span>{". This hands-on experience has allowed me to deepen my understanding of frontend development and sharpen my skills in creating responsive, user-centric applications. In addition to web development, I have a strong interest in competitive programming. I regularly solve challenges on platforms such as "}
              <div className='relative inline w-fit !max-w-full text-wrap p-0 m-0'>
                <Button
                  href={"https://www.geeksforgeeks.org/user/madhurab12/"}
                  target='_blank'
                  className={`inline font-semibold m-0 h-fit w-fit text-l sm:text-xl md:text-2xl  text-transparent bg-gradient-to-t from-yellow-300 via-orange-500 to bg-red-600 bg-clip-text text-opacity-70 ${scaryHalloween.className} !px-0`}

                  as={Link}
                >
                  {"GeeksforGeeks "}</Button><span>{","}</span>
                <Button
                  href={"https://leetcode.com/u/madura2228/"}
                  target='_blank'
                  className={`inline font-semibold   m-0 h-fit w-fit  text-l sm:text-xl md:text-2xl text-transparent bg-gradient-to-t from-yellow-300 via-orange-500 to bg-red-600 bg-clip-text text-opacity-70 ${scaryHalloween.className} px-0`}
                  as={Link}
                >
                  {"LeetCode"}
                </Button>
                <span> {"and "}</span>


                <Button
                  href={"https://www.codechef.com/users/mitw_np_908"}
                  target='_blank'
                  className={`inline font-semibold m-0 h-fit w-fit  text-l sm:text-xl md:text-2xl text-transparent bg-gradient-to-t from-yellow-300 via-orange-500 to bg-red-600 bg-clip-text text-opacity-70 ${scaryHalloween.className} px-0 `}
                  as={Link}

                >{"CodeChef"}</Button> 
                </div><span>{", primarily using "}</span><span className='relative !inline-block items-center justify-center max-h-min max-w-min'><span className='p-4'>{"C++"}</span><div className='absolute w-full h-full  flex items-center justify-center top-0'><OrangeCircle /></div></span>{". This practice has strengthened my problem-solving abilities, helping me think critically and approach complex issues methodically. With a solid foundation in computer science principles and a commitment to continuous learning, I am enthusiastic about leveraging my skills to contribute to impactful projects and advance in the tech industry. "}<div className='inline-block w-[30px] h-[30px] relative' > <div className='w-[20px] h-[30px] absolute top-0 right-0'> <YellowStar1 /></div> <div className='w-[20px] h-[30px] absolute top-0 right-0'> <YellowStar2 /></div><div className='w-[10px] h-[15px] absolute bottom-0 left-0 '> <YellowStar3 /></div></div>

            </>
          }
          </span>
        </div>
      </div>
    </div>
  )
};


