import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage";
import Credit from "./components/Credit";
import Listen from "./components/Listen/Listen";
import Watch from "./components/Watch/Watch";
import Store from "./components/Store";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import { Provider } from "react-redux";
import store from "./store";

// import { AppProvider } from "@shopify/polaris";
// import { Layout } from "@shopify/polaris";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "@shopify/polaris/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="frame">
          {/* <AppProvider> */}
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/credits" component={Credit} />
            <Route exact path="/listen" component={Listen} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/watch" component={Watch} />
            <Route exact path="/test" component={Test} />
            <Route component={NotFound} />
            {/* </AppProvider> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
