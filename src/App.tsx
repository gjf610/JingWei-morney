import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import './index.scss'
import "./helper.scss";
import Layout from "./components/Layout";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";

function App() {
  return (
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
  );
}
function NoMatch() {
  return <div>页面不存在，请输入正地址！</div>
}


export default App;