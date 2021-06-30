// import react router dom element
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// import component
import Home from "./Component/Home";
import AddToCart from "./Component/AddToCart/AddToCart";
import AddNewProduct from "./Component/AddNewProduct/AddNewProduct";
import UpdateProduct from "./Component/UpdateProduct/UpdateProduct";
import Test from "./Test/Test";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/update-product">
          <UpdateProduct />
        </Route>
        <Route path="/create-product">
          <AddNewProduct />
        </Route>
        <Route path="/add-to-cart">
          <AddToCart />
        </Route> */}
        <Route path="/home">
        <Test/>
        </Route>
        <Route path="/test">
          <Test/>
        </Route>
        <Route exact path="/">
        <Test/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
