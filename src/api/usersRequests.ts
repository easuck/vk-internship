import type { IUser } from "../models/IUser";
import axios from "./axios";

export async function getUsers(page: number): Promise<any>{
    const response = await axios.get('/users', {params: {_page: 1, _per_page: 25}});
    return response.data;
}

export async function addUser(data: any){
    const response = await axios.post('/users', data);
    return response.data;
}
