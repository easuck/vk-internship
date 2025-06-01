import type { IUser } from "../models/IUser";
import axios from "./axios";

export async function getUsers(): Promise<IUser[]>{
    const response = await axios.get('/users');
    return response.data;
}
