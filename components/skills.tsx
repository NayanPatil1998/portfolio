import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGooglecloud,
  SiGraphql, SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPwa,
  SiRedux,
  SiTailwindcss
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="skills" className="flex min-h-screen flex-col p-10 lg:p-0 bg-primary justify-center space-y-20 items-center">
      <h1 className="text-center text-white text-5xl md:text-left font-bold">
        SKILLS
      </h1>
      <div className="flex flex-col lg:flex-row justify-center space-y-20 lg:space-y-0 lg:space-x-20">
        <div
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos="fade-up"
          className="flex flex-col justify-center items-center max-w-md"
        >
          <h1 className="text-center mb-8 text-white text-3xl md:text-left font-bold ">
            Frontend
          </h1>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Skill
              icon={<SiJavascript size={30} color="white" />}
              text="Javascript"
            />
            <Skill icon={<FaReact size={30} color="white" />} text="Reactjs" />
            <Skill
              icon={<SiFlutter size={30} color="white" />}
              text="Flutter"
            />
            <Skill
              icon={<TbBrandNextjs size={30} color="white" />}
              text="Nextjs"
            />
            <Skill
              icon={<SiTailwindcss size={30} color="white" />}
              text="TailwindCSS"
            />

            <Skill
              icon={<SiChakraui size={30} color="white" />}
              text="Chakra UI"
            />
            <Skill icon={<SiRedux size={30} color="white" />} text="Redux" />
          </div>
        </div>
        <div
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos="fade-up"
          className="flex flex-col justify-center items-center max-w-md"
        >
          <h1 className="text-center mb-8 text-white text-3xl md:text-left font-bold ">
            Backend
          </h1>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Skill
              icon={<SiNodedotjs size={30} color="white" />}
              text="Nodejs"
            />
            <Skill
              icon={<SiExpress size={30} color="white" />}
              text="Express"
            />
            <Skill
              icon={
                <Image
                  src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_White.svg"
                  width={35}
                  height={35}
                />
              }
              text="Golang"
            />
            <Skill
              icon={<SiGraphql size={30} color="white" />}
              text="Graphql"
            />
            <Skill
              icon={<SiGooglecloud size={30} color="white" />}
              text="Google Cloud"
            />
            <Skill
              icon={<SiPostgresql size={30} color="white" />}
              text="PostgreSQL"
            />
          </div>
        </div>
        <div
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos="fade-up"
          className="flex flex-col justify-center items-center max-w-md"
        >
          <h1 className="text-center mb-8 text-white text-3xl md:text-left font-bold ">
            Tools
          </h1>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Skill icon={<FaGitAlt size={30} color="white" />} text="Git" />
            <Skill
              icon={<SiFirebase size={30} color="white" />}
              text="Firebase"
            />
            <Skill icon={<SiDocker size={30} color="white" />} text="Docker" />

            <Skill icon={<SiPwa size={30} color="white" />} text="PWA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

interface SkillProps {
  icon: any;
  text: string;
}

const Skill: React.FC<SkillProps> = ({ icon, text }) => {
  return (
    <div className="p-3 flex flex-col items-center space-y-2">
      {icon}

      <p className="text-white text-lg">{text}</p>
    </div>
  );
};
