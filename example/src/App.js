import React from 'react';

import { Checkbox, labelPosition } from 'react-checkbox-tis';
import 'react-checkbox-tis/dist/index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='Title'>
        Checkbox Tis
      </div>
      <Checkbox
        className='Checkbox'
        onChange={(e, checked) => console.log(checked)}
        label='Remember me'
        color='#0085fe'
        backgroundColor='#0085fecc'
        labelPosition={labelPosition.start}
        darkMode={false}
      />
    </div>
  );
};

export default App;