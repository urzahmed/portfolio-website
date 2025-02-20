import ProjectCard from "./project-card";

export default function Work() {

  return (
    <div className="">
        <div>
          <p className="text-sm md:text-base lg:text-xl mb-2 px-2">
            It has been an absolute pleasure to put my heart and soul into these
            projects. While you&apos;re here, browse these projects.
          </p>
        </div>
        <div className="mt-20 mb-20">
          <ProjectCard />
        </div>
    </div>
  );
}
