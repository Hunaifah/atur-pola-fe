import React, { useState } from "react";
import Avatar from "../../../assets/avatar.svg";

function Sidebar(props) {
  return (
    <div className="info-sec-sidebar">
      <div className="group-profile">
        <img src={Avatar} className="profile" alt="profile" />
        <div>
          <h1>jhon efriel</h1>
          <p>jhonsagalaa@gmail.com</p>
        </div>
      </div>
      <div className="group-btn-profile">
        <a className="btn-change-password" href="/updatepassword">
          Ubah Password
        </a>
        <a className="btn-sign-out" href="/login">
          Sign Out
        </a>
      </div>
      <div className="group-menu-sidebar">
        <a
          className={
            "menu-favorites " +
            (props.active == "Favorites"
              ? "active-menu-info-sidebar"
              : "inactive-menu-info-sidebar")
          }
          href="/favorites"
        >
          Favorites
        </a>
        <a
          className={
            "menu-informasi-pribadi " +
            (props.active == "InformasiPribadi"
              ? "active-menu-info-sidebar"
              : "inactive-menu-info-sidebar")
          }
          href="/informasi-pribadi"
        >
          Infromasi Pribadi
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
