import About from "./about.jsx";
import Skills from "./skills.jsx";
import Navbar from "./Navbar.jsx"
import Platforms from "./Platforms.jsx";
import Contact from "./contact.jsx";

function App() {
    const handleTabClick = (str, setActiveTab, setPos) => {
        setActiveTab(str);
        if(str === "Home") setPos(6);
        else if(str === "Skills") setPos(13.5);
        else if(str === "Coding") setPos(21.4);
        else if(str === "Contacts") setPos(30);
    }
    const scroll = (id) => {
      const sec = document.getElementById(id);
      sec?.scrollIntoView({behavior: 'smooth'});
    }
    document.querySelectorAll('*').forEach(el => {
      if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log(el, el.offsetWidth);
      }
    });
  return (
    <>
      <div className="mainContent">
        <div className="overlay">
          <Navbar handleTabClick={handleTabClick} scrollToSection={scroll} />
          <section id="Home" style={{ scrollMarginTop: "6vw" }}>
          <About/>
          </section>
          <section id="Skills" style={{ scrollMarginTop: "3.5vw" }}>
          <Skills/>
          </section>
          <section id="Coding" style={{ scrollMarginTop: "12vw" }}>
            <Platforms/>
          </section>
          <section id="Contacts" style={{ scrollMarginTop: "3.5vw" }}>
            <Contact/>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
