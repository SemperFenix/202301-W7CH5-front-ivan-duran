import { Member } from "../../models/member.model";

export interface Repo<T> {
  readAll(): Promise<T>;
  readOne(id: Member["id"]): Promise<T>;
  create(info: Partial<Member>, action: "register" | "login"): Promise<T>;
  update(info: Partial<Member>, token: string, action: string): Promise<T>;
  delete(id: Member["id"], token: string): Promise<void>;
}
