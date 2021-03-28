import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import './index.css';
import App from './App';

const MainApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));
