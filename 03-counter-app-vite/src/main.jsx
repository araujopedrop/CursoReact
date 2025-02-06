import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorldApp from './HelloWorldApp'
import {FirstApp} from './FirstApp';

import './styles.css'

/*
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
);
*/

// Con props
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola!, soy Pedro Araujo" subtitle="12345" subtitle2={123}/>
    </React.StrictMode>
);