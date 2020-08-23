import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import * as serviceWorker from './serviceWorker';
import { productsRoutes } from "./routes";
import { rootReducer as store } from './reducers';
import GlobalStyle from './theme/globalStyle';

const AppWrapper = styled.main`
  margin: 0 auto;
`

const history = createBrowserHistory();
const productRouter = productsRoutes.map((route, index) => (
  <Route
    path={route.path}
    component={route.component}
    name={route.name}
    key={index}
    exact={route.exact}
  />
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter history={history}>{productRouter}</BrowserRouter>
      </AppWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
