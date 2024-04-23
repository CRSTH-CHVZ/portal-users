export type Users = {
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
    setUsers?: (users: Users[]) => void;
}

export type Albums = {
    userId: number,
    id: number,
    title: string,
    setAlbums?: (albums: Albums[]) => void;
}

export type SelectedAlbum = {
    userId: number,
    id: number,
    title: string,
    setSelectecAlbum?: (albums: SelectedAlbum[]) => void;
}

export type LinkProps = {
    text: string,
    path: string,
    album: Albums,
}

export type comments = {
    userId: number,
    id: number,
    title: string,
    body: string,
    setComments?: (comments: comments[]) => void;
}