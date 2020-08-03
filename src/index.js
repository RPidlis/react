import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SamuraiJsApp from './App'


ReactDOM.render(<SamuraiJsApp/>, document.getElementById('root'));


serviceWorker.unregister();
