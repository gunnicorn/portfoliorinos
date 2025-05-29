import React from 'react';
import { Card } from 'antd';
import ContactCard from './ContactCard';

const App: React.FC = () => (
  <Card style={{ width: 750, fontSize: 25, justifyContent: 'center', alignItems: 'center'}}>
    <p>ANGGUN QISTINA</p>
    <p style={{fontSize: 16, fontFamily: 'Calibri'}}> GAME DEVELOPER | SOFTWARE ENGINEER</p>
    <div style={{fontSize: 18, alignSelf: 'right'}}>Contact Me!
        <ContactCard/>
    </div>
  </Card>
);

export default App;