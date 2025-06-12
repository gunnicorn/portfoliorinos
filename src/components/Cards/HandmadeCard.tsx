import {
  LinkedinOutlined,
  // GithubOutlined,
  // MailOutlined,
  // ReadFilled,
} from "@ant-design/icons";
import React from "react";
import styles from "./HandmadeCard.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const HandmadeCard: React.FC = () => (
  <div className={styles.handmadeMain}>
    <div className={styles.handmadeMain1}>
      <div className={styles.handmadeTitle}>Anggun Qistina</div>
      <div className={styles.handmadeDesc}>
        SOFTWARE ENGINEER | GAME DEVELOPER
      </div>
      <div className={styles.handmadeLokasi}>
        <FaMapMarkerAlt className={styles.handmadePin} />
        <div className={styles.handmadeDesc2}>Singapore</div>
      </div>
      <div className={styles.handmadeLokasi}>
        {" "}
        {/* <ReadFilled style={{ fontSize: 28 }} /> */}
        <FaGraduationCap className={styles.handmadePin} />
        <div className={styles.handmadeDesc2}>
          BSc in Computer Science and Game Design
        </div>
      </div>
    </div>
    <div className={styles.handmadeMain2}>
      <div className={styles.handmadeContact}>
        <LinkedinOutlined
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/anggun-qistina-nadimoh-42b139206/",
              "_blank"
            )
          }
          style={{ cursor: "pointer", fontSize: "35px" }}
        />
        {/* <MailOutlined
          onClick={() => window.open("mailto:your-email@example.com")}
          style={{ cursor: "pointer", fontSize: "35px" }}
        /> */}
        {/* <a
          href="https://www.linkedin.com/in/anggun-qistina-nadimoh-42b139206/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined style={{ fontSize: 35 }} />
        </a> */}
        {/* <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailOutlined style={{ fontSize: 35 }} />
        </a> */}
      </div>
    </div>
  </div>
);

export default HandmadeCard;
