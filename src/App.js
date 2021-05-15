import React, { Suspense } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import "./App.css";

const NewsComponent = React.lazy(() => import("./Component/News/News"));

const AboutComponent = React.lazy(() => import("./Component/About/About"));

function App() {
  return (
    <Router basename="/">
      <Suspense fallback={<div>Loading.....</div>}>
        <Switch>
          <Route path="/news">
            <NewsComponent />
          </Route>

          <Route path="/about">
            <AboutComponent />
          </Route>

          <Route path="/error">
            <div>Something went wrong....</div>
          </Route>

          <Route>
            <Redirect to="/news" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
