import React from "react";
import { Anchor } from "antd";

const PageAnchor: React.FC = () => (
  <>
    <div>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: "home",
            href: "#home",
            title: "home",
          },
          {
            key: "about",
            href: "#about",
            title: "about",
          },
          {
            key: "experience",
            href: "#experience",
            title: "experience",
          },
          {
            key: "projects",
            href: "#projects",
            title: "projects",
          },
        ]}
      />
    </div>
    <div>
      <div
        id="home"
        style={{
          width: "100vw",
          textAlign: "left",
          background: "rgba(0,255,0,0.02)",
        }}
      />
      <div
        id="about"
        style={{
          width: "100vw",
          textAlign: "left",
          background: "rgba(0,255,0,0.02)",
        }}
      />
      <div
        id="experience"
        style={{
          width: "100vw",
          textAlign: "left",
          background: "rgba(0,0,255,0.02)",
        }}
      />
      <div
        id="projects"
        style={{
          width: "100vw",
          textAlign: "left",
          background: "#FFFBE9",
        }}
      />
    </div>
  </>
);

export default PageAnchor;
