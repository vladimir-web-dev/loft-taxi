import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initStore } from './store';
import { theme } from 'loft-taxi-mui-theme';

import 'typeface-roboto';
import './index.css';

const store = initStore();

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </MuiThemeProvider>,   
    document.getElementById("root")
);
