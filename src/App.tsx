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
function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>
  );
}

export default App;