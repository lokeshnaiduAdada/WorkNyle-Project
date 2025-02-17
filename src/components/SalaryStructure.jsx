import { useContext } from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import { UserContext } from "../Context/UserContext";

const SalaryStructure = () => {

    const { showmenu } = useContext(UserContext);
    return (
        <>
            <Header />
            {showmenu && <LeftSideBar/> }
            <div style={{ paddingTop: "5rem", marginLeft: showmenu ? '130px' : '0px' }}>
                <div className="heading-bar">
                    <p className="main-heading m-2 ml-4">Salary Structure</p>
                </div>
                <div className="pl-2 pt-4 pr-2 pb-4">
                    <form className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex">
                                <h1 className="leave-card-heading mr-3">Emp Code : <span
                                    className="salary-heading-color" style={{ paddingLeft: '4px' }}> ABCD1234</span></h1>
                                <h1 className="leave-card-heading">Emp Name : <span className="salary-heading-color" style={{paddingLeft:'4px'} }> Mathew</span></h1>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-background">
                                    <div className="section-headings pl-2 pb-1 pt-2">
                                        <h6>CTC Earnings</h6>
                                    </div>
                                    <div className="p-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="text-input mr-3">
                                                <label htmlFor="annualCTC" className="form-text mr-3">Annual CTC: <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" id="annualCTC" name="annualCTC"
                                                    className="form-control"
                                                
                                                    required />
                                            </div>

                                            <div className="text-input">
                                                <label htmlFor="monthlyCTC" className="hra-text mr-3">Monthly CTC: </label>
                                                <input type="text" id="monthlyCTC" name="monthlyCTC"
                                                    className="form-control form-input"
                                                
                                                    required />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="text-input mr-3">
                                                <label htmlFor="basic" className="form-text mr-3">Basic: <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" id="basic" name="basic"
                                                    className="form-control"
                                                
                                                    required />
                                            </div>

                                            <div className="text-input">
                                                <label htmlFor="hra" className="hra-text mr-3">HRA: </label>
                                                <input type="text" id="hra" name="hra"
                                                    className="form-control form-input"
                                                
                                                    required />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="text-input mr-3">
                                                <label htmlFor="medical" className="form-text mr-3">Medical: <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" id="medical" name="medical"
                                                    className="form-control"
                                                     />
                                            </div>

                                            <div className="text-input">
                                                <label htmlFor="conveyance" className="hra-text mr-3">Conveyance:</label>
                                                <input type="text" id="conveyance" name="conveyance"
                                                    className="form-control form-input"
                                                     />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="text-input mr-3">
                                                <label htmlFor="personalAllowance" className="form-text mr-3">Personal Allowance:<span
                                                    className="text-danger">*</span></label>
                                                <input type="text" id="personalAllowance" name="personalAllowance"
                                                    className="form-control"
                                                     />
                                            </div>

                                            <div className="text-input">
                                                <label htmlFor="specialAllowance" className="hra-text mr-3" >Special Allowance:</label>
                                                <input type="text" id="specialAllowance" name="specialAllowance"
                                                    className="form-control form-input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 form-margin">
                                <div className="form-background">
                                    <div className="section-headings pl-2 pb-1 pt-2">
                                        <h6>CTC Deductions</h6>
                                    </div>

                                    <div className="p-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="text-input mr-3">
                                                <label htmlFor="incomeTax" className="form-text mr-3">Income Tax: <span className="text-danger">*</span></label>
                                                <input type="text" id="incomeTax" name="incomeTax"
                                                    className="form-control"
                                                    maxLength="10" 
                                                    required />
                                            </div>

                                            <div className="text-input">
                                                <label htmlFor="profTax" className="hra-text mr-3">Prof Tax: <span className="text-danger">*</span></label>
                                                <input type="text" id="profTax" name="profTax"
                                                    className="form-control form-input"
                                                    maxLength="10" 
                                                    required />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="text-input mr-3">
                                                <label htmlFor="pf" className="form-text mr-3">PF: <span
                                                    className="text-danger">*</span></label>
                                                <input type="text" id="pf" name="pf"
                                                    className="form-control"
                                                    maxLength="10" 
                                                    required />
                                            </div>

                                            <div className="text-input">
                                                <label htmlFor="esi" className="hra-text mr-3">ESI:</label>
                                                <input type="text" id="esi" name="esi"
                                                    className="form-control form-input"
                                                    maxLength="10"
                                                    required />
                                            </div>
                                        </div>


                                        <div className="d-flex justify-content-between">
                                            <div className="text-input mr-3">
                                                <label htmlFor="foodCoupons" className="form-text mr-3">Food Coupons:</label>
                                                <input type="text" id="foodCoupons" name="foodCoupons"
                                                    className="form-control"
                                                    maxLength="10" />
                                            </div>

                                            <div className="text-input">
                                                <label htmlFor="otherDeductions" className="hra-text mr-3">Other Deductions:</label>
                                                <input type="text" id="otherDeductions" name="otherDeductions"
                                                    className="form-control form-input"
                                                    maxLength="10" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-md-6" >
                                <div className="form-background">
                                    <div className="section-headings pl-2 pb-1 pt-2">
                                        <h6>Bank Information</h6>
                                    </div>

                                    <div className="p-3">
                                        <div className="text-input">
                                            <label htmlFor="accountName" className="form-text mr-3">Account Name: <span className="text-danger">*</span></label>
                                            <input type="text" id="accountName" name="accountName"
                                                className="form-control"
                                                maxLength="25" 
                                                required />
                                        </div>

                                        <div className="text-input">
                                            <label htmlFor="accountNo" className="form-text mr-3">Account No: <span className="text-danger">*</span></label>
                                            <input type="text" id="accountNo" name="accountNo"
                                                className="form-control"
                                                maxLength="20" 
                                                required />
                                        </div>

                                        <div className="text-input">
                                            <label htmlFor="ifsc" className="form-text mr-3">IFSC Code: <span className="text-danger">*</span></label>
                                            <input type="text" id="ifsc" name="ifsc"
                                                className="form-control"
                                                maxLength="11" 
                                                required />
                                        </div>

                                        <div className="text-input">
                                            <label htmlFor="bankName" className="form-text mr-3">Bank Name: <span className="text-danger">*</span></label>
                                            <input type="text" id="bankName" name="bankName"
                                                className="form-control" pattern="^[A-Za-z\s]{1,20}$"
                                                maxLength="30" 
                                                required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 form-margin">
                                <div className="form-background" >
                                    <div className="section-headings pl-2 pb-1 pt-2">
                                        <h6>PF Information</h6>
                                    </div>

                                    <div className="p-3">
                                        <div className="text-input">
                                            <label htmlFor="uan" className="form-text mr-3">UAN: <span className="text-danger">*</span></label>
                                            <input type="text" id="uan" name="uan"
                                                className="form-control"
                                                maxLength="20" 
                                                required />
                                        </div>

                                        <div className="text-input">
                                            <label htmlFor="pfNo" className="form-text mr-3">PF No: <span className="text-danger">*</span></label>
                                            <input type="text" id="pfNo" name="pfNo"
                                                className="form-control"
                                                maxLength="22" 
                                                required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right mt-4">
                            <button className="form-button">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SalaryStructure;

