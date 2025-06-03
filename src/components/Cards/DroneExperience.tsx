// images and then the words

import React from "react";
import styles from "./ArticleCard.module.css";
import VideoPlayer from "./VideoCard";
import { Flex, Tag } from "antd";

const DroneExperience: React.FC = () => (
  <div>
    <div className={styles.leftAlignedCardMain}>
      <div className={styles.leftAlignedCardPhoto}>
        <div className={styles.titleText}>Quicc Drone League</div>
        <VideoPlayer videoId="PWZ-k6S4FkU" />
        <div className={styles.experienceTags}>
          <div className={styles.tagsMain}>
            <Flex gap="4px 0" wrap>
              <Tag color="blue">C++</Tag>
              <Tag color="blue">Custom Game Engine</Tag>
            </Flex>
          </div>
        </div>
      </div>
      <div className={styles.leftAlignedCardText}>
        A drone racer where you challenge other AI drones.
        <p></p>
        My final school project; I worked on the camera system, UI, gameplay
        features such as power ups and checkpoints, and implemented a memory
        manager.
        <p></p>
      </div>
    </div>
  </div>
);

export default DroneExperience;
