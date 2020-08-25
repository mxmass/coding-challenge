import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";

import { productsRoutes } from "./routes";
import GlobalStyle from "./theme/globalStyle";

const AppWrapper = styled.main`
  margin: 0 auto;
`;

const productRouter = productsRoutes.map((route, index) => (
  <Route
    path={route.path}
    component={route.component}
    name={route.name}
    key={index}
    exact={route.exact}
  />
));

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Router>
          <Switch>{productRouter}</Switch>
        </Router>
      </AppWrapper>
    </>
  );
};

export default App;
