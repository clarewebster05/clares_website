import React from "react";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import "../styles/Footer.css";
import { Link } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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

        <p>&copy; 2024 Clare Webster</p>
      </div>
    </div>
  );
}

export default Footer;
