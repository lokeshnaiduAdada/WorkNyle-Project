import { useContext } from "react";
import Header from "./Header";
import { UserContext } from "../Context/UserContext";
import LeftSideBar from "./LeftSideBar";

const AddPayRoll = () => {

    const { showmenu } = useContext(UserContext);
    return (
        <>
            <Header />
            {showmenu && <LeftSideBar/> }
            <div style={{ backgroundColor: "#f1f1f1", paddingTop: "5rem", marginLeft: showmenu ? '130px' : '0px' }}>
                <div className="heading-bar">
                    <p className="main-heading m-2 ml-4">Add Payroll</p>
                </div>
                <div className="pl-2 pt-4 pr-2 pb-4">
                    <form className="container-fluid">
                        <div className="row">
                            <div className="col-12 mb-2">
                                <div className="row">
                                    <h1 className="col-12 col-lg-3 leave-card-heading mr-3">Emp ID : <span
                                        className="salary-heading-color">AB123456</span></h1>
                                    <h1 className="col-12 col-lg-3 leave-card-heading mr-3">Emp Name : <span
                                        className="salary-heading-color">Rachel Mathew</span></h1>
                                    <h1 className="col-12 col-lg-3 leave-card-heading">Divison : <span
                                        className="salary-heading-color">UI/UX Designer</span></h1>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-background">
                                    <div className="row pl-3 pt-4 pr-3 pb-3">
                                        <div className="col-12 mb-2">
                                            <h1 className="leave-card-heading">Salary Breakup</h1>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-2">
                                            <p className="salary-card-text" style={{width:"120px"} }>Basic : 55,000.00</p>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2">
                                            <p className="salary-card-text" style={{ width: "120px" }}>PF : 1,500.00</p>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2">
                                            <p className="salary-card-text" style={{ width: "120px" }}>HRA : 30,000.00</p>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2">
                                            <p className="salary-card-text" style={{ width: "120px" }}>Medical : 1,500.00</p>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2">
                                            <p className="salary-card-text" style={{ width: "120px" }}>Conveyance : 1,600.00</p>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2">
                                            <p className="salary-card-text" style={{ width: "120px" }}>Personal : 0.00</p>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2">
                                            <p className="salary-card-text" style={{ width: "120px" }}>Special Allowance: 50,000.00</p>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2">
                                            <p className="salary-card-text" style={{ width: "120px" }}>Professional Tax : xxxxxxxxx</p>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2 d-flex">
                                            <p className="salary-card-text d-flex mr-2">Bonus:</p>
                                            <select className="form-control" style={{ appearance: "auto" }}>
                                                <option>Annually</option>
                                            </select>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2 d-flex">
                                            <p className="salary-card-text d-flex mr-2">Pay Days :</p>
                                            <select className="form-control" style={{ width: "50%", appearance: "auto" }} >
                                                <option>30</option>
                                            </select>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-2">
                                            <button className="d-flex align-items-center payroll-button">Generate <img
                                                src={"/add.png" }
                                                style={{ marginLeft: "5px", fontSize: "18px" }} ></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="salary-table" style={{ width: "100%" }} >
                                        <thead>
                                            <tr>
                                                <th className="add-payroll-table-bg earning-heading" style={{ width: "15%" }} >Earnings
                                                </th>
                                                <th className="add-payroll-table-bg earning-heading">Current</th>
                                                <th className="add-payroll-table-bg earning-heading" style={{ width: "15%" }} >Deductions
                                                </th>
                                                <th className="add-payroll-table-bg earning-heading">Current</th>
                                            </tr>
                                        </thead>
                                        <tbody className="salary-table">
                                            <tr className="earnings-row">
                                                <td className="payroll-table-text">Basic:</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                                <td>Income Tax</td>
                                                <td className="payroll-table-text"><input type="text"
                                                    className="form-control payroll-input-boxes" placeholder="0.00"/></td>
                                            </tr>
                                            <tr className="earnings-row">
                                                <td>H.R.A:</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                                <td>Provident Fund</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                            </tr>
                                            <tr className="earnings-row">
                                                <td>Conveyance</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                                <td>Professional Tax</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                            </tr>
                                            <tr className="earnings-row">
                                                <td>Medical</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                                <td>Other Deductions</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                            </tr>
                                            <tr className="earnings-row">
                                                <td>Personal Allowance</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="earnings-row">
                                                <td>Special Allowance</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="earnings-row">
                                                <td>Bonus</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="earnings-row">
                                                <td>OverTime Allowance</td>
                                                <td><input type="text" className="form-control payroll-input-boxes"
                                                    placeholder="0.00"/></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" className="add-payroll-table-bg">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="m-0">Gross Earnings</p>
                                                        <p className="m-0">0.00</p>
                                                    </div>
                                                </td>

                                                <td colSpan="2" className="add-payroll-table-bg">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="m-0">Gross Deductions</p>
                                                        <p className="m-0">0.00</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="netpayble d-flex justify-content-between p-3">
                                    <p className="salary-card-text m-0">Net Payable :</p>
                                    <p className="leave-card-heading m-0">₹ 1,02,999.00</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddPayRoll;