import React from "react";
import Title from "./title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const services = [
  {
    icon: <FaCocktail />,
    title: "free cocktails 💦",
    info: "Best you can ever get all over the world, consectetur adipisicing elit. Natus accusamus quis nulla.",
  },
  {
    icon: <FaHiking />,
    title: "free fahiking  💫",
    info: "Best you can ever get all over the world, consectetur adipisicing elit. Natus accusamus quis nulla.",
  },
  {
    icon: <FaShuttleVan />,
    title: "free fashuttlevan 👀",
    info: "Best you can ever get all over the world, consectetur adipisicing elit. Natus accusamus quis nulla.",
  },
  {
    icon: <FaBeer />,
    title: "free beer 💯",
    info: "Best you can ever get all over the world, consectetur adipisicing elit. Natus accusamus quis nulla.",
  },
];

export default function ourServices() {
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((item, index) => (
          <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
