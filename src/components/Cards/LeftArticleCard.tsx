// images and then the words

import React from "react";
import { Image } from "antd";
import styles from "./ArticleCard.module.css";
import Tags from "./Tags";
import Divider from "./Divider";
const LeftArticleCard: React.FC = () => (
  <div>
    <div className={styles.leftAlignedCardMain}>
      <div className={styles.leftAlignedCardPhoto}>
        <div className={styles.titleText}>Let's Build a Dungeon</div>
        <Image src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2365790/capsule_616x353.jpg?t=1740116300" />
      </div>
      <div className={styles.leftAlignedCardText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        <p></p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam
        <p></p>
        <Tags />
      </div>
    </div>
    <div className={styles.textCardMain}></div>
    <Divider />
  </div>
);

export default LeftArticleCard;
