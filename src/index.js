import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Window from './Window';

ReactDOM.render(<Window winId="test" />, document.getElementById('root'));
ReactDOM.render(<Window winId="test2" x="500" />, document.getElementById('root'));