import React, { useContext, useEffect } from "react";
import "./App.css";
import { AuthForm } from "./components/AuthForm";
import { Route, Switch, useHistory } from "react-router-dom";
import HomePage from "./components/HomePage";
import { AuthContext } from "./context/ApplicationContext";

function App() {
  const history = useHistory();
  const {currentUser, loading} = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser);
    if (!currentUser && history.location.pathname !== "/signin") {
      history.push("/signin");
    } else if (currentUser && history.location.pathname === "/signin") {
      history.push("/home");
    }
  }, [currentUser, history]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/signin" component={AuthForm} />
    </Switch>
  );
}

export default App;
