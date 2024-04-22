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