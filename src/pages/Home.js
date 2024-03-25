import React from "react";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import "../styles/Home.css";
import { Link } from "@mui/material";
import Headshot from "../assests/Professional Headshot.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Clare!</h2>

        <div className="prompt">
          {" "}
          <p>
            Computer Science and Computer Engineering student at the Colorado
            School of Mines. My interests span across Web Development, Software Development, Data Science and beyond!
          </p>
          <Link
            href="https://www.linkedin.com/in/clare-webster5/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            {" "}
            <LinkedIn />{" "}
          </Link>
          <Link
            href="https://github.com/clarewebster05"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            {" "}
            <GitHub />{" "}
          </Link>
          <Link
            href="mailto:clarewebster@mines.edu"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Email></Email>
          </Link>
        </div>
        <div className="img">
          <img src={Headshot} alt="Headshot of me"></img>
        </div>
      </div>
      <div className="skills">
        {" "}
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Lanuages </h2>
            <span> Python, Java, JavaScript, CSS, Linux, HTML, C++, C, OCaml </span>
          </li>
          <li className="item">
            <h2>Frameworks </h2>
            <span> React, NodeJS, Flask, Azure </span>
          </li>
          <li className="item">
            <h2>Database Management </h2>
            <span> SQL, PostgreSQL, MySQL </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
