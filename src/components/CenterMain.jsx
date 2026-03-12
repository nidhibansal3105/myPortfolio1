import DecryptedText from "../BitsComponent/DecryptedText";
import { Link } from "react-router-dom";

const CenterMain = () => {
  return (
    <>
      <div className="centerElement">
        <div className="textElement">
          <DecryptedText
            text="Hello, I’m Nidhi.
Thank you for stopping by. This portfolio showcases a range of projects and skills that reflect my learning and growth.
Please take your time to explore."
            animateOn="view"
            revealDirection="center"
          />
        </div>
        <Link to="/portfolio" className="button">Portfolio</Link>
      </div>
    </>
  );
};

export default CenterMain;
