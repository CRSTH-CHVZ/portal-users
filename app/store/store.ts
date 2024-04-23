import { create } from "zustand";
import {Albums, comments, SelectedAlbum, Users} from "@/app/interfaces/interface";

export const UseUsersStore = create((set) => ({
    users: [] as Users[],
    setUsers: (users: Users[]) => set({ users }),
}));

export const UseAlbumsStore = create((set) => ({
    albums: [] as Albums[],
    setAlbums: (albums: Albums[]) => set({ albums }),
}));

export const UseSelectedAlbumStore = create((set) => ({
    selectedAlbum: {} as SelectedAlbum,
    setSelectedAlbum: (selectedAlbum: SelectedAlbum) => set({ selectedAlbum }),
}));

export const UseCommentsStorage = create((set) => ({
    comments: [] as comments[],
    setComments: (comments: comments[]) => set({ comments }),
}));