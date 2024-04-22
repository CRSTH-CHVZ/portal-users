import { create } from "zustand";

type Users = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
    }
    geo: {
        lat: string,
        lng: string,
    }
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    },
    setUsers: (users: Users[]) => void;
}

//generate user store with Users type as array of objects
export const useUsersStore = create((set) => ({
    users: [] as Users[],
    setUsers: (users: Users[]) => set({ users }),
}));