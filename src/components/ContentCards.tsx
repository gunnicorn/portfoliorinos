import React from "react";
import { Anchor, Button } from "antd";
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
      <div id="part-1" className={`${styles.part1contentSection} `}>
        Hello! I'm a software engineer and game developer with 3 years of
        professional experience, proficient in C++ and C#. I specialize in
        networking through leveraging Azure services like PlayFab, Cosmos DB and
        RESTful APIs. <p></p>In my previous company, I contributed to the
        architectural design of our custom game engine, developing engine tools,
        and integrating external SDKs.
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
      <Button id="part-4" type="primary">
        Primary Button Here
      </Button>
    </div>
  </div>
);

export default Anchoring;
