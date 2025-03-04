import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ListaDeCompras() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  //agrega un artículo
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), name: newItem, purchased: false }]);
      setNewItem("");
    }
  };

  // editar un artículo
  const [editItemId, setEditItemId] = useState(null);
  const [editText, setEditText] = useState("");

  const editItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, name: editText } : item
    ));
    setEditItemId(null);
  };

  // elimina un artículo
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // desmarcar como comprado
  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  return (
    <div className="container mt-4">

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar artículo"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem} className="btn btn-primary mt-2">Agregar</button>
      </div>

      <ul className="list-group mt-3">
        {items.map(item => (
          <li key={item.id} className={`list-group-item d-flex justify-content-between align-items-center ${item.purchased ? "list-group-item-success" : ""}`}>
            {editItemId === item.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span>{item.name}</span>
            )}

            {editItemId === item.id ? (
              <button onClick={() => editItem(item.id)} className="btn btn-success btn-sm">Guardar</button>
            ) : (
              <>
                <button onClick={() => toggleItem(item.id)} className="btn btn-sm btn-success me-2">
                  {item.purchased ? "Desmarcar" : "Comprar"}
                </button>
                <button onClick={() => setEditItemId(item.id) || setEditText(item.name)} className="btn btn-sm btn-warning me-2">
                  Editar
                </button>
                <button onClick={() => deleteItem(item.id)} className="btn btn-sm btn-danger">Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeCompras;
