"use client"
import Image from "next/image";
// import Contact from "@/components/contact";
import { BsArrowUpRight } from "react-icons/bs";
import Hero from "@/components/hero-section";
import profileImg from '../assets/profile.png'

import Link from "next/link";
import { MdContactPage } from "react-icons/md";
import Skills from "@/components/skills";
import Work from "@/components/work-section";
export default function Home() {

  return (
    <>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
            <Image
              src={profileImg}
              alt="uroojahmad"
              width="80"
              height="80"
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold mr-1">Urooj Ahmad</span>
                {/* <span>
                  {currentTheme === "dark" ? <GiFloatingGhost className="text-blue-300 shadow-2xl" /> : <GiFloatingGhost />}
                </span> */}
              </h2>
              <h3>
                <Link
                  href={"https://www.linkedin.com/in/urooj-ahmad/"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@linkedin</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="sm:leading-6 md:leading-6 lg:leading-8">
              I am a Full Stack Web Developer with hands on designing, developing and implementing applications and solutions using a range of technologies and programming languages.
            </p>
          </div>
          <div className="flex space-x-2 justify-end">
            <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
              <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
                <Link
                  href="#projects"
                  className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
                >
                  <BsArrowUpRight className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                  <p>Projects</p>
                </Link>
              </div>
            </div>
            <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
              <div className=" group border-green-400 hover:bg-green-400 text-green-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-green-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-green-300">
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/11R2r9I9CmkqTGp8LaXavnWFGqnqkTale/view?usp=sharing"
                  className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
                >
                  <MdContactPage />
                  <p>Resume</p>
                </Link>
              </div>
            </div>
          </div>
          <Hero />
        </div>
        <section className="mt-28">
          <h1
            className={`mt-6 mb-12 bg-gradient-to-br to-blue-700 via-cyan-500/90 from-yellow-600  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl font-semibold`}
          >
            technologies I use
          </h1>
          <Skills/>
        </section>
        <section id="projects">
        <h1
            className={`mt-6 mb-12 bg-gradient-to-br to-blue-700 via-cyan-500/90 from-yellow-600  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl font-semibold`}
          >
            projects
          </h1>
          <Work/>
        </section>
        {/* <section id="blogs">
        <h1
            className={`mt-6 mb-12 bg-gradient-to-br to-blue-700 via-cyan-500/90 from-yellow-600  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl font-semibold`}
          >
            blogs
          </h1>
          import blogs
        </section> */}
        {/* <div className="mt-28 mx-auto ">
          <Contact />
        </div> */}
      </div>
    </>
  );
}

