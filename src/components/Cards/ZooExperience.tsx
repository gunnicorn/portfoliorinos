// picture and words and tags

import React from "react";
import { Flex, Tag } from "antd";
import styles from "./ExperienceCard.module.css";
import VideoPlayer from "./VideoCard";

const ZooExperience: React.FC = () => (
  <div className={styles.experienceMain}>
    <div className={styles.experienceTitle}>Let's Build a Zoo</div>
    {/* <Image
      className={styles.experiencePhoto}
      width={750}
      preview={false}
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.epicgames.com%2FsalesEvent%2FsalesEvent%2FEGS_LetsBuildAZoo_Springloaded_S1_2560x1440-0fd216bea3b2356b701c483e6635b96b&f=1&nofb=1&ipt=dbec1dab37f604c96fe4b4cb10c510408dc3f6a745f74844ed8a093a8ad6c123"
    /> */}
    <VideoPlayer videoId="fpAWOLzu6Do" width={750} height={422} />
    {/* <div className={styles.experienceProjDesc}>Game Developer Simulator</div> */}
    <div className={styles.experienceContriCard}>
      Ported the Steam version of the game to Playstation 4/5, Xbox
      Scarlett/Series X|S and Xbox Gamepass PC using Unity and the relevant
      GDKs. I implemented the Save/Load feature and the Downloadable Content
      pipeline for these consoles as well.
      <p></p>I was also active in engaging with the community through Steam
      forums, helping players with technical issues and questions. You can find
      the game{" "}
      <a href="https://store.steampowered.com/app/1547890/Lets_Build_a_Zoo/">
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
          <Tag color="red">Unity</Tag>
          <Tag color="purple">Microsoft GDK</Tag>
          <Tag color="purple">Playstation Partners</Tag>
          <Tag color="purple">Steamworks</Tag>
        </Flex>
      </div>
    </div>
  </div>
);

export default ZooExperience;
