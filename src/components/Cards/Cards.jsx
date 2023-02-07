import React from "react";
import "./Card.scss";

const data = [
  {
    heading: "Presales",
    subHeading: "Browse The Best Upcomming Projects",
    color: "#F20CEC",
    icon: "Vector.png",
    links: [
      {
        name: "Browse Presale",
        url: "#",
      },
      {
        name: "Create Presale",
        url: "#",
      },
    ],
  },
  {
    heading: "Staking",
    subHeading: "Stake $TINA",
    color: "rgb(255 127 80)",
    icon: "Vector1.png",
    links: [
      {
        name: "Browse Presale",
        url: "#",
      },
      {
        name: "Stake TINA",
        url: "#",
      },
    ],
  },
  {
    heading: "Token",
    subHeading: "Create Your Own Token With FREE Audit Included",
    color: "#89B68E",
    icon: "Vector2.png",
    links: [
      {
        name: "Craete Presale",
        url: "#",
      },
    ],
  },
  {
    heading: "Airdrope",
    subHeading: "Free Tool For Airdropes",
    color: "#8FAFF4",
    icon: "Vector3.png",
    links: [
      {
        name: "Airdrope",
        url: "#",
      },
    ],
  },
];

const Cards = () => {
  return (
    <div className="Cards">
      {data.map((d) => (
        <>
          <div className="card">
            <div className="top">
              <span>{d.heading}</span>
              <span>{d.subHeading}</span>
            </div>
            <div className="bottom">
              <div className="left">
                {d.links.map((link) => (
                  <>
                    <a href={link.url} style={{ color: d.color }}>
                      {" "}
                      {link.name}{" "}
                    </a>
                  </>
                ))}
              </div>
              <div className="right">
                {d.links.map((link) => (
                  <span style={{ color: d.color }}>{">"}</span>
                ))}
              </div>
            </div>
            <img className="icon" src={"/icons/" + d.icon}></img>
            <div style={{ background: d.color }} className="effects"></div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cards;
