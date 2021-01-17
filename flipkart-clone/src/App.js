import React from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Cart from "./Cart";

import productList from "./assets/data.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductSection from "./ProductSection";
import { setProductList } from "./features/productSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const pro = () => dispatch(setProductList(productList));
  return (
    <div className="App">
      <header>
        <Header />
        <Router>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product/:id" children={<ProductSection />}></Route>
            <Route path="/">
              {productList.map((data) => (
                <Card
                  id={data.id}
                  name={data.name}
                  type={data.type}
                  price={data.price}
                  discountPercentage={data.discountPercent}
                  imgUrl={data.imgUrl}
                />
              ))}
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
