import React from "react";

export default function Banner({ emoji, title, subtitle, children }) {
  return (
    <div className="banner">
    <span>{emoji}</span>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
