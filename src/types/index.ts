export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Code = "t" | "b";

export type Register = {
  code: Code[];
  name: string;
  avatar: string;
};

export type Login = {
  name: string;
  code: Code[];
};
