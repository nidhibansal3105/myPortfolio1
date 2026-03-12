import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ handleTabClick }) {
  let [pos, setPos] = useState(13.5);
  let [activeTab, setActiveTab] = useState("Home");
  let tabs = ["Home", "Skills", "Coding", "Contacts"];
  const scrollToSection = (id) => {
    const sec = document.getElementById(id);
    sec?.scrollIntoVeiw({behavior: 'smooth'});
  }

  return (
    <>
    <div className="nav-back flex justify-center items-center">
    <div className="nav-backOver flex justify-center items-center">
        <div className="nav">
          <div
            className="translateBar"
            style={{ position: "absolute", left: `${pos}%` }}
          ></div>
          {tabs.map((tab) => (
            <button
              className={`tab ${activeTab === tab && "active"} nav-tab`}
              key={tab}
              onClick={() => {
                handleTabClick(`${tab}`, setActiveTab, setPos);
                scrollToSection(`${tab}`);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar;
