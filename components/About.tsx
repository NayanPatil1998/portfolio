import React from "react";
import Image from "next/image";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div id="about" className="flex min-h-screen flex-col p-10 lg:p-0 bg-primary justify-center space-y-10 items-center">
      <h1 className="text-center text-white text-5xl md:text-left font-bold">
        ABOUT
      </h1>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-20 items-center justify-center">
        <Image src="/about.svg" width={300} height={300} />
        <div className="flex flex-col max-w-md text-white text-lg text-justify ">
          Recent Computer Engineer graduate with passion for developing scalable
          web applications and working across Full Stack, Currently working as
          Cloud Developer (Full Stack) at Breez Mobility Inc.
          <br />
          Always ready to learn and explore new skills, frameworks and
          challanges in work and also personal projects.
        </div>
      </div>
    </div>
  );
};

export default About;
