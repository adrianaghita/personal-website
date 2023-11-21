import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Root;
