import LetterGlitch from "../BitsComponent/LetterGlitch";
import CenterMain from "./centerMain";

function Hello() {
  return (
    <>
      <div className="mainPage">
        <LetterGlitch
          className="glitch"
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
        <CenterMain></CenterMain>
      </div>
    </>
  );
}

export default Hello;
