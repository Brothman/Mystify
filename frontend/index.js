import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './components/Routes.jsx';
import configureStore from './store/store';
//used for webpack to bundle CSS files
import './styles.css';

const store = configureStore();

//REMOVE THE FOLLOWING LINE BEFORE I DEPLOY FOR PRODUCTION
window.getState = store.getState;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const dog ="test two";
    ReactDOM.render(<Routes store={store}/>, root);
});