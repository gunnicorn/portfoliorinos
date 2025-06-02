// picture and words and tags

import React from "react";
import { Image, Flex, Tag } from "antd";
import styles from "./ExperienceCard.module.css";

const ZooExperience: React.FC = () => (
  <div className={styles.experienceMain}>
    <div className={styles.experienceTitle}>Let's Build a Zoo</div>
    <Image
      className={styles.experiencePhoto}
      width={750}
      preview={false}
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.epicgames.com%2FsalesEvent%2FsalesEvent%2FEGS_LetsBuildAZoo_Springloaded_S1_2560x1440-0fd216bea3b2356b701c483e6635b96b&f=1&nofb=1&ipt=dbec1dab37f604c96fe4b4cb10c510408dc3f6a745f74844ed8a093a8ad6c123"
    />
    {/* <div className={styles.experienceProjDesc}>Game Developer Simulator</div> */}
    <div className={styles.experienceContriCard}>
      My work consists of architecting and developing the online multiplayer
      system, integrating external SDKs, implementing gameplay features and
      improving company workflow.
      <p></p>As a core engineer for our custom game engine, I was also in charge
      of deploying builds, setting up a CI/CD pipeline, integrating Twitch APIs,
      implementing real-time online multiplayer system and onboarding new hires.
      <p></p>
      The game is unreleased but you can play the live demo{" "}
      <a href="https://store.steampowered.com/app/1547890/Lets_Build_a_Zoo/">
        here
      </a>
      !
    </div>
    <div className={styles.experienceTags}>
      <div className={styles.tagsMain}>
        <Flex gap="4px 0" wrap>
          <Tag color="blue">C#</Tag>
          <Tag color="blue">.NET Technologies</Tag>
          <Tag color="blue">TCP/IP</Tag>
          <Tag color="blue">Steamworks</Tag>
          <Tag color="blue">Jenkins</Tag>
          <Tag color="blue">Azure Cosmos DB</Tag>
          <Tag color="blue">Azure PlayFab</Tag>
          <Tag color="blue">Twitch Integration</Tag>
        </Flex>
      </div>
    </div>
  </div>
);

export default ZooExperience;
