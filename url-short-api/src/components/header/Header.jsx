import React from "react";
import "./Header.scss";
import LinkIcon from "../../assets/icons/link-svgrepo-com.svg";

function Header() {
  return (
    <header className="d-flex justify-content-center align-items-center py-3 bg-light">
      <a href="#">
        <img className="custom-link-icon me-2" src={LinkIcon} alt="Link Icon" />
        <span className="fs-4 fw-bold">Bitly</span>
      </a>
    </header>
  );
}

export default Header;
