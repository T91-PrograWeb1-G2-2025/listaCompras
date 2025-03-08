import { useState, useEffect } from "react";

function useListaDeCompras() {

  // Función para obtener los datos del localStorage o devolver una lista vacía si no hay nada.
  const getStoredItems = () => {
    const storedItems = localStorage.getItem("listaDeCompras");
    return storedItems ? JSON.parse(storedItems) : [];
  };

  const [items, setItems] = useState(getStoredItems());
  const [newItem, setNewItem] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [editText, setEditText] = useState("");

  // Guardar los datos en el localStorage cada vez que cambian los items.
  useEffect(() => {
    localStorage.setItem("listaDeCompras", JSON.stringify(items));
  }, [items]);

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
