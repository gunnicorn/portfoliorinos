import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { Card, Spin } from "antd";
import styles from "./VideoCard.module.css";
interface VideoPlayerProps {
  videoId: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoId,
  width = 640,
  height = 390,
  autoplay = false,
}) => {
  const [loading, setLoading] = React.useState(true);

  const opts: YouTubeProps["opts"] = {
    height: height.toString(),
    width: width.toString(),
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  const onReady = () => {
    setLoading(false);
  };

  return (
    <Card bodyStyle={{ padding: 0, borderRadius: "0px" }}>
      {loading && <Spin size="large" />}
      <div className={styles.videoContainer}>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          iframeClassName={styles["youtube-iframe-no-border"]}
        />
      </div>
    </Card>
  );
};

// Usage

export default VideoPlayer;
