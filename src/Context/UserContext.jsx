import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {

    const [addempform, setAddEmpForm] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        countryCode: "",
        mobile: "",
        email: "",
        aadhar: "",
        pan: "",
        location: "",
        doj: "",
        empcode: "",
        division: "",
        designation: "",
        workmail: "",
        reportmanager: ""
    });

    const [showmenu, setShowMenu] = useState({ menu: "" });

    const [data, setData] = useState({ name: "",mobile:"", email: "",age:"",gender:"" });

    return (
        <UserContext.Provider value={{ data, setData, showmenu, setShowMenu, addempform, setAddEmpForm }}>
            {children}
        </UserContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};