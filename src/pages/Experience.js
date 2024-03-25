import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#2b4162">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2020 - May 2024"
          iconStyle={{ background: "#385F71", color: "fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Colorado School of Mines, Golden, CO
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            B.S. Computer Science, Computer Engineering Foucus
          </h4>
          <p>Minor in Computational and Applied Mathematics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2022 - May 2023"
          iconStyle={{ background: "#B486AB", color: "fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Part Time Manager - Five Below
          </h3>
          <p>
            This job entailed managing store operations, including cash
            handling, supervising staff, organizing merchandise displays, and
            coordinating tasks with other managers for efficient workflow.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023 - Present"
          iconStyle={{ background: "#B486AB", color: "fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Team Lead - Goozell Yogurt and Coffee
          </h3>
          <p>
            This job involves managing store operations, including opening and
            closing procedures, overseeing inventory, delegating tasks to staff,
            and resolving conflicts to maintain a positive work environment.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
