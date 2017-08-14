import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

<BaseLayout />


, document.getElementById('root'));
registerServiceWorker();
