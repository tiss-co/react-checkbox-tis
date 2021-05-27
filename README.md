# react-checkbox-tis

> 

[![NPM](https://img.shields.io/npm/v/react-checkbox-tis.svg)](https://www.npmjs.com/package/react-checkbox-tis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![react-checkbox-tis](https://user-images.githubusercontent.com/76048512/119789055-f1e56e80-bee7-11eb-974f-68aac3c50032.gif)

## Install

```bash
npm i react-checkbox-tis
```
or
```bash
yarn add react-checkbox-tis
```

## Usage

```jsx
import React from 'react';

import { Checkbox, labelPosition } from 'react-checkbox-tis';
import 'react-checkbox-tis/dist/index.css';

const App = () => {
  return (
      <Checkbox
        className='Checkbox'
        onChange={(e, checked) => console.log(checked)}
        label='Remember me'
        color='#0085fe'
        backgroundColor='#0085fecc'
        labelPosition={labelPosition.start}
        darkMode={false}
      />
  );
};

export default App;
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
