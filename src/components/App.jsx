import About from "./about.jsx";
import Skills from "./skills.jsx";
import Navbar from "./Navbar.jsx"
import Platforms from "./Platforms.jsx";
import Contact from "./contact.jsx";

function App() {
    const handleTabClick = (str, setActiveTab, setPos) => {
        setActiveTab(str);
        if(str === "Home") setPos(13.5);
        else if(str === "Skills") setPos(29.7);
        else if(str === "Coding") setPos(47);
        else if(str === "Contacts") setPos(67);
    }
  return (
    <>
      <div className="mainContent">
        <div className="overlay">
          <Navbar handleTabClick={handleTabClick}/>
          <section id="Home">
          <About/>
          </section>
          <Skills/>
          <section id="Coding">
            <Platforms/>
          </section>
          <section id="Contact">
            <Contact/>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
