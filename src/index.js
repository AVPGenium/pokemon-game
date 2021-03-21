import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const MainApp = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));
