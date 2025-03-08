import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useListaDeCompras from "../hooks/useListaDeCompras";
import Swal from "sweetalert2";

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

  // Función para agregar con validación de campo vacío usando SweetAlert2
  const handleAddItem = () => {
    if (newItem.trim() === "") {
      Swal.fire({
        title: "Campo Vacío",
        text: "Por favor, ingresa el nombre del artículo.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Entendido",
        background: "#f9f9f9",
        timer: 2500,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        }
      });
    } else {
      addItem();
    }
  };

  // Función para eliminar con SweetAlert2
  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás recuperar este artículo.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id);
        Swal.fire("Eliminado!", "El artículo ha sido eliminado.", "success");
      }
    });
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
        <button onClick={handleAddItem} className="btn btn-primary mt-2">Agregar</button>
      </div>

      <ul className="list-group mt-3">
        {items.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            
            {/* Editar el nombre del artículo */}
            <div className="flex-grow-1">
              {editItemId === item.id ? (
                <input
                  type="text"
                  className="form-control"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span>{item.name}</span>
              )}
            </div>

            {/* Grupo de botones */}
            <div className="btn-group">
              {editItemId === item.id ? (
                <button onClick={() => editItem(item.id)} className="btn btn-success btn-sm">Guardar</button>
              ) : (
                <>
                  <button onClick={() => setEditItemId(item.id) || setEditText(item.name)} className="btn btn-sm btn-warning">
                    Editar
                  </button>
                  <button onClick={() => toggleItem(item.id)} className="btn btn-sm btn-success">
                    {item.purchased ? "Comprado" : "Marcar como comprado"}
                  </button>
                  <button onClick={() => handleDeleteItem(item.id)} className="btn btn-sm btn-danger">
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
