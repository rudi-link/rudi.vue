import axios from "axios";
import { api } from ".";
import { token } from "../utils";
import { TAnalytic } from "../types";

export async function getAllAnalytic<T = any>() {
  const res = await axios.get<T>(`${api}/visite/all`, {
    headers: token(),
  });

  return res.data;
}

export async function getAnalytic(id?: string) {
  const res = await axios.get<TAnalytic>(`${api}/visite`, {
    headers: token(),
    params: {
      id
    }
  });

  return res.data;
}

export async function createAnalytic(name: string) {
    const res = await axios.post(`${api}/visite`, {name}, {
        headers: token()
    })

    return res.data
}