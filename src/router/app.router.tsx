import { Navigate, Route, Routes } from "react-router-dom";
import { MenuOption } from "../header/header";
import { HomePage } from "../pages/home/home.page";
import { RegisterPage } from "../pages/register/register.page";

type AppRouterProps = {
  menuOptions: MenuOption[];
};
export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage></HomePage>}></Route>
      <Route path={menuOptions[0].path} element={<HomePage></HomePage>}></Route>
      {/*<Route path={menuOptions[1].path} element={<Gallery></Gallery>}></Route>
      <Route path={menuOptions[2].path} element={<NewScrub></NewScrub>}></Route>
      <Route path={"/details"} element={<Details></Details>}></Route> */}
      <Route
        path={menuOptions[3].path}
        element={<RegisterPage></RegisterPage>}
      ></Route>

      <Route
        path={"*"}
        element={<Navigate to={"/home"} replace={true} />}
      ></Route>
    </Routes>
  );
}