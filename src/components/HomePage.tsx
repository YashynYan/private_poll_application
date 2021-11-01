import React, { useContext } from "react";
import { AuthContext } from "../context/ApplicationContext";

function HomePage() {

  const {logOut} = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={logOut}>Sign Out</button>
    </div>
  );
}

export default HomePage;
