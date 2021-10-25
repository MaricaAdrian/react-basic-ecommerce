import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />
      <div className="content">
        <h1 className="content-title">{title.toUpperCase()}</h1>
        <span className="content-subtitle">SHOP NOW</span>
      </div>
  </div>
);

export default MenuItem;
