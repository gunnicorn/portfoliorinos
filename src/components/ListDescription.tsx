import React from "react";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

// Define common font properties for all text
const commonFontFamily =
  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif';
const commonFontWeight = "normal"; // Default to normal, can be overridden for labels

// Define specific font styles for labels and content
const labelFontProps = {
  fontFamily: commonFontFamily,
  color: "#268bf0", // Label color
};

const contentFontProps = {
  fontFamily: commonFontFamily,
  fontWeight: commonFontWeight, // Content is normal weight
  fontSize: "15px",
};

const listItemStyle = {
  marginBottom: "8px", // Adjust this value to control vertical spacing between list items
};

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: null, // Set label to null so Ant Design doesn't render it separately
    children: (
      // Manually render "Roles: " and its value on the same line
      <div style={{ display: "flex", alignItems: "baseline" }}>
        {/* Apply label styles to "Roles:" */}
        <span style={{ ...labelFontProps, marginRight: "8px" }}>Roles:</span>
        {/* Apply content styles to the value */}
        <span style={{ ...contentFontProps, flexGrow: 1 }}>
          Core Software Engineer, Network Engineer, Gameplay Programmer
        </span>
      </div>
    ),
  },
  {
    key: "2",
    label: null,
    children: (
      <>
        {/* Apply content styles to the ul elements and remove default margins */}
        <ul
          style={{
            ...contentFontProps,
            marginTop: "0px",
            paddingLeft: "0px",
            listStyleType: "none",
          }}
        >
          <li style={listItemStyle}>
            Worked on the main engine architecture alongside other core
            engineers
          </li>
          <li style={listItemStyle}>
            Coordinated with Microsoft to integrate PlayFab and Azure into the
            engine, enabling online multiplayer
          </li>
          <li style={listItemStyle}>
            Managed steamworks administration -- tracked for steam keys, manage
            users access, packaged and upload builds, managed the branches
          </li>
        </ul>
      </>
    ),
  },
];

const App: React.FC = () => (
  <>
    {/* Add a style block for the CSS override */}
    <style>
      {`
      /* Target the individual description items within our custom class */
      .my-custom-descriptions .ant-descriptions-item {
        padding-bottom: 10px !important; /* Adjust this value as needed */
      }
      `}
    </style>
    <Descriptions
      items={items}
      column={1} // Ensures each item takes a full row
      layout="vertical" // Default layout: label above content (applies to item 2)
      labelStyle={labelFontProps} // Ensure all label styles are applied here
      contentStyle={contentFontProps} // Ensure all content styles are applied here
      className="my-custom-descriptions" // Add a custom class name
    />
  </>
);

export default App;
