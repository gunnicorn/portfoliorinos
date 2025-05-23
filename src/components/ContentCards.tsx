import React from "react";
import { Anchor, Button } from "antd";
import styles from "./Cards/ContentCards.module.css";

const Anchoring: React.FC = () => (
  <div className={styles.container}>
    <div>
      <div
        id="part-1"
        className={`${styles.contentSection} ${styles.part1Background}`}
      />
    </div>
    <div className={styles.anchorPadding}>
      <Anchor
        direction="vertical"
        items={[
          {
            key: "SelfIntroduction",
            href: "#part-1",
            title: "About",
          },
          {
            key: "Experience",
            href: "#part-2",
            title: "Experience",
          },
          {
            key: "Others",
            href: "#part-3",
            title: "Others",
          },
          {
            key: "meep",
            href: "#part-40",
            title: "Button",
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-2"
        className={`${styles.contentSection} ${styles.part2Background}`}
      />
      <div
        id="part-3"
        className={`${styles.contentSection} ${styles.part3Background}`}
      />
      <Button id="part-4" type="primary">
        Primary Button Here
      </Button>
    </div>
  </div>
);

export default Anchoring;
