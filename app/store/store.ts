import { create } from "zustand";
import {Albums, SelectedAlbum, Users} from "@/app/interfaces/interface";

export const useUsersStore = create((set) => ({
    users: [] as Users[],
    setUsers: (users: Users[]) => set({ users }),
}));

export const useAlbumsStore = create((set) => ({
    albums: [] as Albums[],
    setAlbums: (albums: Albums[]) => set({ albums }),
}));

export const useSelectedAlbumStore = create((set) => ({
    selectedAlbum: {} as SelectedAlbum,
    setSelectedAlbum: (selectedAlbum: SelectedAlbum) => set({ selectedAlbum }),
}));