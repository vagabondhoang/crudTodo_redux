import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import rootReducer from './reducers';
import './index.css';
import App from './App.jsx';
import Login from './authentication/Login';
import rootSaga from './sagas/index';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

const isLoggedIn = () => {
  const email = localStorage.getItem('email');
  if (email !== null) {
    return true;
  }
  return false;
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (isLoggedIn() ? <App /> : <Redirect to='/login' />)} />
        <Route path='/login'
          render={() => (isLoggedIn() ? <Redirect to="/" /> : <Login />)}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);


registerServiceWorker();
