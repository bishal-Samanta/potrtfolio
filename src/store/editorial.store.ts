import {create } from "zustand";

type EditorialStoreTypes = {
    editorial: string[];
    setEditorial: (editorial: string[]) => void;
};

export const useEditorialStore = create<EditorialStoreTypes>((set) => ({
  editorial: [],
  setEditorial: (editorial) => set({ editorial }),
}));