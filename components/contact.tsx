import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const formRef = useRef<HTMLFormElement | string>("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC as string
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mail sent successfully!");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong!");
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col text-textcolor min-h-screen justify-center space-y-10 items-center py-10 mb-10">
      <h1 className="text-center  text-5xl md:text-left font-bold mt-10">
        Contact Me
      </h1>
      {/* @ts-ignore */}
      <form ref={formRef}
        onSubmit={sendEmail}
        className="w-full md:w-3/4 lg:w-3/6 p-4"
      >
        <div className="p-3">
          <input
            className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
            type="text"
            placeholder="Name"
            name="from_name"
            required
          />
        </div>
        <div className="p-3">
          <input
            className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
            type="email"
            placeholder="Email Id"
            name="from_email"
            required
          />
        </div>

        <div className="p-3">
          <textarea
            className="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
            placeholder="Message"
            name="message"
            required
          />
        </div>
        <div className="flex p-3 pt-4 justify-center">
          {loading ? (
            <div
              className="animate-spin h-5 w-5 mr-3 bg-primary "
             
            ></div>
          ) : (
            <button className="w-full bg-primary hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl">
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
