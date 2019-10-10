import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage";
import Credit from "./components/Credit";
import Listen from "./components/Listen/Listen";
import Watch from "./components/Watch/Watch";

import { AppProvider } from "@shopify/polaris";
import { Layout } from "@shopify/polaris";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "@shopify/polaris/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="frame">
        <Layout>
          <AppProvider>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/credits" component={Credit} />
            <Route exact path="/listen" component={Listen} />
            <Route exact path="/watch" component={Watch} />
          </AppProvider>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
