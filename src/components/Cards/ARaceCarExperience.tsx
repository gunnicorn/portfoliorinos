// images and then the words

import React from "react";
import styles from "./ArticleCard.module.css";
import VideoPlayer from "./VideoCard";
import { Flex, Tag } from "antd";

const ARaceCarExperience: React.FC = () => (
  <div>
    <div className={styles.leftAlignedCardMain}>
      <div className={styles.leftAlignedCardPhoto}>
        <div className={styles.titleText}>ARaceCar</div>
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
        Augmented Reality application where you map out waypoints to create a
        racing track.
        <p></p>
        My focus was on AR research and UI! The main algorithm used was Bezier
        curves.
        <p></p>
      </div>
    </div>
  </div>
);

export default ARaceCarExperience;
