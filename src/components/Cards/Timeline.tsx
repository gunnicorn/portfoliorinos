import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Timeline } from "antd";
import styles from "./Timeline.module.css";

const MyTimeline: React.FC = () => {
  const [mode, setMode] = useState<"left" | "alternate" | "right">("left");

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <div className={styles.timelineContainer}>
      <Timeline
        mode="left"
        items={[
          {
            label: "2022-01-03",
            children: "Joined Springloaded Pte Ltd as an intern",
          },
          {
            children: "Ported 'Let's Build a Zoo' to Playstation and Xbox",
          },
          {
            children: "Worked on DLCs for 'Let's Build a Zoo'",
          },
          {
            label: "2022-10-01",
            children:
              "Graduated from Digipen Singapore Institute of Technology with BSc in Computer Science and Game Design",
          },
          {
            label: "2022-07-01",
            children: "Converted to full-time software engineer",
          },
          {
            children:
              "Worked on engine architecture for 'Let's Build a Dungeon'",
          },
          {
            children:
              "Worked on core gameplay features for 'Let's Build a Dungeon'",
          },
          {
            children:
              "Developed game networking infrastructure for 'Let's Build a Dungeon'",
          },
          {
            children: "Integrated Twitch API in 'Let's Build a Dungeon'",
          },
          {
            label: "2025-02-28",
            children: "Left Springloaded Pte Ltd",
          },
        ]}
      />
    </div>
  );
};

export default MyTimeline;
