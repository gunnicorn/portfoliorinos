// picture and words and tags

import React from "react";
import { Image } from "antd";
import Tags from "./Tags";
import styles from "./ExperienceCard.module.css";
import ListDescription from "../ListDescription";

const ExperienceCard: React.FC = () => (
  <div className={styles.experienceMain}>
    <div className={styles.experienceTitle}>Let's Build a Dungeon</div>
    <Image
      className={styles.experiencePhoto}
      src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2365790/capsule_616x353.jpg?t=1740116300"
    />
    <div className={styles.experienceProjDesc}>Game Developer Simulator</div>
    <div className={styles.experienceContriCard}>
      {/* <div>
        <span className={styles.highlight}>Roles: </span>Core Software Engineer,
        Network Engineer
      </div>
      <div className={styles.highlight}>Contributions:</div>
      <div>
        - Worked on the main engine architecture alongside other core engineers
        <br></br> - Coordinated with Microsoft to integrate PlayFab and Azure
        into the engine, enabling online multiplayer
        <br></br> - Authentication/authorization system
        <br></br> - CI/CD system
        <br></br> - Twitch integration
        <br></br> - Managed steamworks administration -- tracked for steam keys,
        manage users access, packaged and upload builds, managed the branches
        <br></br> - Helped to onboard new programmers and acted as a technical
        template for features such as UI
      </div>
    </div> */}
      <ListDescription />
      <Tags />
    </div>
  </div>
);

export default ExperienceCard;
