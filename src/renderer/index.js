import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import { AppContainer } from 'react-hot-loader';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router history={hashHistory} routes={routes} />
    </AppContainer>,
    document.getElementById('app'));
};

render();
if (module.hot) { module.hot.accept(render); }
