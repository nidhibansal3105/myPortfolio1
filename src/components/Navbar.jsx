import { useState } from "react";

function Navbar({ handleTabClick , scrollToSection}) {
  let [pos, setPos] = useState(6);
  let [activeTab, setActiveTab] = useState("Home");
  let tabs = ["Home", "Skills", "Coding", "Contacts"];


  return (
    <>
    <div className="nav-back flex justify-center items-center">
    <div className="nav-backOver flex justify-center items-center">
        <div className="nav">
          <div
            className="translateBar"
            style={{ position: "absolute", left: `${pos}vw` }}
          ></div>
          {tabs.map((tab) => (
            <button
              className={`tab ${activeTab === tab && "active"} nav-tab`}
              key={tab}
              onClick={() => {
                handleTabClick(tab, setActiveTab, setPos);
                scrollToSection(tab);
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
