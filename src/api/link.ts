import axios from "axios";
import { api } from ".";
import { token } from "../utils";

export async function getLink(id: string = "all") {
  const res = await axios.get(`${api}/get/${id}`, {
    headers: token(),
  });

  return res.data;
}
