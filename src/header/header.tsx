import { useSelector } from "react-redux";
import { NavMenu } from "../nav.menu/nav.menu";
import { RootState } from "../store/store";
import "./header.scss";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Users", path: "/users" },
  { label: "My Profile", path: "/profile" },
  { label: "Register", path: "/register" },
  { label: "Login", path: "/login" },
];

export const menuOptions2: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Users", path: "/users" },
  { label: "My Profile", path: "/profile" },
  { label: "Logout", path: "/logout" },
];

export function Header() {
  const members = useSelector((state: RootState) => state.members);
  return (
    <header className="header">
      <h1 className="header__title">ISDI Thirti</h1>
      <NavMenu options={members.loggedUser ? menuOptions2 : menuOptions} />
    </header>
  );
}
