import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
  width?: number;
  height?: number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = 533,
  height = 300,
}) => {
  return (
    <div className="youtube-embed">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        style={{ border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
