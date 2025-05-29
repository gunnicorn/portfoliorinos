// picture and words and tags

import React from 'react';
import { Image } from 'antd';
import Tags from './Tags';

const ExperienceCard: React.FC = () => (
  <div><Image
    width={400}
    src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2365790/capsule_616x353.jpg?t=1740116300"
  />
  Let's Build a Dungeon
  <p></p>blablablagvladlbaldgajdioauiwd
  <p></p><Tags />
  </div>
);

export default ExperienceCard;