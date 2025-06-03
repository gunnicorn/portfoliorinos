import React from "react";
import { Anchor } from "antd";
import styles from "./Cards/ContentCards.module.css";
import DungeonExperience from "./Cards/DungeonExperience";
import ArticleCard from "./Cards/ArticleCard";
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
              key: "Projects",
              href: "#part-3",
              title: "Projects",
            },
          ]}
        />
      </div>
    }
    <div className={styles.contentContainer}>
      <div id="part-1" className={`${styles.part1contentSection} `}>
        Hello! I'm a software engineer and game developer with 3 years of
        professional experience, proficient in C++ and C#. I graduated in 2022
        with a Bachelor of Science in Computer Science and Game Design. I
        specialize in networking through leveraging Azure services like PlayFab,
        Cosmos DB and RESTful APIs. <p></p>In my previous company, I contributed
        to the architectural design of our custom game engine, developing engine
        tools, and integrating external SDKs.
        <p></p> When I'm not programming, I can be found playing games or
        streaming on Twitch!
      </div>
      {/* <MyTimeline /> */}
      <div id="part-2" className={`${styles.contentSection} `}>
        <DungeonExperience />
        <ZooExperience />
        {/* <ExperienceCard /> */}
      </div>
      <div id="part-3" className={`${styles.contentSection} `}>
        <ArticleCard />
      </div>
    </div>
  </div>
);

export default Anchoring;
