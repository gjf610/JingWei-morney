import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import './index.scss'
import "./helper.scss";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import { Tag } from "./views/Tag"
import styled from "styled-components";

const AppWrapper = styled.div`
  color: #333;
  max-width: 568px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <HashRouter>
        <Switch>
          <Route exact path="/tags" >
            <Tags />
          </Route>
          <Route exact path="/tags/:id" >
            <Tag />
          </Route>
          <Route exact path="/money" >
            <Money />
          </Route>
          <Route exact path="/statistics" >
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
  return <div>页面不存在，请输入正地址！！</div>
}


export default App;