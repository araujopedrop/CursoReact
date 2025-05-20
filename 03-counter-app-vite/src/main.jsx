import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorldApp from './HelloWorldApp'
import {CounterApp} from './CounterApp';

import { FirstApp } from './FirstApp';

import './styles.css'

/*
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
);
*/

// Con props
/*
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp subtitle="12345" subtitle2={123}/>
    </React.StrictMode>
);
*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={123}/>
        {/*<FirstApp title='Hola, Soy Vegeta' subtitle='Hola, soy Goku'/> */}
    </React.StrictMode>
);