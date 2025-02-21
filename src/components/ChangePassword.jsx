import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import LeftSideBar from "./LeftSideBar";
import Header from "./Header";

const ChangePassword = () => {

    const { showmenu } = useContext(UserContext);

    return (
        <>
            <Header />
            {showmenu && <LeftSideBar />}
            <div style={{ paddingTop: "5rem", marginLeft: showmenu ? '60px' : '0px' }}>
                <div className="heading-bar" >
                    <p className="main-heading m-2 ml-4">Change Password</p>
                </div>
                <div className="w-100 p-3 mh-100">
                    <div className="heading-bar p-3" style={{ height:"5rem" }} >
                        <p className="main-heading m-2 ml-4">Change Password</p>
                    </div>
                    <div className="w-100 mh-100">
                        <div className="p-3 changepassword-form">
                            <div className="input-group input-group-lg p-3" id="input-group" >
                                <label className="form-text" style={{ fontSize: "14px" }}>Existing Password: <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="existingpassword" placeholder="Existing Password" />
                            </div>

                            <div className="input-group input-group-lg p-3" id="input-group">
                                <label className="form-text" style={{ fontSize: "14px" }}>New Password:<span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="newpassword" placeholder="New Password" />
                            </div>

                            <div className="input-group input-group-lg p-3" id="input-group">
                                <label className="form-text" style={{ fontSize: "14px" }}>Confirm Password:<span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" />
                            </div> 
                            <div className="d-flex justify-content-start pr-5" id="input-group">
                                <div className="p-3">
                                    <button className="btn btn-success">Upadate</button>
                                </div>
                                <div className="p-3">
                                    <button className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChangePassword;