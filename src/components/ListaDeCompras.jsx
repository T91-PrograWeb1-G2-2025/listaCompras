import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useListaDeCompras from "../hooks/useListaDeCompras"; 

function ListaDeCompras() {
  const {
    items,
    setNewItem,
    newItem,
    editItemId,
    setEditItemId,
    editText,
    setEditText,
    addItem,
    editItem,
    deleteItem,
    toggleItem,
  } = useListaDeCompras();

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
          <li key={item.id} className={`list-group-item d-flex justify-content-between align-items-center`}>
            <div className="flex-grow-1">
              {editItemId === item.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="form-control"
                />
              ) : (
                <span>{item.name}</span>
              )}
            </div>
            <div className="btn-group">
              {editItemId === item.id ? (
                <button onClick={() => editItem(item.id)} className="btn btn-success btn-sm">Guardar</button>
              ) : (
                <>
                  <button onClick={() => toggleItem(item.id)} className="btn btn-sm btn-success">
                    {item.purchased ? "Desmarcar" : "Comprar"}
                  </button>
                  <button onClick={() => setEditItemId(item.id) || setEditText(item.name)} className="btn btn-sm btn-warning">
                    Editar
                  </button>
                  <button onClick={() => deleteItem(item.id)} className="btn btn-sm btn-danger">
                    Eliminar
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeCompras;
