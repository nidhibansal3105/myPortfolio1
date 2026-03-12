import ElectricBorder from './ElectricBorder'
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <ElectricBorder
        color="#0065d1"
        speed={1}
        chaos={0.12}
        thickness={2}
        style={{ borderRadius: 16 }}
      >
        <div className="contact-cont flex flex-col justify-center flex-wrap items-center">
            <div className="contact gradient-text">Contact</div>
            <div className="msg-type flex justify-center items-center flex-wrap gap-40">
                <a href="tel:+917082745772" target="_blank" className='but-contact'><FaPhoneAlt /></a>
                <a href="https://www.instagram.com/" target="_blank" className='but-contact'><FaInstagram /></a>
                <a href="mailto:nidhibansal1031@gmail.com" target="_blank" className='but-contact'><IoIosMail /></a>
            </div>
        </div>
      </ElectricBorder>
    </>
  );
};

export default Contact;