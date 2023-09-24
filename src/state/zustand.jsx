import { create } from "zustand";

export const updateQuantity = create((set) => ({
  cart: [],
  addItem: (item) => {
    set((state) => ({
      cart: [{ quantity: item }],
    }));
  },
  deleteItems: (itemIndex) => {
    set((state) => ({
      cart: state.cart.filter((_, index) => index !== itemIndex),
    }));
  },
}));

export default updateQuantity;
