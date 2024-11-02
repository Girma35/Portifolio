import React from 'react';
import projectCss from "./projects.module.css";
import Project1 from "../../assets/images/project1.png";
import Project2 from "../../assets/images/project2.png";

function Projects() {
  const projects = [
    {
      id: 1,
      image: Project1,
      title: "Learn Hall",
      description: "an innovative online platform that offers 100% accessible tech education and writing services.  Built using the MERN stack (MongoDB, Express, React, Node.js), it features a user-friendly design, providing a seamless experience across all devices.",
      gitHref : "https://github.com/Girma35/Learnhall-",
      webHref :"https://learnhall.netlify.app/",
    },
    {
      id: 2,
      image: Project2,
      title: "Ride Ethiopia",
      description: " After launching this website, businesses have become significantly more efficient by addressing common challenges in the transportation sector, such as accessibility and convenience.",
      gitHref : "https://github.com/Girma35/Ride-Ethiopia-",
      webHref :"https://ridethiopia.netlify.app/",
    },
  ];

  return (
    <div className={projectCss.section}>

<div className={projectCss.title_container}>
  <h2 className={projectCss.title}>Projects</h2>
  <p className={projectCss.description}>
    As a dedicated developer, I have worked on various projects that showcase my skills in creating innovative solutions. My portfolio includes applications that enhance user experience and address real-world problems, demonstrating my ability to deliver quality results in both individual and collaborative settings. Additionally, I have contributed to several open-source projects, further honing my skills and collaborating with the developer community to create impactful software solutions.
</p>
</div>
<h3 className={projectCss.subtitle}>Personal Projects</h3>
<div className={projectCss.card_container}>

      {projects.map((project) => (
        <div key={project.id} className={projectCss.card}>
        <div className={projectCss.image}>
          <img src={project.image} alt={project.title}  />
          </div>
          <div className={projectCss.description}>
          <desc >{project.description}</desc>
          </div>
          <div className={projectCss.button_container}>
          <a  href={project.gitHref}>
          <button className={projectCss.button}>Code</button>
          </a>
         
          <a  href={project.webHref}>
          <button className={projectCss.button}>Demo</button>
          </a>
          </div>
        </div>
      ))}
</div>

<h3 className={projectCss.subtitle}>Open Source Projects</h3>
<div>
  <p className={projectCss.description}>
    I have actively contributed to the Expensify app, enhancing its functionality and user experience. My contributions include implementing new features, fixing bugs, and optimizing existing code. Collaborating with a diverse team of developers, I gained valuable insights into best practices for software development and version control, which further strengthened my skills.
  </p>
</div>


    </div>
  );
}

export default Projects;
