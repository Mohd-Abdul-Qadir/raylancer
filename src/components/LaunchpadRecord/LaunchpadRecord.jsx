import React from "react";
import "./LaunchpadRecord.scss";
import { AiOutlineRight } from "react-icons/ai";
import SmallCard from "../SmallCard/SmallCard";

const data = [
  {
    heading: "Bitmamba",
    subHeading: "Decentralised Exchange",
    amount: "🔥X100",
    icon: "Group 15.png",
    color: "#F47459",
  },
  {
    heading: "StarCorn Swap",
    subHeading: "Decentralised Exchange",
    amount: "🔥X10",
    icon: "Group 15 (1).png",
    color: "#F20CEC",
  },
  {
    heading: "Ape Legend",
    subHeading: "NFT Platform",
    amount: "🔥X85",
    icon: "Group 15 (2).png",
    color: "#14C59D",
  },
  {
    heading: "GamePad",
    subHeading: "Launchpad",
    amount: "🔥X1000",
    icon: "Group 15 (3).png",
    color: "#454A75",
  },
  {
    heading: "PinkChain",
    subHeading: "Blockchain Network",
    amount: "🔥X100",
    icon: "Group 15 (4).png",
    color: "#F20CEC",
  },
];

const LaunchpadRecord = () => {
  return (
    <div className="launchpad-record-container">
      <div className="launchpad-heading">
        <div className="heading-container">
          <span>Launchpad Record</span>
          <span>Projects All Time Hight On Our Platform</span>
        </div>
        <span>
          View All <AiOutlineRight />
        </span>
      </div>
      <div className="cards-container">
        {data.map((d) => (
          <>
            <SmallCard {...d} />
          </>
        ))}
      </div>
    </div>
  );
};

export default LaunchpadRecord;
