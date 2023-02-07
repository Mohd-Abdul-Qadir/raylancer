import React from "react";
import "./Footer.scss";

const data = [
  {
    image: "TOKERO 1.png",
  },
  {
    image: "company_name.png",
  },
  {
    image: "elrond 1.png",
  },
  {
    image: "codevix 1.png",
  },
  {
    image: "Copper 1.png",
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top">
        <span>Partners</span>
        <span>
          Tinapad is honored and thrilled to be backed by leading Venture
          Capitals in blockchain industry.
        </span>
      </div>
      <div className="bottom">
        {data.map((d) => (
          <>
            <img src={`/icons/${d.image}`} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Footer;
