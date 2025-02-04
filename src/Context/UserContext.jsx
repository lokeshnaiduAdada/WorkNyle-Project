import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {

    const [showmenu, setShowMenu] = useState({ menu: "" });

    const [data, setData] = useState({ name: "",mobile:"", email: "",age:"",gender:"", doj:"", designation:"", empcode:"" });

    return (
        <UserContext.Provider value={{ data, setData, showmenu, setShowMenu }}>
            {children}
        </UserContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};