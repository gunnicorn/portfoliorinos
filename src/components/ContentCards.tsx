import React from "react";
import { Anchor, Button } from "antd";
import styles from "./Cards/ContentCards.module.css";
import ExperienceCard from "./Cards/ExperienceCard";

const Anchoring: React.FC = () => (
  <div className={styles.container}>
    {
      <div className={styles.anchorPadding}>
        <Anchor
          className={styles.anchorStyle}
          direction="horizontal"
          items={[
            {
              key: "SelfIntroduction",
              href: "#part-1",
              title: "About",
            },
            {
              key: "Experience",
              href: "#part-2",
              title: "Experience",
            },
            {
              key: "Others",
              href: "#part-3",
              title: "Others",
            },
            {
              key: "meep",
              href: "#part-4",
              title: "Button",
            },
          ]}
        />
      </div>
    }
    <div className={styles.contentContainer}>
      <div
        id="part-1"
        className={`${styles.part1contentSection} ${styles.part1Background}`}
      >
        Hello! I'm a software engineer specializing in game development with 3
        years of professional experience, proficient in C++ and C#. I've worked
        on live games and have a plethora of projects from my school days. I
        love exploring the different facets of game development, especially
        programming.
        <p></p>My background includes serving as a lead network programmer, with
        expertise in server development, online multiplayer, and RESTful APIs.
        Additionally, as one of the core engineers in my previous company, I was
        responsible for architectural design, tool development, upholding modern
        code practices and effective communication across teams.
        <p></p>When i'm not programming, I can be found playing games or
        streaming on Twitch!
      </div>
      <div
        id="part-2"
        className={`${styles.contentSection} ${styles.part2Background}`}
      >
        <ExperienceCard />
      </div>
      <div
        id="part-3"
        className={`${styles.contentSection} ${styles.part3Background}`}
      />
      <Button id="part-4" type="primary">
        Primary Button Here
      </Button>
    </div>
  </div>
);

export default Anchoring;
