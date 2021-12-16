import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import './index.scss'
import "./helper.scss";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import styled from "styled-components";

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <HashRouter>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*" >
            <NoMatch />
          </Route>
        </Switch>
      </HashRouter>
    </AppWrapper>
  );
}
function NoMatch() {
  return <div>页面不存在，请输入正地址！</div>
}


export default App;