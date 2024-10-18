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

export type TLink = {
  id: string;
  website: string;
  checked: boolean;
  tag: TTag[];
};

export type TTag = {
  id: string;
  name: string;
};


export type TLinkDt = {
  id: string;
  website: string;
  checked: boolean;
  tag: TTagDt[];
};

export type TTagDt = {
  id: number;
  name: string;
  click: {id: string, createdAt: Date}[]
};
