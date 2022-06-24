import React, { useEffect } from "react";
import { UserData } from "../helpers/data";
import AOS from "aos"
interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex min-h-screen flex-col p-10 lg:p-0 bg-primary justify-center space-y-5 items-center">
      <h1 className="text-center text-white text-5xl md:text-left font-bold mt-10 mb-5">
        Experience
      </h1>

      <ol className="border-l-4 border-gray-300 text-white">
        {UserData.experience.map((exp) => {
          return (
            <li key={exp.id} className="mb-6"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos="fade-up"
            >
              <div className="flex flex-start items-center pt-3">
                <div className="bg-gray-300 w-8 h-8 rounded-full -ml-4 mr-4"></div>
                <p className="text-sm">{exp.timeLine}</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className=" font-semibold text-2xl mb-1.5">
                  {exp.desg}
                  <span className=" font-medium text-lg"> · {exp.company}</span>
                </h4>
                <div className="mb-3 max-w-lg ml-5">
                  <ul className="list-disc">
                    {exp.desc.map((desc) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Experience;
