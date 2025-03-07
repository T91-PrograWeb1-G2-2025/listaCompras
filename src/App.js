import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaDeCompras from "./components/ListaDeCompras";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Lista de Compras</h1>
      <ListaDeCompras />
    </div>
  );
}

export default App;
