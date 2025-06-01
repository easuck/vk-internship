import axios from "./axios";

export async function getUsers({pageParam = 1}){
    const res = await axios.get(`/users`, {
        params: {
          _page: pageParam,
          _per_page: 25,
      }});
      return {
          data: res.data.data,
          next: res.data.next,
          last: res.data.last
        };
}

export async function addUser(data: any){
    const response = await axios.post('/users', data);
    return response.data;
}
