import { useContext } from "react";
import { UserContext } from "../Context/UserContext";


const RightSide = () => {

    const { showmenu } = useContext(UserContext);

    return (
        //    < !-- ============================================================== -->
        //    < !--Start right Content here-- >
        //    < !-- ============================================================== -->

        <div className="main-content" style={{ marginRight: '0px' }} >
            <div className="page" >
                <div className="rightside-content" style={{ paddingTop: "70px", marginLeft: showmenu ? '60px' :'0px' }}>
                    <div className="container-fluid"  >
                        <div className="row">
                            <div className="col-12 employment-div">
                                <p className="employment-name ml-2 mt-2 mb-2">Employment</p>
                            </div>
                        </div>
                        <div className="row ml-1 mr-1 mt-3 mb-0">
                            <div className="col-12 col-lg-3 custom-column">
                                <div className="card mb-3">
                                    <div className="bg-image" >
                                        <img src="Maskgroup.jpg" style={{ width: "100%", height:"100px" }} />
                                        <img src="profileimage.png" className="profile-image" />
                                    </div>

                                    <div className="pl-4 pr-4 pt-5" >
                                        <h1 className="name" style={{ fontSize:'16px' }}>Rachel Mathew </h1>
                                        <p className="para-text">(Developer)</p>
                                    </div>

                                    <div className="pl-4 pr-4 pt-2 d-flex justify-content-between" style={{ gap: "15px" }}>
                                        <div style={{ width:"120px" }}>
                                            <div className="d-flex flex-row">
                                                <img src="Vector.png" className="img" />
                                                <p className="text ml-2" >Mobile Number<br />
                                                    <span className="details-text">9876543210</span>
                                                </p>
                                            </div>

                                            <div className="d-flex flex-row">
                                                <img src="date-of-birth 1.png" className="img" />
                                                <p className="text ml-2">Date Of Birth<br />
                                                    <span className="details-text mt-2">DD/MM/YYYY</span>
                                                </p>
                                            </div>

                                            <div className="d-flex flex-row">
                                                <img src="Vector (1).png" className="img" />
                                                <p className="text ml-2">E-Mail<br />
                                                    <span className="details-text mt-2">Rachel.123@gmail.com</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div style={{width:"120px"} }>
                                            <div className="d-flex flex-row">
                                                <img src="age 1.png" className="img" />
                                                <p className="text ml-2">Age<br />
                                                    <span className="details-text">34 Y</span>
                                                </p>
                                            </div>

                                            <div className="d-flex flex-row">
                                                <img src="genders 1.png" className="img" />
                                                <p className="text ml-2">Gender<br />
                                                    <span className="details-text mt-2">Female</span>
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="card">
                                    <div className="pl-4 pr-4 pt-4">
                                        <h1 className="heading">Identity Information</h1>
                                        <div className="d-flex flex-row justify-content-between mt-2">
                                            <div>
                                                <p className="text mb-0">PAN</p>
                                                <p className="details-text">ABCDE0000F</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <p className="text mb-0">Aadhar Number</p>
                                                <p className="details-text">xxxx-xxxx-1234</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 custom-column">
                                <div className="card pl-4 pt-4 pr-5 pb-2 mb-3">
                                    <h1 className="heading">Work Information</h1>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-column">
                                            <div>
                                                <p className="text mb-0">Employee Type</p>
                                                <p className="details-text">Full Time</p>
                                            </div>
                                            <div>
                                                <p className="text mb-0">Divison</p>
                                                <p className="details-text">Developer</p>
                                            </div>
                                            <div>
                                                <p className="text mb-0">Employee Code</p>
                                                <p className="details-text">25874136</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div>
                                                <p className="text mb-0">Date of Joining</p>
                                                <p className="details-text">**/**/****</p>
                                            </div>
                                            <div>
                                                <p className="text mb-0">Designation</p>
                                                <p className="details-text">Developer</p>
                                            </div>
                                            <div>
                                                <p className="text mb-0">Employee Status</p>
                                                <p className="details-text">Active</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card pl-4 pt-4 pr-4 pb-4">
                                    <h1 className="heading">Payroll</h1>
                                    <div className="d-flex justify-content-between pt-3">
                                        <div className="d-flex flex-column" style={{ width: "45%" }} >
                                            <h1 className="heading">CTC Earnings</h1>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-column">
                                                    <div>
                                                        <p className="text mb-0">Annual CTC: *</p>
                                                        <p className="details-text">12 LPA</p>
                                                    </div>

                                                    <div>
                                                        <p className="text mb-0">Basic: *</p>
                                                        <p className="details-text">00000</p>
                                                    </div>

                                                    <div>
                                                        <p className="text mb-0">Medical:</p>
                                                        <p className="details-text">00000</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <div>
                                                        <p className="text mb-0">Monthly CTC: *</p>
                                                        <p className="details-text">1,00,000</p>
                                                    </div>

                                                    <div>
                                                        <p className="text mb-0">HRA:</p>
                                                        <p className="details-text">00000</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="vertical-line"></div>

                                        <div className="d-flex flex-column" style={{ width: "45%" }} >
                                            <h1 className="heading">CTC Deductions</h1>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-column">
                                                    <div>
                                                        <p className="text mb-0">Income Tax:</p>
                                                        <p className="details-text">00</p>
                                                    </div>

                                                    <div>
                                                        <p className="text mb-0">PF:</p>
                                                        <p className="details-text">0000</p>
                                                    </div>

                                                    <div>
                                                        <p className="text mb-0">Food Coupons:</p>
                                                        <p className="details-text">00</p>
                                                    </div>

                                                </div>
                                                <div className="d-flex flex-column">
                                                    <div>
                                                        <p className="text mb-0">Prof Tax:</p>
                                                        <p className="details-text">00</p>
                                                    </div>

                                                    <div>
                                                        <p className="text mb-0">ESI:</p>
                                                        <p className="details-text">0000</p>
                                                    </div>

                                                    <div>
                                                        <p className="text mb-0">Other Deductions:</p>
                                                        <p className="details-text">00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-3 custom-column">
                                <div className="card mb-3">
                                    <div className="pl-4 pr-4 pt-4">
                                        <h1 className="heading">Bank Information</h1>
                                        <div className="d-flex flex-row justify-content-between mt-2">
                                            <div>
                                                <p className="text mb-0">Account Holders Name</p>
                                                <p className="details-text">Rachel Mathew</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <p className="text mb-0">Account Number</p>
                                                <p className="details-text">xxxxxxx4836</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <p className="text mb-0">IFSC Code</p>
                                                <p className="details-text">SBI478JKES5X</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <p className="text mb-0">Bank Name</p>
                                                <p className="details-text">State Bank of India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card pl-4 pt-4">
                                    <h1 className="heading">PF Information</h1>
                                    <div className="d-flex flex-row justify-content-between mt-2">
                                        <div>
                                            <p className="text mb-0">UAN</p>
                                            <p className="details-text">MHBAN00000640000000123</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <div>
                                            <p className="text mb-0">PF No:</p>
                                            <p className="details-text">xxxxxxx4836</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
   
        </div >
        //< !--END layout - wrapper-- >
    )
}
export default RightSide;