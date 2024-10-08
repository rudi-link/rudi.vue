import axios from "axios";
import { getLocation, token } from "../utils";
import { api } from ".";

export async function alert() {
    const location = getLocation()

    const res = await axios.post(api+'/alert', location, {
        headers: token()
    })

    return res.data
}