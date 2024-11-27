import { education, workExperience } from "@/app/lib/constants";
import Image from "next/image";
import { Dancing_Script, Lobster } from "next/font/google";
const dancingScript = Lobster({ weight: "400", subsets: ["latin"] })

const PersonalDetails = () => {

    return (
        <div className="min-h-screen w-[100%] flex flex-col items-center justify-center pt-10 sm:pt-20 md:pt-30 lg:pt-20">
            <div className="w-full h-max flex flex-col justify-center items-center gap-5">
                <div className="flex flex-row w-full h-max">
                    <div className="flex flex-1 flex-col bg-transparent w-full h-max items-center justify-center">
                        <span className={`self-start text-5xl md:font-bold md:text-7xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-300 text-transparent bg-clip-text ${dancingScript.className} w-fit self-start`}>Education </span>



                        <div className="flex flex-row items-center justify-center md:justify-around md:self-start w-full">
                            <div className="list-container flex flex-col  justify-center p-10 ">
                                <ul>
                                    {
                                        education.map((value, key) => {
                                            return (
                                                <li key={key}>
                                                    <div className="flex flex-col md:flex-row items-center justify-start gap-5 pb-5">
                                                        <div className="w-[100px] h-[100px] border border-transparent rounded-full overflow-clip flex-shrink-0 ">
                                                            <Image src={value.image} alt={"logo"} width={100} height={100} className="w-[100px] h-[100px]"></Image>
                                                        </div>
                                                        <div className="flex flex-col justify-center items-center md:items-start">
                                                            <span className=" text-center md:text-start text-gray-400 inline-block font-bold">{`${value.degree}`}</span>
                                                            <span className=" text-center md:text-start text-gray-400 inline-block font-semibold">{`${value.major}`}</span>
                                                            <span className=" text-center md:text-start text-gray-400 inline-block font-semibold">{`${value.marks}`}</span>
                                                            <span className=" text-center md:text-start text-gray-400 inline-block font-thin">{`${value.college}`}</span>
                                                            <span className=" text-center md:text-start text-gray-400 inline-block font-thin">{`${value.period.from} - ${value.period.till}`}</span>

                                                        </div>



                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <Image src={"/spaceman.png"} alt={"cute space man"} width={300} height={300} className="hidden md:block w-[300px] md:h-[300px] opacity-15"></Image>
 
                        </div>


                    </div>
                </div>

                <div className="work-experience flex flex-row-reverse w-full h-max" id="work-experience">
                    <div className=" flex flex-1 bg-transparent w-full h-max flex-col">
                        <span className={`self-start text-5xl md:font-bold md:text-7xl bg-gradient-to-r to-blue-500 via-purple-600 from-pink-300 text-transparent bg-clip-text ${dancingScript.className} w-fit self-start md:self-end`}>Work Experience </span>

                        <div className="flex flex-row-reverse items-center justify-center md:justify-around md:self-end w-full">
                            <div className="list-container flex flex-col align-start justify-center p-10">
                                <ul>
                                    {
                                        workExperience.map((value,key) => {
                                            return (
                                                <li key={key}>
                                                    <div className="flex flex-col md:flex-row items-center justify-start gap-5 pb-5">
                                                        <div className="w-[100px] h-[100px] border border-transparent rounded-full overflow-clip flex-shrink-0 ">
                                                            <Image src={value.image} alt={"logo"} width={50} height={50} className="w-[100px] h-[100px] object-contain"></Image>
                                                        </div>
                                                        <div className="flex flex-col justify-center items-center md:items-start">
                                                            <span className="text-center md:text-start text-gray-400 inline-block font-bold">{`${value.companyName}`}</span>
                                                            <span className="text-cenetr md:text-start text-gray-400 inline-block font-semibold">{`${value.duration}`}</span>
                                                            <span className="text-center md:text-start text-gray-400 inline-block font-semibold">{`${value.role}`}</span>
                                                            <span className="text-center md:text-start text-gray-400 inline-block font-thin">{`${value.type}`}</span>
                                                            {/* <span className="text-black inline-block font-thin">{`${value.period.from} - ${value.period.till}`}</span> */}

                                                        </div>



                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                            <Image src={"/rocket.png"} alt={"cute space man"} width={300} height={400} className="hidden md:block w-[300px] md:h-[400px] opacity-15"></Image>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PersonalDetails;