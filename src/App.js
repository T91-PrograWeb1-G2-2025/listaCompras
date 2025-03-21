import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaDeCompras from "./components/ListaDeCompras";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <div className="container mt-4">
        <h1 className="text-center">Lista de Compras</h1>
        <ListaDeCompras />
      </div>
    </div>
  );
}

export default App;
