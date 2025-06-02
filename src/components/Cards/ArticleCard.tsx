import React from "react";
import LeftArticleCard from "./LeftArticleCard";
import RightArticleCard from "./RightArticleCard";
import styles from "./ArticleCard.module.css";
const ArticleCard: React.FC = () => (
  <div>
    <div className={styles.mainTitle}>Academic Projects</div>
    <LeftArticleCard />
    <RightArticleCard />
  </div>
);

export default ArticleCard;
