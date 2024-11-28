import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google"
import { twMerge } from "tailwind-merge";
import { FooterCloud } from "@/assets/icons";
const inter = Inter({ subsets: ['latin'], variable: "--font-sans" })
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] })
import * as React from "react";
import Head from 'next/head';

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

import { Header } from "@/sections/Header";
import Logo from "@/Components/Logo";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

const url = process.env.BASE_URL ?? "";

export const metadata: Metadata = {
  title: "Madhura Borkar",
  description: "Madhura Borkar: Portfolio of a Software Developer",
  icons:"/favicon.png",
  authors:["Madhura Borkar" as Author],
  keywords:["Madhura Borkar","Software Developer Portfolio","SDE", "Software Engineer","Portfolio"],
metadataBase : new URL(url)

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

<>
{/* <Head>
			<link rel='icon' href='/madhura.jpeg' />
		</Head> */}
    
    <html lang="en" >
      <body className={twMerge("bg-gray-900 text-white antialiased font-sans m-0 p-0 w-full h-full", inter.variable, calistoga.variable)}>
      <NextUIProvider>
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-40 w-[100%] h-fit flex items-center justify-center"> 
          <Header />
          {/* <span>It’s been a couple of years since container queries started landing in browsers… so why isn’t anyone using them? It turns out that container queries are kinda tricky; they’re not as straightforward as media queries. In this tutorial, we’ll break it all down and make sense of them, so that you can start using them in your work.</span> */}
          </div>
        <div className="hidden md:block bg-black/85 blur-3xl w-[100%] h-[20vh] fixed left-0 z-30"></div>
        <div className="fixed left-0 z-30 bg-gradient-to-b from-black  via-black/50 to-transparent w-[100%] h-[30vh]  md:hidden"></div>
          <div className="hidden md:fixed md:block h-[50%] md:-top-24 lg:h-[50%] -top-12 left-0 z-30 ">
            <FooterCloud fill={"#708090"} width={"100%"} height={"100%"} />
          </div>
          
          <div className="hidden md:block fixed top-0 left-0 z-30 p-5">
          <Logo />
          </div>
       
         

          {children}
       
          </NextUIProvider>
      </body>
    </html>
   
    </>

  );
}
