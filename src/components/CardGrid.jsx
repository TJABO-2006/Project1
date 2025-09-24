// src/components/CardGrid.jsx
import React from "react";
import Card from "./Card";

export default function CardGrid({ events }) {
  return (
    <div className="card-grid">
      {events.map(event => (
        <Card
          key={event.id}
          title={event.title}
          date={event.date}
          description={event.description}
          link={event.link}
        />
      ))}
    </div>
  );
}
