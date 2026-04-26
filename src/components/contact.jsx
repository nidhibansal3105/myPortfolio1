import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_369bx84", // Your Service ID
        "template_6rkg1xd", // Your Template ID
        form.current,
        "zVfpwd7W9gX7F1YJC" // Your Public Key
      )
      .then(() => {
        alert("Message sent!");
        form.current.reset();
      })
      .catch((err) => {
        console.error("Failed:", err);
        alert("Something went wrong.");
      });
  };

  return (
    <div className="contact-cont flex flex-col justify-evenly items-center">
      <div className="gradient-text text-[5vw]">Contact Me</div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="cont-form flex flex-col justify-center items-center"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          required
        />
        <button type="submit" className="but-contact">
          Send
        </button>
      </form>
      <div className="plat-contact flex w-screen">
        <div className="flex items-center gap-[1vw]">
          <a
            href="https://www.linkedin.com/in/nidhi-bansal-577b57330/"
            target="_blank"
          >
            <button>
              <FaLinkedin />
            </button>
          </a>
          <p className="text-amber-50 text-[1vw]">Linkedin</p>
        </div>
        <div className="flex items-center gap-[1vw]">
          <a href="https://github.com/nidhibansal3105" target="_blank">
            <button>
              <FaGithub />
            </button>
          </a>
          <p className="text-amber-50 text-[1vw]">Github</p>
        </div>
        <div className="flex items-center gap-[1vw]">
          <a href="https://www.instagram.com/31.nidhi.10/" target="_blank">
            <button>
              <FaInstagram />
            </button>
          </a>
          <p className="text-amber-50 text-[1vw]">Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
