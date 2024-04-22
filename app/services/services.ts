import axios from "axios";

const URL_BASE = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = async () => {
    const url: string = URL_BASE + "/users";
    console.log(URL_BASE)
    try {
        return axios.get(url)
            .then((res:  any) => {
                console.log("res", res);
                return res;
            })
    } catch (error){
        console.error(error);
    }
}