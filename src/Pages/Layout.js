import { Outlet, Link } from "react-router-dom";
import NavigationPanel from "../components/Navigation";

const Layout = () => {
  return (
    <>
    <NavigationPanel/>

    <Outlet />
    </>
  )
};

export default Layout;