import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import CatalogScreen from "./catalog";
import DetailsScreen from "./details";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact render={() => <Redirect to="/catalog" />} />
      <Route path="/catalog" component={CatalogScreen} />
      <Route
        path="/game/:gameId"
        render={({
          match: {
            params: { gameId }
          }
        }) => <DetailsScreen gameId={gameId} />}
      />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
