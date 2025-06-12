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
      of deploying builds on Steam, setting up a CI/CD pipeline, integrating
      Twitch APIs, setting up the repository, and onboarding new hires. I act as
      a "go-to" for my fellow co-workers whenever there is a technical issue as
      well.
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
          <Tag color="red">C#</Tag>
          <Tag color="red">.NET Technologies</Tag>
          <Tag color="red">XNA</Tag>
          <Tag color="red">MonoGame</Tag>
          <Tag color="purple">Steamworks</Tag>
          <Tag color="purple">Twitch</Tag>
          <Tag color="purple">Jenkins</Tag>
          <Tag color="blue">Amazon EC2</Tag>
          <Tag color="blue">Azure Cosmos DB</Tag>
          <Tag color="blue">Azure PlayFab</Tag>
        </Flex>
      </div>
    </div>
  </div>
);

export default DungeonExperience;
