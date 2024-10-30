import axios from "axios";
import { api } from ".";
import { token } from "../utils";

export async function createAnalytic(name: string) {
    const res = await axios.post(`${api}/visite`, {name}, {
        headers: token()
    })

    return res.data
}