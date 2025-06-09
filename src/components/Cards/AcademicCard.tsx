import React from "react";
import DroneExperience from "./DroneExperience";
import AMPExperience from "./AMPExperience";
import styles from "./AcademicCard.module.css";
import ARaceCarExperience from "./ARaceCarExperience";
import BurntPaws from "./BurntPaws";

const AcademicCard: React.FC = () => (
  <div>
    <div className={styles.mainTitle}>Academic Projects</div>
    <DroneExperience />
    <AMPExperience />
    <ARaceCarExperience />
    <BurntPaws />
  </div>
);

export default AcademicCard;
