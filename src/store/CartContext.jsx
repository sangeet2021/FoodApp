// import { createContext, useReducer, useState } from "react";

// const CartContext = createContext({
//     items: [],
//     addItems: (item) => {},
//     removeItem: (id) => {},
// });

// const cartReducer = (state, action) => {
//     if (action.type === 'ADD_ITEM'){
//         // checking if the item already exists
//         const existingCartItemIndex = state.items.findIndex(
//             (item) => item.id === action.item.id);
// //          copying old items in new array so they don't mutate
//             const updatedItems = [...state.items]

//             if(existingCartItemIndex > -1){
//                 const existingItem = state.items[existingCartItemIndex]
//                 const updatedItem = {
//                     ...existingItem,
//                     quantity: existingItem.quantity + 1
//                 }
//                 updatedItems[existingCartItemIndex] = updatedItem
//             }else{
//                 updatedItems.push({...action.item, quantity: 1});
//             }

//             return {...state, items: updatedItems};
//     }

//     if(action.type === "REMOVE_ITEM"){
//         // it will remove the item from the staet
//     }

//     return state;
// }

// const CartContextProvider = ({children}) => {
//     useReducer(cartReducer, {items: []});

//     return <CartContext.Provider>{children}</CartContext.Provider>
// }

// export default CartContext;

import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // checking if the item already exists
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    // spreading items so they don't mutate
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // checking if the item already exists
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  } else {
  }

  return state;
};

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
