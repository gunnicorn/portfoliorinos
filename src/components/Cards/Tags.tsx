import React from "react";
import { Flex, Tag } from "antd";
import styles from "./Tags.module.css";

const App: React.FC = () => (
  <>
    {/* <Divider orientation="left">Tags</Divider> */}
    <div className={styles.tagsMain}>
      <Flex gap="4px 0" wrap>
        <Tag color="magenta">C#</Tag>
        <Tag color="red">.NET Technologies</Tag>
        <Tag color="volcano">TCP/IP</Tag>
        <Tag color="">Steamworks</Tag>
        <Tag color="cyan">Jenkins</Tag>
        <Tag color="blue">Azure Cosmos DB</Tag>
        <Tag color="geekblue">Azure PlayFab</Tag>
        <Tag color="purple">Twitch Integration</Tag>
      </Flex>
    </div>
  </>
);

export default App;
