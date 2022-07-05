import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
        <div className="flex flex-col max-w-md text-white text-lg text-justify space-y-5">
          <div>
            <p>
              Recent Computer Engineer graduate with passion for developing
              scalable web applications and working across Full Stack, Currently
              working as Cloud Developer (Full Stack) at Breez Mobility Inc.
              <br />
              Always ready to learn and explore new skills, frameworks and
              challanges in work and also personal projects.
            </p>
          </div>

          <div className="flex space-x-4" >
          <button className="text-left rounded-md py-2 px-6 border-2 border-solid border-white hover:bg-white hover:text-primary">
              <p style={{ fontSize: "1.2rem" }} className="text-lg font-bold">
                Resume
              </p>
            </button>

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

