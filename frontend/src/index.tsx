import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';
// TODO import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(
    <App />,
    document.getElementById('root'),
);

//TODO serviceWorker.register();
