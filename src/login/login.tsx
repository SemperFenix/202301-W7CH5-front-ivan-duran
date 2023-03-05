import { SyntheticEvent, useMemo } from "react";
import { useMembers } from "../hooks/use.members";
import { Member } from "../models/member.model";
import { MembersRepo } from "../services/repository/members.repo";

export function Login() {
  const repo = useMemo(() => new MembersRepo(), []);

  const { members, loginMember } = useMembers(repo);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formLogMember = document.querySelector("form") as HTMLFormElement;

    const logMember: Partial<Member> = {
      email: (formLogMember[0] as HTMLInputElement).value,
      password: (formLogMember[1] as HTMLInputElement).value,
    };
    loginMember(logMember);
    formLogMember.reset();
    console.log(members.loggedUser.token);
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
