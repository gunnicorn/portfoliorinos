// images and then the words

import React from "react";
import styles from "./AcademicCard.module.css";
import VideoPlayer from "./VideoCard";
import { Flex, Tag } from "antd";

const BurntPaws: React.FC = () => (
  // <div>
  //   <div className={styles.rightAlignedCardMain}>
  //     <div className={styles.rightAlignedCardText}>
  //       A cooking game where you hunt for ingredients and cook dishes as a cat.
  //       <p></p>I did the ingredients and dish system. Since this was a game
  //       design class, I focused on flavour texts and item descriptions as well.
  //     </div>
  //     <div className={styles.rightAlignedCardPhoto}>
  //       <div className={styles.titleText}>Burnt Paws</div>
  //       <div>
  //         <VideoPlayer videoId="AgVRCVRH7Cc" />
  //       </div>
  //       <div className={styles.experienceTags}>
  //         <div className={styles.tagsMain}>
  //           <Flex gap="4px 0" wrap>
  //             <Tag color="blue">Unity2D</Tag>
  //           </Flex>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div>
    <div className={styles.titleText}>Burnt Paws</div>
    <div className={styles.leftAlignedCardMain}>
      <div className={styles.leftAlignedCardPhoto}>
        <VideoPlayer videoId="AgVRCVRH7Cc" />
      </div>
      <div className={styles.leftAlignedCardText}>
        <div>
          A cooking game where you hunt for ingredients and cook dishes as a
          cat.
          <p></p>I did the ingredients and dish system. Since this was a game
          design class, I focused on flavour texts and item descriptions as
          well.
        </div>
        <div>
          <Flex gap="4px 0" wrap>
            <Tag color="red">Unity2D</Tag>
          </Flex>
        </div>
      </div>
    </div>
  </div>
);

export default BurntPaws;
