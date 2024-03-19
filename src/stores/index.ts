import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface NamesState {
  names: string[];
  addName: (name: string) => void;
  removeName: (name: string) => void;
  updateName: (oldName: string, newName: string) => void;
}

// Utilizamos el middleware persist de Zustand para manejar la persistencia
const useNamesStore = create(
  persist<NamesState>(
    (set) => ({
      names: [],

      addName: (name) => set((state) => ({ names: [...state.names, name] })),

      removeName: (nameToRemove) =>
        set((state) => ({
          names: state.names.filter((name) => name !== nameToRemove),
        })),

      updateName: (oldName, newName) =>
        set((state) => ({
          names: state.names.map((name) => (name === oldName ? newName : name)),
        })),
    }),
    {
      name: 'names-storage', // nombre de la clave bajo la cual guardar en localStorage
    }
  )
);

export default useNamesStore;
