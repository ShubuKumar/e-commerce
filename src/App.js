import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LoginPage from "./components/Login";
import CustomerSupportPage from "./components/Customersupportpage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/customersupport">
          <CustomerSupportPage/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
