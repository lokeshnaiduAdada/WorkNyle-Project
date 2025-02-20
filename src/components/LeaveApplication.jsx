import { useContext } from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import { UserContext } from "../Context/UserContext";

const LeaveApplication = () => {

    const { showmenu } = useContext(UserContext);

    return (
        <>
            <Header />
            {showmenu && <LeftSideBar />}
            <div style={{ paddingTop: "5rem", marginLeft: showmenu ? '60px' : '0px' } }>
                <div className="heading-bar">
                    <p className="main-heading m-2 ml-4">Leave Application</p>
                </div>

                <div className="p-4">
                    <div>
                        <h1 className="leave-application-heading">Leave Balance</h1>
                    </div>
                    <div className="container-fluid">
                        <div className="row d-flex flex-row mt-2 " id="application-card">
                            <div className="col-12 col-lg-2 leave-application-card mt-3 mr-3 mb-3">
                                <p className="card-text  pl-2 pt-3 pr-3" >Casual Leaves: 05</p>
                            </div>
                            <div className="col-12 col-lg-2 leave-application-card1 mt-3 mr-3 mb-3">
                                <p className="card-text pl-2 pt-3 pr-3" >Sick Leaves: 07</p>
                            </div>
                            <div className="col-12 col-lg-2 leave-application-card2 mt-3 mr-3 mb-3">
                                <p className="card-text pl-2 pt-3 pr-3" >Earned Leaves: 03</p>
                            </div>
                            <div className="col-12 col-lg-2 leave-application-card3 mt-3 mr-3 mb-3">
                                <p className="card-text pl-2 pt-3 pr-3" >Loss of Pay: 05</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="leave-application-heading mt-3 mb-3">Leave Form</h1>
                    </div>
                    <div className="container-fluid background-form p-4">
                        <div className="row">
                            <div className="col-12 col-lg-4 mb-3">
                                <p className="form-text">Type of Leave*</p>
                                <select name="leaveType" className="input form-control">
                                </select>
                            </div>
                            <div className="col-12 col-lg-4 mb-3">
                                <p className="form-text">Start Date</p>
                                <input type="date" className="input form-control" />
                            </div>
                            <div className="col-12 col-lg-4 mb-3">
                                <p className="form-text">End Date</p>
                                <input type="date" className="input form-control" />
                            </div>
                            <div className="col-12 col-lg-8 mb-3">
                                <p className="form-text">Reason</p>
                                <input type="text" className="input form-control" maxLength="50"  />
                            </div>
                            <div className="col-12 col-lg-4 mb-3">
                                <p className="form-text">Reporting Manager</p>
                                <select name="leaveType" className="input form-control">
                                </select>
                            </div>
                            <div className="col-12 col-lg-8 mb-3">
                                <p className="form-text">Reason</p>
                                <input type="text" className="form-control" style={{ height: "80px", width: "100%" }} maxLength="50"  />
                            </div>
                            <div className="col-12 col-lg-4 d-flex justify-content-end button-end">
                                <button className="leave-application-button">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LeaveApplication;