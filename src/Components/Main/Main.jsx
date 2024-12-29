import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

    </div>
  );
};

export default Main;