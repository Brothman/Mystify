import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './components/Routes.jsx';
//used for webpack to bundle CSS files
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const dog ="test two";
    ReactDOM.render(<Routes />, root);
})