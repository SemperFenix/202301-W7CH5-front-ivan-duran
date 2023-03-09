import { SyntheticEvent, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMembers } from "../hooks/use.members";
import { Member } from "../models/member.model";
import { MembersRepo } from "../services/repository/members.repo";

export function Login() {
  const repo = useMemo(() => new MembersRepo(), []);
  const navigate = useNavigate();

  const { loginMember } = useMembers(repo);

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formLogMember = ev.currentTarget;

    const logMember: Partial<Member> = {
      email: (formLogMember[0] as HTMLInputElement).value,
      password: (formLogMember[1] as HTMLInputElement).value,
    };
    loginMember(logMember);
    formLogMember.reset();
    navigate("/users");
  };

  return (
    <form className="login-form" data-testid="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        className="login-form__field"
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        className="login-form__field"
        name="password"
      />

      <button type="submit">Login</button>
    </form>
  );
}
