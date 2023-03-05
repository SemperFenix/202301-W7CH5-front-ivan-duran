import { NavMenu } from "../nav.menu/nav.menu";
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

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">ISDI Thirti</h1>
      <NavMenu options={menuOptions} />
    </header>
  );
}
