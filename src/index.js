import React from 'react';
import './style.css';
import App from './components/App';
import { hydrate, render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
serviceWorker.unregister();