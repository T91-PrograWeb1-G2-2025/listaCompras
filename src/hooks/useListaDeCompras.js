import { useState } from "react";

function useListaDeCompras() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [editText, setEditText] = useState("");

  // Agregar un artículo
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), name: newItem, purchased: false }]);
      setNewItem("");
    }
  };

  // Editar un artículo
  const editItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, name: editText } : item
    ));
    setEditItemId(null);
  };

  // Eliminar un artículo
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Marcar/desmarcar como comprado
  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  return {
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
  };
}

export default useListaDeCompras;
