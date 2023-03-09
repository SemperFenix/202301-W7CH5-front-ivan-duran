import { Member, ServerResp } from "../../models/member.model";
import { Repo } from "./repo.interface";

export class MembersRepo implements Repo<ServerResp> {
  constructor(
    public url: string = "https://w7ch5-ivan-duran.onrender.com/members"
  ) {}

  async readAll(): Promise<ServerResp> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    const members = await resp.json();
    return members;
  }

  async readOne(id: Member["id"]): Promise<ServerResp> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);

    const member = await resp.json();

    return member;
  }

  async update(
    info: Partial<Member>,
    token: string,
    action: string
  ): Promise<ServerResp> {
    const url = this.url + "/" + action;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  // Create no tiene que recibir el ID como parámetro, puesto que lo va a asignar el server.

  async create(
    info: Partial<Member>,
    action: "register" | "login"
  ): Promise<ServerResp> {
    const resp = await fetch(this.url + "/" + action, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);

    const data = await resp.json();
    return data;
  }

  async delete(id: Member["id"], token: string): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
  }
}
