import React from "react";
import "./NavigationBar.scss";

const NavbarItem = [
  {
    name: "Presales",
    icons: "/icons/Presales.png",
  },
  {
    name: "Launchpad",
    icons: "/icons/Launchpad.png",
  },
  {
    name: "Special Sales",
    icons: "/icons/Special Sales.png",
  },
  {
    name: "Lock",
    icons: "/icons/Lock.png",
  },
  {
    name: "Utility & Tools",
    icons: "/icons/Utility & Tools.png",
  },
  {
    name: "Presale Alerts",
    icons: "/icons/Presale Alerts.png",
  },
  {
    name: "KYC & Audits",
    icons: "/icons/KYC & Audits.png",
  },
  {
    name: "Docs",
    icons: "/icons/Docs.png",
  },
];

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <div className="main-navbar">
        <div className="logo-container">
          <img src="/icons/Logo.png" />
          <span className="logo-name">
            Tina<span>LaunchPad</span>
          </span>
        </div>
        <div className="content-container">
          <div className="content-item extra-margin">
            <div className="content-icon active">
              <img src="/icons/Home.png" />
            </div>
            <div className="content-heading active">Home</div>
          </div>
          {NavbarItem.map((item) => (
            <>
              <div className="content-item">
                <div className="content-icon">
                  <img src={item.icons} />
                </div>
                <div className="content-heading">{item.name}</div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="footer-navbar"></div>
    </div>
  );
};

export default NavigationBar;
