import React from "react";
import "./AnalyticalCards.scss";

const data = [
  {
    heading: "Total Projects",
    count: 491,
    hike: "+20%",
    color: "#F20CEC",
    background: "path.png",
    icon: "icon4.png",
  },
  {
    heading: "Total Generated Tokens",
    count: 45,
    hike: "+10%",
    color: "#F47459",
    background: "path1.png",
    icon: "icon3.png",
  },
  {
    heading: "Total Unique Users",
    count: 491,
    hike: "+20%",
    color: "#F20CEC",
    background: "path2.png",
    icon: "icon2.png",
  },
  {
    heading: "Total Projects",
    count: 491,
    hike: "+40%",
    color: "#F20CEC",
    background: "path3.png",
    icon: "icon1.png",
  },
];

const AnalyticalCards = () => {
  return (
    <div className="analytical-cards-container">
      {data.map((d) => (
        <>
          <div
            className="card"
            style={{ backgroundImage: `url("/icons/${d.background}")` }}
          >
            <span>{d.heading}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={`/icons/${d.icon}`} />
              <p style={{ fontWeight: 700, fontSize: 27 }}>{d.count}</p>
            </span>
            <div className="bottom-right">
              <img src={"/icons/analytical.png"} />
              <span>{d.hike}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AnalyticalCards;
