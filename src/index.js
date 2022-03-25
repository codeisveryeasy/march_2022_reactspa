import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import RootComponent from './root/rootcomponent';

ReactDOM.render(
    <HashRouter>
        <RootComponent></RootComponent>
    </HashRouter>
        , 
                document.getElementById("spa"))