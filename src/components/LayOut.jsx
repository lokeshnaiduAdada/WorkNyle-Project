import { useContext } from "react";
import Header from "./Header"
import LeftSideBar from "./LeftSideBar"
import { Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const LayOut = () => {

    const { showmenu } = useContext(UserContext);
    return (
        <>
            <Header />
            {showmenu && < LeftSideBar />}
            <Outlet/>
        </>
    )
}
export default LayOut;