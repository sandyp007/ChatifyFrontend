import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App'; 
import './main.scss';
import {Provider} from 'react-redux';
import store from './store/index.js';

import { positions, transitions, Provider as AlertProvider} from 'react-alert';
import alertTemplate from 'react-alert-template-basic';

const options = {
  timeout : 5000,
  positions: positions.BOTTOM_CENTER,
  transitions : transitions.SCALE
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


  root.render(
  <Provider store={store}>
     <AlertProvider template={alertTemplate} {...options} >   
      <App />   
     </AlertProvider>
    </Provider>
    ,
 ); 

 