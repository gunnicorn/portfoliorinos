// images and then the words

import React from "react";
import styles from "./AcademicCard.module.css";
import VideoPlayer from "./VideoCard";
import { Flex, Tag } from "antd";

const DroneExperience: React.FC = () => (
  <div>
    <div className={styles.titleText}>Quicc Drone League</div>
    <div className={styles.leftAlignedCardMain}>
      <div className={styles.leftAlignedCardPhoto}>
        <VideoPlayer videoId="PWZ-k6S4FkU" />
      </div>
      <div className={styles.leftAlignedCardText}>
        <div>
          A drone racer where you challenge other AI drones.
          <p></p>
          My final school project; I worked on the camera system, UI, gameplay
          features such as power ups and checkpoints, and implemented a memory
          manager.
        </div>
        <div>
          <Flex gap="4px 0" wrap>
            <Tag color="red">C++</Tag>
            <Tag color="red">Custom Game Engine</Tag>
            <Tag color="blue">3D</Tag>
          </Flex>
        </div>
      </div>
    </div>
  </div>
);

export default DroneExperience;
