import axios from "axios";

const URL_BASE = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = async () => {
    const url: string = URL_BASE + "/users";
    try {
        return axios.get(url)
            .then((res:  any) => {
                return res.data;
            })
    } catch (error){
        console.error(error);
    }
}

export const getAlbums = async () => {
    const url: string = URL_BASE + "/albums";
    try {
        return axios.get(url)
            .then((res:  any) => {
                return res.data;
            })
    } catch (error){
        console.error(error);
    }
}

export const getAlbumImages = async (album: number | string) => {
    const url: string = URL_BASE + `/albums/${album}/photos`;
    try {
        return axios.get(url)
            .then((res:  any) => {
                return res.data;
            })
    } catch (error){
        console.error(error);
    }
}