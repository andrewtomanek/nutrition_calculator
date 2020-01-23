import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./auth/Auth";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import GlobalStyle from "./theme/globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
