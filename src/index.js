import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './store/reducers/codeEditor';
import GlobalStyle from './theme/globalStyle';
import Theme from './theme/theme';

const root = document.getElementById('root');

const rootReducer = combineReducers({
  codeEditor: reducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  root);