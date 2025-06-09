// picture and words and tags

import React from "react";
import { Flex, Tag } from "antd";
import styles from "./ExperienceCard.module.css";
import VideoPlayer from "./VideoCard";

const DungeonExperience: React.FC = () => (
  <div className={styles.experienceMain}>
    <div className={styles.experienceTitle}>Let's Build a Dungeon</div>
    {/* <Image
      className={styles.experiencePhoto}
      width={750}
      preview={false}
      src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2365790/capsule_616x353.jpg?t=1740116300"
    /> */}
    <VideoPlayer videoId="JZ7EkjjIb_k" width={750} height={422} />
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
      <a href="https://store.steampowered.com/app/2365790/Lets_Build_a_Dungeon/">
        here
      </a>
      !
    </div>
    <div className={styles.experienceTags}>
      <div className={styles.tagsMain}>
        <Flex gap="4px 0" wrap>
          <Tag color="blue">C#</Tag>
          <Tag color="blue">.NET Technologies</Tag>
          <Tag color="blue">Microsoft GDK</Tag>
          <Tag color="blue">Steamworks</Tag>
          <Tag color="blue">Jenkins</Tag>
          <Tag color="blue">Azure Cosmos DB</Tag>
          <Tag color="blue">Azure PlayFab</Tag>
          <Tag color="blue">Twitch</Tag>
          <Tag color="blue">XNA</Tag>
          <Tag color="blue">MonoGame</Tag>
        </Flex>
      </div>
    </div>
  </div>
);

export default DungeonExperience;
