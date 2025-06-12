// images and then the words

import React from "react";
import styles from "./AcademicCard.module.css";
import VideoPlayer from "./VideoCard";
import { Flex, Tag } from "antd";

const AMPExperience: React.FC = () => (
  // <div>
  //   <div className={styles.rightAlignedCardMain}>
  //     <div className={styles.rightAlignedCardText}>
  //       2D local PvP shooter where you play as a bodyguard.
  //       <p></p>I was in charge of anything physics-related! I made my own custom
  //       2D physics library that handled game object collisions.
  //     </div>
  //     <div className={styles.rightAlignedCardPhoto}>
  //       <div className={styles.titleText}>Access Modifier: Protected</div>
  //       <div>
  //         <VideoPlayer videoId="aWm82zK7Qzo" />
  //       </div>
  //       <div className={styles.experienceTags}>
  //         <div className={styles.tagsMain}>
  //           <Flex gap="4px 0" wrap>
  //             <Tag color="blue">C++</Tag>
  //             <Tag color="blue">Custom Game Engine</Tag>
  //           </Flex>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div>
    <div className={styles.titleText}>Access Modifier: Protected</div>
    <div className={styles.leftAlignedCardMain}>
      <div className={styles.leftAlignedCardPhoto}>
        <VideoPlayer videoId="aWm82zK7Qzo" />
      </div>
      <div className={styles.leftAlignedCardText}>
        <div>
          2D local PvP shooter where you play as a bodyguard.
          <p></p>I was in charge of everything physics-related! I made my own
          custom 2D physics library that handled game object collisions.
        </div>
        <div>
          <Flex gap="4px 0" wrap>
            <Tag color="red">C++</Tag>
            <Tag color="red">Custom Game Engine</Tag>
          </Flex>
        </div>
      </div>
    </div>
  </div>
);

export default AMPExperience;
