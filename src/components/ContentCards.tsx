import React from "react";
import { Anchor } from "antd";
import styles from "./Cards/ContentCards.module.css";
import DungeonExperience from "./Cards/DungeonExperience";
import AcademicCard from "./Cards/AcademicCard";
import ZooExperience from "./Cards/ZooExperience";

const Anchoring: React.FC = () => (
  <div className={styles.container}>
    {
      <div className={styles.anchorPadding}>
        <Anchor
          className={styles.anchorStyle}
          direction="horizontal"
          items={[
            {
              key: "Home",
              href: "#home",
              title: "Home",
            },
            {
              key: "SelfIntroduction",
              href: "#about",
              title: "About",
            },
            {
              key: "Experience",
              href: "#experience",
              title: "Experience",
            },
            {
              key: "Projects",
              href: "#projects",
              title: "Projects",
            },
          ]}
        />
      </div>
    }
    <div className={styles.contentContainer}>
      <div id="about" className={`${styles.part1contentSection} `}>
        Hello! I'm a software engineer and game developer with 3 years of
        professional experience, proficient in C++ and C#. I mainly work on
        backend development, and have thorough experience in networking through
        leveraging Azure services like PlayFab, Cosmos DB and RESTful APIs.
        <p></p>
        <p></p> When I'm not programming, I can be found playing games or
        writing!
      </div>
      {/* <MyTimeline /> */}
      <div id="experience" className={`${styles.contentSection} `}>
        <DungeonExperience />
        <ZooExperience />
        {/* <ExperienceCard /> */}
      </div>
      <div id="projects" className={`${styles.contentSection} `}>
        <AcademicCard />
      </div>
    </div>
  </div>
);

export default Anchoring;
