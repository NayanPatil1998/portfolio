import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { UserData } from "../helpers/data";
import SocialIcons from "./SocialIcon";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <div className="flex w-full space-x-16 p-5 items-center justify-center lg:justify-end">
        <SocialIcons
          icon={<FaLinkedinIn size={32} />}
          link={UserData.social.linkedin}
        />
        <SocialIcons
          icon={<FaGithub size={32} />}
          link={UserData.social.github}
        />
        <SocialIcons
          icon={<FaTwitter size={32} />}
          link={UserData.social.twitter}
        />
        <SocialIcons
          icon={<IoIosDocument size={32} />}
          link={UserData.social.resume}
        />
      </div>
      <div className="flex-1 text-textcolor flex flex-col space-y-16 lg:mx-44 mx-4 justify-center items-center lg:items-start">
        <div className="text-4xl md:text-5xl ">
          {" "}
          <h1 className="text-center lg:text-left font-bold">
            Hi, I'm <span className="text-primary"> {UserData.name}. </span>
          </h1>
          <h1 className="text-center lg:text-left font-bold">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm a full stack developer.")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </div>
        <div className="flex flex-col md:flex-row text-center">
          <Link to="skills" spy={true} smooth={true}>
            {" "}
            <div className=" py-3 px-6 border-2 border-solid border-primary cursor-pointer text-primary hover:bg-primary hover:text-white">
              <p
                style={{ fontSize: "1.8rem" }}
                className="text-lg font-extrabold"
              >
                Skills
              </p>
            </div>
          </Link>
          <Link to="projects" spy={true} smooth={true}>
          <div className="py-3 px-6 border-2 border-solid border-primary cursor-pointer text-primary hover:bg-primary hover:text-white">
            <p
              style={{ fontSize: "1.8rem" }}
              className="text-lg font-extrabold"
            >
              Projects
            </p>
          </div>
          </Link>
          <Link to="blogs" spy={true} smooth={true}>
          <div className="py-3 px-6 border-2 border-solid border-primary cursor-pointer text-primary hover:bg-primary hover:text-white">
            <p
              style={{ fontSize: "1.8rem" }}
              className="text-lg font-extrabold"
            >
              Blogs
            </p>
          </div>
          </Link>
          <Link to="about" spy={true} smooth={true}>
          <div className="py-3 px-6 border-2 border-solid border-primary cursor-pointer text-primary hover:bg-primary hover:text-white">
            <p
              style={{ fontSize: "1.8rem" }}
              className="text-lg font-extrabold"
            >
              About
            </p>
          </div>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
          <div className="py-3 px-6 border-2 border-solid border-primary cursor-pointer text-primary hover:bg-primary hover:text-white">
            <p
              style={{ fontSize: "1.8rem" }}
              className="text-lg font-extrabold"
            >
              Contact
            </p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 1000ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-548865729712609-4;
