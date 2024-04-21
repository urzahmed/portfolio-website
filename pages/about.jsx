import { useEffect } from "react";

import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import CategoryCard from "@/components/CategoryCard";

import Flash from "@/public/Flash.svg";
import Rocket from "@/public/Rocket.svg";
import Sparkles from "@/public/Sparkles.svg";

import urzprofile from "@/public/urzprofile.png"

export default function About() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>About ⏔ Urooj</title>
        <link rel="icon" href="/profile.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 mb-12 bg-gradient-to-br to-blue-700 via-cyan-500/90 from-yellow-600  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold`}
            >
              About
            </h1>
            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8">
              <Image
                src={urzprofile}
                height={800}
                width={800}
                className="select-none h-40 w-40 rounded-full"
                alt="urooj ahmad"
                priority
              />
            </div>
            <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
              Open Source Contributor | CSE Undergrad@HIT
            </p>
          </div>
          <CategoryCard />
          <div className=" text-[0.92rem] text-base mx-12 font-light dark:text-white text-gray-900">
            <p className="mt-6 mb-12 font-normal">
              Full Stack Developer who develops modern, reactive, and
              user-friendly web applications using the latest technologies.🚀
              Believe a perfect blend of UI architecture is one, where the goals
              and needs are accounted for in an elegant, efficient, and robust
              design of the user interface{" "}
              ✨
              Experience in React.js, Next.js, and state management like
              Redux.js with proficiency in web technologies like JavaScript,
              Typescript, Tailwind CSS. building large-scale web
              applications, cross-browser platforms, and design constraints on
              the web, and building responsive user interfaces.{" "}
              🔦
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">
              Contact me here
            </p>

            <p className="">
              While I may not be a widely recognized figure, i am readily
              available for connection on my social media platforms. <br />
              You can shoot me an email here on {" "}
              <a
                onClick={() =>
                  navigator.clipboard.writeText("urooz2002@gmail.com")
                }
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                href="mailto:urooz2002@gmail.com"
              >
                {" "}
                urooz2002@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
