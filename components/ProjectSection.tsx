import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Catatanku",
    description: "Catatanku is an online taking notes web application. Some features for this web app is CRUD, Google Authentication, Login/Register, and Search",
    image: "/Catatanku Mockup.png",
    link: "https://www.figma.com/file/PzGkh4OF5nZkiNJ8UwP1t4/Catatan?type=design&node-id=0%3A1&mode=design&t=ZxUH2UeKQOyqhDG4-1",
  },
  {
    name: "U Academy",
    description: "U Academy is an online course service provider application (online learning platform). U Academy has lots of courses, ranging from web development, mobile development, and UI/UX design to photography.",
    image: "/U Academy Mockup.png",
    link: "https://www.figma.com/file/joL8jxQaFEhSdGsjDBz0UO/U-Academy-App?type=design&mode=design&t=ZxUH2UeKQOyqhDG4-1",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
