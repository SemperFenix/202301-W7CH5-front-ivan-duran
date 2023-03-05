import { SyntheticEvent, useMemo } from "react";
import { useMembers } from "../hooks/use.members";
import { Member } from "../models/member.model";
import { MembersRepo } from "../services/repository/members.repo";
import "./register.scss";

export function Register() {
  const repo = useMemo(() => new MembersRepo(), []);

  const { createMember } = useMembers(repo);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formNewMember = document.querySelector("form") as HTMLFormElement;

    const newMember: Partial<Member> = {
      name: (formNewMember[0] as HTMLInputElement).value,
      lastName: (formNewMember[1] as HTMLInputElement).value,
      email: (formNewMember[2] as HTMLInputElement).value,
      password: (formNewMember[3] as HTMLInputElement).value,
      age: Number((formNewMember[4] as HTMLInputElement).value),
      religion: (formNewMember[5] as HTMLInputElement).value,
    };
    createMember(newMember);
    formNewMember.reset();
  };

  return (
    <form className="register-form" data-testid="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className="register-form__field"
        name="name"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="register-form__field"
        name="lastName"
      />
      <input
        type="text"
        placeholder="Email"
        className="register-form__field"
        name="email"
      />
      <input
        type="text"
        placeholder="Password"
        className="register-form__field"
        name="password"
      />
      <input
        type="text"
        placeholder="Age"
        className="register-form__field"
        name="age"
      />
      <input
        type="text"
        placeholder="Religion"
        className="register-form__field"
        name="religion"
      />
      <button>Register</button>
    </form>
  );
}
