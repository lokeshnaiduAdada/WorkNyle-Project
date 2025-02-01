import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {

    const [data, setData] = useState({ name: "",mobile:"", email: "",age:"",gender:"", doj:"", designation:"", empcode:"" });

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};