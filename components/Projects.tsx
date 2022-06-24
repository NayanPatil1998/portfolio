import AOS from "aos";
import React, { useEffect } from "react";
import { UserData } from "../helpers/data";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      id="projects"
      className="flex flex-col text-textcolor min-h-screen justify-center space-y-20 items-center py-10 mb-10"
    >
      <h1 className="text-center  text-5xl md:text-left font-bold mt-10">
        Projects
      </h1>
      {UserData.projects.map((project) => {
        return (
          <div
            key={project.id}
            className="flex lg:flex-row justify-center text-center items-center w-full flex-col-reverse space-x-0 lg:space-x-12 "
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos="fade-up"
          >
            <div className="w-full lg:max-w-md flex flex-col space-y-3 px-5">
              <h1 className="text-2xl md:text-left font-bold">
                {project.name}
              </h1>
              <div className="flex flex-wrap ">
                {project.stack.map((skill) => {
                  return (
                    <div
                      key={skill}
                      className="p-2 border m-1 bg-primary text-white"
                    >
                      <h1 className="text-md  font-bold text-center">
                        {skill}
                      </h1>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-lg md:text-left">{project.desc}</h1>
              <div className="flex space-x-5">
                <a
                  target="_blank"
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  className="py-2 px-6 border-2 border-solid border-primary cursor-pointer text-primary hover:bg-primary hover:text-white"
                >
                  <p className="text-md font-extrabold">Source Code</p>
                </a>
                <a
                  target="_blank"
                  href={project.demoUrl}
                  rel="noopener noreferrer"
                  className="py-2 px-6 border-2 border-solid border-primary cursor-pointer text-primary hover:bg-primary hover:text-white"
                >
                  <p className="text-md font-extrabold">Live Demo</p>
                </a>
              </div>
            </div>
            <div className="w-full px-12 lg:w-[50%] h-[350px] mb-4 lg:mb-0">
              <iframe
                className="w-full h-full"
                src={project.videoURL.url}
                title={project.videoURL.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        );
      })}

      <a target="_blank" href="https://github.com/NayanPatil1998" rel="noopener noreferrer" className="p-3 bg-primary text-white font-bold text-lg ">
        More
      </a>
    </div>
  );
};

export default Projects;
