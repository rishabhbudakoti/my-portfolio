import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Heading from "./Heading";
import emailjs from "@emailjs/browser";
import submit from "../assets/submit.mp3";

const contactInfo = [
  {
    icon: <FaUser className="text-green-800 text-xl" />,
    text: "Rishabh Sharma",
  },
  {
    icon: <FaEnvelope className="text-amber-300 text-xl" />,
    text: "rishabh44567@gmail.com",
  },
  {
    icon: <FaPhone className="text-pink-700 text-xl" />,
    text: "+91 8349395755",
  },
];

const socialIcons = [FaGithub, FaLinkedin, FaInstagram];
const sociallinks = [
  "https://github.com/rishabhbudakoti",
  "https://www.linkedin.com/in/rishabh-sharma-047631275",
  "https://www.instagram.com/rishabh.budakoti/",
];

const formInputs = [
  {
    placeholder: "Your Name",
    icon: <FaUser className="text-gray-400 text-lg" />,
    type: "text",
    name: "name",
  },
  {
    placeholder: "Your Email",
    icon: <FaEnvelope className="text-gray-400 text-lg" />,
    type: "email",
    name: "email",
  },
  {
    placeholder: "Phone Number",
    icon: <FaPhone className="text-gray-400 text-lg" />,
    type: "tel",
    name: "phone",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !contactData.name ||
      !contactData.email ||
      !contactData.message ||
      !contactData.phone
    ) {
      return alert("All Fields Required");
    }
    setLoading(true);

    const playSound = () => {
      const audio = new Audio(submit);
      audio.play();
    };

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      user_email: contactData.email,
      user_name: contactData.name,
      user_message: contactData.message,
      user_phone: contactData.phone,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((res) => {
        setLoading(false);
        alert("Message Send Successfully...");
      })
      .catch((error) => {
        setLoading(false);
        alert("emailJS Error, Please try again...");
      });

    setContactData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    playSound();
  };

  return (
    <section id="contact" className="py-14 bg-black/10 ">
      <Heading heading={"Get In Touch"} />
      <p className="text-center text-gray-300 mt-3 opacity-50 text-lg px-3">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <div className="max-w-5xl mx-auto mt-16 flex justify-center gap-10 flex-wrap">
        <div className="w-[360px] md:w-[480px]  h-max overflow-hidden relative p-8 rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 ">
          <div className="absolute right-0 top-0 w-[60%] h-full opacity-[0.05] bg-[linear-gradient(to_bottom,transparent_95%,white_95%),linear-gradient(to_right,transparent_95%,white_95%)] bg-size-[20px_20px]"></div>

          <h3 className="text-2xl font-semibold text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-4 text-gray-300">
            {contactInfo.map((item, i) => (
              <p key={i} className="flex items-center gap-3">
                {item.icon} {item.text}
              </p>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href={sociallinks[i]}
                target="_blank"
                className="p-3 rounded-full bg-white/10 border border-white/10 
                  hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
              >
                <Icon className="text-2xl text-white" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-[360px] md:w-[480px]   transition-all duration-500"
        >
          <div className="p-8 rounded-3xl bg-white/5 shadow-[0_0_10px_2px_rgba(250,204,21,0.1)] border border-white/10 transition-all duration-300 ">
            <h3 className="text-2xl text-center font-semibold text-white mb-6">
              Send Me a Message
            </h3>

            {formInputs.map((input, i) => (
              <div key={i} className="relative mb-5">
                <div className="absolute top-[17px] left-4">{input.icon}</div>
                <input
                  autoComplete="off"
                  name={input.name}
                  type={input.type}
                  onChange={handleChange}
                  value={contactData[input.name]}
                  placeholder={input.placeholder}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 
                text-gray-200 focus:border-cyan-400 outline-none transition-all"
                />
              </div>
            ))}

            <textarea
              value={contactData.message}
              name="message"
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 
            text-gray-200 focus:border-cyan-400 outline-none transition-all"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full py-3 rounded-xl text-lg font-semibold text-white
            bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.2)] border border-ternary   
            hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
