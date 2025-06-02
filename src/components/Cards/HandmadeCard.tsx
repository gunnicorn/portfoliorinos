import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import React from "react";
import styles from "./HandmadeCard.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const HandmadeCard: React.FC = () => (
  <div className={styles.handmadeMain}>
    <div className={styles.handmadeMain1}>
      <div className={styles.handmadeTitle}>Anggun Qistina</div>
      <div className={styles.handmadeDesc}>
        GAME DEVELOPER | SOFTWARE ENGINEER
      </div>
      <div className={styles.handmadeLokasi}>
        <FaMapMarkerAlt className={styles.handmadePin} />
        <div className={styles.handmadeDesc2}>Singapore</div>
      </div>
    </div>
    <div className={styles.handmadeMain2}>
      <div className={styles.handmadeContact}>
        <LinkedinOutlined style={{ fontSize: 35 }} />
        <GithubOutlined style={{ fontSize: 35 }} />
        <MailOutlined style={{ fontSize: 35 }} />
      </div>
    </div>
  </div>
);

export default HandmadeCard;
