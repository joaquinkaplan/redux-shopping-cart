import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.name,
        });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const clickedItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === clickedItem.id
      );
      if (existingItem) {
        existingItem.quantity--;
        state.totalQuantity--;
        state.totalPrice -= clickedItem.price;
        if (existingItem.quantity === 1) {
          state.itemsList = state.itemsList.filter(
            (item) => item.id !== existingItem.id
          );
        }
      }
    },
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

const cartActions = cartSlice.actions;
export { cartSlice, cartActions };
