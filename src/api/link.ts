import axios from "axios";
import { api } from ".";
import { token } from "../utils";

export async function getLink<T = any>(id: string = "all") {
  const res = await axios.get<T>(`${api}/get/${id}`, {
    headers: token(),
  });

  return res.data;
}

export async function createLink(data: {
  website?: string;
  tag: { name: string }[];
}) {
  const res = await axios.post(`${api}`, data, {
    headers: token()
  })

  return res.data
}
