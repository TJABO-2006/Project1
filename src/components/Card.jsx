// src/components/Card.jsx
import React from "react";
import "./Card.css";

export default function Card({ title, date, description, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
}
