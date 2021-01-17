import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import data from "./assets/data.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductSection from "./ProductSection";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Router>
          <Switch>
            <Route path="/product">
              <ProductSection product={data} />
            </Route>
            <Route path="/">
              <Card
                name={data.name}
                type={data.type}
                price={data.price}
                discountPercentage={data.discountPercent}
                imgUrl={data.imgUrl}
              />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
