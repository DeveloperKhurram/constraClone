import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../images/index.js";

const Header = () => {
  return (
    <header>
      <div className="top-nav bg-grayLight py-4">
        <div className=" container  md:justify-between flex-col gap-2 md:flex-row items-center">
          <div className="address flex gap-3 ">
            <div className="icon">
              <FontAwesomeIcon icon="location-dot" className="w-6 h-6" />
            </div>
            <p>9051 Constra Incorporate, USA</p>
          </div>
          <div className="social">
            <ul className="flex cursor-pointer gap-3">
              <li>
                <NavLink>
                  <FontAwesomeIcon
                    icon={["fab", "facebook-f"]}
                    className="w-6 h-6"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="w-6 h-6"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="w-6 h-6"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="w-6 h-6"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-nav py-8">
        <div className="container flex-col lg:flex-row md:justify-between items-center gap-8">
          <NavLink className={`w-[186px] h-[35px] my-8`}>
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className="flex flex-col gap-y-3 mobileL:flex-row mobileL:flex-wrap">
            <li className="detail">
              <p className="head">call us</p>
              <a className="body">
                <NavLink>(+9) 847-291-4353</NavLink>
              </a>
            </li>
            <li className="detail">
              <p className="head">Email Us</p>
              <a className="body">
                <NavLink>office@Constra.com</NavLink>
              </a>
            </li>
            <li className="detail">
              <p className="head">Global Certificate</p>
              <a className="body">ISO 9001:2017</a>
            </li>
            <li className="detail">
            <button className="btn-primary">Get A Quote</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
