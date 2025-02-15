import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import '/src/assets/styles/WorkNyle2.css';

const ListPayRolls = () => {

    const { showmenu } = useContext(UserContext);

    const employeeData = [
        { empCode: "KD150", name: "Rajinikanth", mobile: "9876543210", division: "Backend Developer", designation: "Backend Developer", doj: "12-MAY-2024", mailid: "abc@gmail.com", status: "Active", },
        { empCode: "KD150", name: "Rajinikanth", mobile: "9876543210", division: "Backend Developer", designation: "Backend Developer", doj: "12-MAY-2024", mailid: "abc@gmail.com", status: "In-Active", }

    ];

    return (
        <>
            <Header />
            {showmenu && <LeftSideBar/> }
            <div style={{ paddingTop: "5rem", marginLeft: showmenu ? '130px' : '0px' }}>
                <div className="heading-bar">
                    <p className="main-heading m-2 ml-4">List Payroll</p>
                </div>
                <div className="pl-2 pt-4 pr-2 pb-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <label htmlFor="mrNo" className="leave-card-heading">Search</label>
                                <input type="text" id="mrNo" name="mrNo" className="form-control" placeholder="Emp code/ Name"
                                    onInput="this.value = this.value.replace(/[^0-9]/g, '')" maxLength="10" />
                            </div>
                            <div className="col-12 col-md-4 button-top-padding">
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
                                                <th>Annual CTC</th>
                                                <th>Monthly CTC</th>
                                                <th>Total Earnings</th>
                                                <th>Total Deductions</th>
                                                <th>Net pay</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="payrollTableBody">
                                            {
                                                employeeData.map((element, index) => {
                                                    return (
                                                        <tr key={index} className="tablebody">
                                                            <td>{element.empCode}</td>
                                                            <td>{element.name}</td>
                                                            <td>{element.mobile}</td>
                                                            <td>{element.designation}</td>
                                                            <td>{element.division}</td>
                                                            <td>{element.doj}</td>
                                                            <td>{element.mailid}</td>
                                                            <td style={{ justifyContent: "space-around", display: "flex" }}>
                                                                <img style={{ width: "20px" }} src={"/compose.png"} title="Edit"></img>
                                                                <img style={{ width: "20px" }} src={"/eye.png"} title="View"></img>
                                                                <img style={{ width: "20px" }} src={"/downloads.png"} title="View"></img>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
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
export default ListPayRolls;