import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
