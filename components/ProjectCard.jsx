import Image from "next/image";
import Link from "next/link";

import istehit from "@/public/work/istehit.png"
import socialutopia from "@/public/work/social-utopia.png"
import krishiSaarthi from "@/public/work/krishi-saarthi.png"
import summarEdge from "@/public/work/summar-edge.png"
import todolist from "@/public/work/todo-list.png"
const ProjectCard = () => {
  const data = [
    {
      id: 1,
      title: "ISTE Community",
      description: "Developed a robust community website handling upto 200+ users",
      image: istehit,
      tech: ['Next.js', 'Tailwind CSS', 'Prisma','SQL'],
      link: 'https://hitiste.vercel.app',
      target: "_blank"
    },
    {
      id: 2,
      title: "Social Utopia",
      description: "Created dynamic site with React and Firebase, enabling seamless user interaction across devices.",
      image: socialutopia,
      tech: ['React', 'Tailwind CSS', 'Firebase'],
      link: 'https://github.com/urz-ahmed/social-utopia',
      target: "_blank"
    },
    {
      id: 3,
      title: 'SummarEdge',
      description: "Created a webpage summarizer with intuitive user interface (UI) for heightened user engagement.",
      image: summarEdge,
      tech: ['ReactJS', 'Tailwind CSS', 'ReduxToolkit', 'ChatGPT4 Api'],
      link: "https://github.com/urz-ahmed/SummarEdge",
      target: "_blank"
    },
    {
      id: 4,
      title: 'Krishi Saarthi',
      description: "Developed a user friendly farmer's app to verify their seeds",
      image: krishiSaarthi,
      tech: ['React Native', 'Tailwind', 'Typescript', 'ExpressJS', 'MongoDB'],
      link: 'https://github.com/urz-ahmed/AppUI-Full-APP',
      target: "_blank"
    },
    {
      id: 5,
      title: "To Do List",
      description: "Some description",
      image: todolist,
      tech: ['HTML', 'Bootstrap', 'Javascript'],
      link: 'https://github.com/urz-ahmed/keep-record',
      target: "_blank"
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((project) => {
        return (
          <div key={project.id} className="m-1 p-1 border border-gray-400 rounded-lg shadow-md">
            <Link
              target={project.target}
              href={project.link}
              className="bg-slate-300 dark:bg-slate-900 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover"
              />
              <div className="w-full p-5 text-gray-600 dark:text-gray-300">
                <h3 className="hover:cursor-pointer hover:underline-offset-2 text-lg md:text-xl m-1 md:mb-3 font-semibold">
                  {project.title}
                </h3>
                <p className="max-w-[90%] mb-2 text-gray-400 font-light text-center text-sm">
                  {project.description}
                </p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                  {project.tech.map(item => (
                    <span
                      key={item}
                      className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
