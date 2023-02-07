import { Input } from "antd";
import React from "react";
import "./Header.scss";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header-container">
      <div className="search-container">
        <Input
          placeholder="Search"
          prefix={<RiSearchLine size={20} color={"white"} />}
          bordered={false}
        />
      </div>
      <div className="action-container">
        <div className="action-item">
          <div className="icon-parent">
            <FiPlus
              color="#f20cec"
              size={10}
              style={{ background: "white", borderRadius: "50%", padding: 4 }}
            />
          </div>
          <span>Create</span>
        </div>
        <div className="action-item">
          <div className="icon-parent">
            <FiPlus
              color="#f20cec"
              size={10}
              style={{ background: "white", borderRadius: "50%", padding: 4 }}
            />
          </div>
          <span>Ethereum Chain</span>
          <img src="/icons/Arrow - Bottom.png" />
        </div>
        <div className="action-item">
          <div className="icon-parent">
            <img src="icons/Wallet.png" color="#f20cec" size={10} />
          </div>
          <span>Connect Wallet</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
