import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";


const EmployeeList = () => {

    const { addempform,showmenu } = useContext(UserContext);


    return (
        <>
            <Header />
            {showmenu && < LeftSideBar />}
            <div style={{
                backgroundColor: '#f1f1f1', height: "43.9rem", paddingTop: "5rem", marginLeft: showmenu ? '130px' : '0px' }}>
                <div className="heading-bar" >
                    <p className="main-heading m-2 ml-4">List Employee</p>
                </div>
                <div className="pl-2 pt-4 pr-2 pb-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <label htmlFor="mrNo" className="leave-card-heading">Search Employee</label>
                                <input type="text" id="mrNo" name="mrNo" className="form-control" placeholder="Emp code/ Name/ Mobile"
                                     maxLength="10" />
                            </div>
                            <div className="col-12 col-md-4 button-top-padding" style={{ display: "flex", justifyContent: "left" }}>
                                <button className="form-button mr-3">Save</button>
                                <button className="form-button2">Reset</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="list-employee-table">
                                        <thead>
                                            <tr>
                                                <th>Emp Code</th>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Division</th>
                                                <th>Designation</th>
                                                <th>DOJ</th>
                                                <th>Work Email Id</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBody" className="table table-striped table-hover" style={{ backgroundColor: 'whitesmoke' }}>
                                            <tr className="tablebody">
                                                <td>{addempform.empcode}</td>
                                                <td>{addempform.firstName}</td>
                                                <td>{addempform.mobile}</td>
                                                <td>{addempform.division}</td>
                                                <td>{addempform.designation}</td>
                                                <td>{addempform.doj}</td>
                                                <td>{addempform.workmail}</td>
                                                <td></td>
                                                <td style={{ display: "flex", justifyContent: "center" }}>
                                                    <img style={{width:"35px"}} src={"/compose.png" } title="Edit"></img>
                                                    <img style={{width:"35px"}} src={ "/eye.png"} title="View"></img>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmployeeList;