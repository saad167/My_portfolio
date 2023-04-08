/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Salary Prediction App",
    description:
      "Deploy web application that predict salaries of new employees .It is dedicated especially for human resources manager .",
    url: "https://github.com/saad167/flask_ML",
  },
  {
    title: "Demographic Modelling App",
    description:
      "Deploy web application that is modelling the population growth of a given region.",
    url: "https://github.com/saad167/django_app",
  },
  {
    title: "Bitcoin penetration in Morocco",
    description:
      "Deploy web application that is modelling Moroccan people's behavior concerning Bitcoin",
    url: "https://github.com/saad167/bitcoin_penetration",
  },
  {
    title: "Web scraping of public contracts in Morocco",
    description:
      "Develop a web application that carries out the scraping of public contracts, identifying for each contract the competing companies and the winning company.",
    url: "https://github.com/saad167/market_data",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
