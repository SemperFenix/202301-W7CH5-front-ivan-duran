import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Member } from "../models/member.model";
import "./card.scss";

interface CardData {
  info: Member;
  updateFriend: (info: Partial<Member>, token: string, action: string) => void;
  loggedUser: Member;
}

export function Card({ info, updateFriend, loggedUser }: CardData) {
  const handleAdd = (ev: SyntheticEvent) => {
    ev.stopPropagation();
    console.log("updating", loggedUser.token);

    if (!loggedUser.token) return;
    updateFriend(info, loggedUser.token, "add_friend");
  };

  const handleDelete = (ev: SyntheticEvent) => {
    ev.stopPropagation();
    if (!loggedUser.token) return;
    updateFriend(info, loggedUser.token, "remove_friend");
  };

  return (
    // Commented code for future use
    <>
      <div className="member">
        <div className="member__info">
          <img src={info.img} alt={info.name} width="150" />
          <p>Name: {info.name}</p>
          <p>Age: {info.age}</p>
          <p>Religion: {info.religion}</p>
        </div>
        <div className="friend__actions">
          <Link to={"/users"}>
            <button onClick={handleDelete}>Delete friend</button>
          </Link>
          <Link to={"/users"}>
            <button onClick={handleAdd}>Add friend</button>
          </Link>
        </div>
      </div>
    </>
  );
}
