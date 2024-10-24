import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="top-nav bg-grayLight flex flex-row p-5 ">
        <div className="address flex">
          <div className="icon">
          <FontAwesomeIcon icon="location-dot" />
          </div>
          <p>9051 Constra Incorporate, USA</p>
        </div>
        <div className="social">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <FontAwesomeIcon icon={["fab", "github"]} />
        </div>
      </div>
    </header>
  );
};

export default Header;
