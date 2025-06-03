import React from "react";
import DroneExperience from "./DroneExperience";
import AMPExperience from "./AMPExperience";
import styles from "./ArticleCard.module.css";
const ArticleCard: React.FC = () => (
  <div>
    <div className={styles.mainTitle}>Academic Projects</div>
    <DroneExperience />
    <AMPExperience />
  </div>
);

export default ArticleCard;
