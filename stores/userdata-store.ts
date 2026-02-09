import { create } from 'zustand';
interface cartItems {
  id: number;
  Image: string;
  Title: string;
  price: number;
}

interface CustomerState {
  data: cartItems[];
  
  // Actions
  deleteItems: (ids: number[]) => void;
  addItems: (items: cartItems) => void;
  updateItems: (items: cartItems) => void;
}

export const useCustomerStore = create<CustomerState>((set) => ({
  data: [],
  
  deleteItems: (ids) =>
    set((state) => ({
      data: state.data.filter((items) => !ids.includes(items.id)),
    })),

  addItems: (items) =>
    set((state) => ({
      data: [items, ...state.data],
    })),

  updateItems: (items) =>
    set((state) => ({
      data: state.data.map((i) => (i.id === items.id ? items : i)),
    })),
}));