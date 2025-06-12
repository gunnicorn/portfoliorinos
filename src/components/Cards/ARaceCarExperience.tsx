// images and then the words

import React from "react";
import styles from "./AcademicCard.module.css";
import VideoPlayer from "./VideoCard";
import { Flex, Tag } from "antd";

const ARaceCarExperience: React.FC = () => (
  // <div>
  //   <div className={styles.leftAlignedCardMain}>
  //     <div className={styles.leftAlignedCardPhoto}>
  //       <div className={styles.titleText}>ARaceCar</div>
  //       <VideoPlayer videoId="8BOZJisGV1E" />
  //       <div className={styles.experienceTags}>
  //         <div className={styles.tagsMain}>
  //           <Flex gap="4px 0" wrap>
  //             <Tag color="blue">UnityAR</Tag>
  //             <Tag color="blue">Mixed Reality</Tag>
  //           </Flex>
  //         </div>
  //       </div>
  //     </div>
  //     <div className={styles.leftAlignedCardText}>
  //       Augmented Reality application where you map out waypoints to create a
  //       racing track using Bezier Path tool.
  //       <p></p>
  //       This was a game design class so my focus was on AR research and doing
  //       the UI.
  //       <p></p>
  //     </div>
  //   </div>
  // </div>
  <div>
    <div className={styles.titleText}>ARaceCar</div>
    <div className={styles.leftAlignedCardMain}>
      <div className={styles.leftAlignedCardPhoto}>
        <VideoPlayer videoId="8BOZJisGV1E" />
      </div>
      <div className={styles.leftAlignedCardText}>
        <div>
          Augmented Reality application where you map out waypoints to create a
          racing track using Bezier Path tool.
          <p></p>
          This was a game design class so my focus was on AR research and doing
          the UI.
        </div>
        <div>
          <Flex gap="4px 0" wrap>
            <Tag color="red">UnityAR</Tag>
            <Tag color="blue">Mixed Reality</Tag>
          </Flex>
        </div>
      </div>
    </div>
  </div>
);

export default ARaceCarExperience;
