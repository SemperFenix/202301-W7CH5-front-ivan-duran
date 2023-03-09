import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMembers } from "../hooks/use.members";
import { MembersRepo } from "../services/repository/members.repo";

export function Logout() {
  const repo = useMemo(() => new MembersRepo(), []);
  const navigate = useNavigate();
  const { logoutMember } = useMembers(repo);

  logoutMember();
  navigate("/home");

  return <></>;
}
