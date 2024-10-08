import axios from "axios";
import { token } from "../utils";
import { Login, User } from "../types";
import { api } from ".";

export async function auth() {
  const res = await axios.get<User | null>(api + "/auth", {
    headers: token(),
  });

  return res.data;
}

export async function login(data: Login) : Promise<{token: string}> {
  const res = await axios.post(api + "/auth/login", data);
  return res.data;
}
