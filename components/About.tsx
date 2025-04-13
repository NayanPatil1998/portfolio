import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { UserData } from "../helpers/data";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const router = useRouter()
  return (
    <div
      id="about"
      className="flex min-h-screen flex-col p-10 lg:p-0 bg-primary justify-center space-y-10 items-center"
    >
      <h1 className="text-center text-white text-5xl md:text-left font-bold">
        ABOUT
      </h1>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-20 items-center justify-center">
        <Image src="/about.svg" width={300} height={300} />
        <div className="flex flex-col max-w-md lg:max-w-2xl text-white text-lg text-justify space-y-5">
          <div>
            <p>
            Full stack developer with 3 years of hands-on experience building real-world products that make a difference. I've got a serious passion for diving into new tech—I never stop learning! On the frontend, I craft responsive and intuitive user interfaces with React, while my backend toolkit includes Node.js, TypeScript, and Golang, with Docker keeping everything nicely containerized. These days, I'm getting my hands dirty with AWS cloud services, crafting lambda functions and designing architectures that are both scalable and secure. My approach? Build complete, end-to-end solutions that not only work great today but can grow with tomorrow's demands. I thrive in collaborative environments where I can both contribute my expertise and absorb new knowledge from those around me.
            </p>
          </div>

          <div className="flex space-x-4" >
          <a rel="noopener noreferrer" target="_blank" href={UserData.social.resume} className="text-left rounded-md py-2 cursor-pointer px-6 border-2 border-solid border-white hover:bg-white hover:text-primary">
              <p style={{ fontSize: "1.2rem" }} className="text-lg font-bold">
                Resume
              </p>
            </a>

            <button onClick={() => router.push('mailto:patil.nayan04@gmailcom')} className="text-left rounded-md py-2 px-6 border-2 border-solid border-white hover:bg-white hover:text-primary">
              <p style={{ fontSize: "1.2rem" }} className="text-lg font-bold">
                Mail me
              </p>
            </button>
            {/* <button onClick={() => router.push('callto:+919604783348')} className="text-left rounded-md py-2 px-6 border-2 border-solid border-white hover:bg-white hover:text-primary">
              <p style={{ fontSize: "1.2rem" }} className="text-lg font-bold">
                Call me
              </p>
            </button> */}
            
          </div>
         
              {/* <SocialIcons
          icon={<FaLinkedinIn size={32} />}
          link={UserData.social.linkedin}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default About;

