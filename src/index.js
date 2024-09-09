import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

/**
 * Point d'entrée de l'application React.
 * 
 * Ce fichier configure le rendu de l'application en utilisant `ReactDOM` et fournit le store Redux à
 * l'ensemble de l'application à l'aide du composant `Provider` de `react-redux`. 
 * Le composant `App` est le composant racine qui définit les routes et la structure de l'application.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

