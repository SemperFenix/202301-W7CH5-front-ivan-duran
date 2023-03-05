import { useMemo } from "react";
import { Card } from "../card/card";
import { useMembers } from "../hooks/use.members";
import { Member } from "../models/member.model";
import { MembersRepo } from "../services/repository/members.repo";
import "./users.scss";

export function Users() {
  const repo = useMemo(() => new MembersRepo(), []);

  const { members, updateMember } = useMembers(repo);
  return (
    <>
      <div className="members">
        {members.members.map((item: Member) => (
          <Card
            info={item}
            updateFriend={updateMember}
            loggedUser={members.loggedUser}
            key={item.id}
          ></Card>
        ))}
      </div>
    </>
  );
}
