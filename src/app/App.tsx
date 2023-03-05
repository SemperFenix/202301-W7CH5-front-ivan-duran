import React from "react";
import "./App.scss";
import { Header, menuOptions } from "../header/header";
import { AppRouter } from "../router/app.router";

function App() {
  return (
    <>
      <Header />
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </>
  );
}

export default App;
