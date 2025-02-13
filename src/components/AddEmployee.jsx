import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router";

const AddEmployee = () => {

    const { setAddEmpForm } = useContext(UserContext);

    const navigate = useNavigate();

    const [employeeForm, setEmployeeForm] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        countryCode:"",
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

    const handleChange = (e) => {
        const { name, value } = e.target;

        let updatevalue = value;

        if (["firstName", "middleName", "lastName"].includes(name)) {
            updatevalue = value.replace(/[^A-Za-z\s]/g, '');
        }
        else if (name === "aadhar") {
            updatevalue = value.replace(/\D/g, "").slice(0, 12);
        }
        else if (name === "pan") {
            updatevalue = value.replace(/[^A-Za-z0-9\s]/g, '').slice(0, 12);
        }
        else if (name === "empcode") {
            updatevalue = value.replace(/[^0-9]/g, '');
        }

        setEmployeeForm((prev) => ({ ...prev, [name]: updatevalue }
        ));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddEmpForm(employeeForm);
        navigate("/employeelist");
    }

    return (
        <div style={{ height:"40rem" }}>
            <div className="heading-bar">
                <p className="main-heading m-2 ml-4">Add Employee</p>
            </div>
            <div className="pl-2 pt-4 pr-2 pb-4" style={{ backgroundColor: '#f1f1f1', height: "40rem" }}>
                <div className="container-fluid" >
                    <form className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-background">
                                <div className="section-headings pl-2 pb-1 pt-2" style={{ display: "flex", justifyContent: "left" }}>
                                    <h6>Employee</h6>
                                </div>

                                <div className="p-3">
                                    <div className="text-input">
                                        <label htmlFor="firstName" className="form-text mr-3">First Name: <span className="text-danger">*</span></label>
                                        <input type="text" id="firstName" name="firstName"
                                            className="form-control" required
                                            maxLength="25"
                                            onChange={handleChange} />
                                    </div>

                                    <div className="text-input">
                                        <label htmlFor="middleName" className="form-text mr-3">Middle Name: <span
                                            className="text-danger">*</span></label>
                                        <input type="text" id="middleName" name="middleName"
                                            className="form-control"
                                            maxLength="25" onChange={handleChange}
                                            required />
                                    </div>


                                    <div className="text-input">
                                        <label htmlFor="lastName" className="form-text mr-3">Last Name: <span
                                            className="text-danger">*</span></label>
                                        <input type="text" id="lastName" name="lastName"
                                            className="form-control"
                                            maxLength="25" onChange={handleChange}
                                            required />
                                    </div>


                                    <div className="d-flex justify-content-between">
                                        <div className="text-input mr-3">
                                            <label htmlFor="dob" className="form-text mr-3">DOB: <span
                                                className="text-danger">*</span></label>
                                            <input type="date" id="dob" name="dob"
                                                className="form-control"
                                                onChange={handleChange}
                                                required />
                                        </div>

                                        <div className="text-input">
                                            <label htmlFor="gender" className="hra-text mr-3" style={{ display: "flex", justifyContent: "right" }}>Gender: </label>
                                            <select name="gender" className="form-control form-input" onChange={handleChange} style={{ appearance: "auto" }}>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other" >Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="text-input">
                                        <label htmlFor="mobile" className="form-text mr-3">Mobile: <span className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <select name="countrycode" className="input-group-text form-control" onChange={handleChange}>
                                                    <option value="IN" selected>IN +91</option>
                                                    <option value="US">US +1</option>
                                                    <option value="UK">UK +44</option>
                                                </select>
                                            </div>
                                            <input type="text" id="mobile" name="mobile" className="form-control" maxLength="10" onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="text-input">
                                        <label htmlFor="email" className="form-text mr-3">Email: <span className="text-danger">*</span></label>
                                        <input type="text" id="email" name="email"
                                            className="form-control"
                                            maxLength="25"
                                            onChange={handleChange}
                                            required />
                                    </div>




                                    <div className="d-flex justify-content-between">

                                        <div className="text-input mr-3">
                                            <label htmlFor="aadhaar" className="form-text mr-3">Aadhaar No: <span className="text-danger">*</span></label>
                                            <input type="text" id="aadhaar" name="aadhaar"
                                                className="form-control"
                                                maxLength="12" onChange={handleChange}
                                                required />
                                        </div>
                                        <div className="text-input">
                                            <label htmlFor="pan" className="hra-text mr-3" style={{ display: "flex", justifyContent: "right" }}>PAN: <span className="text-danger">*</span></label>
                                            <input type="text" id="pan" name="pan"
                                                className="form-control form-input"
                                                maxLength="25" onChange={handleChange}
                                                required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 form-margin">
                            <div className="form-background">
                                <div className="section-headings pl-2 pb-1 pt-2" style={{ display: "flex", justifyContent: "left" }}>
                                    <h6>Employment</h6>
                                </div>

                                <div className="p-3">

                                    <div className="text-input">
                                        <label htmlFor="location" className="form-text mr-3">Location: <span className="text-danger">*</span></label>
                                        <select name="location" className="form-control" style={{ appearance: "auto" }} onChange={handleChange} required>
                                            <option value="select location">Select location</option>
                                            <option value="visakapatanam">Visakhaptnam</option>
                                            <option value="Hyderabad">Hyderabad</option>
                                        </select>
                                    </div>


                                    <div className="d-flex justify-content-between">
                                        <div className="text-input mr-3">
                                            <label htmlFor="doj" className="form-text mr-3">DOJ: <span className="text-danger">*</span></label>
                                            <input type="date" id="doj" name="doj"
                                                className="form-control"
                                                onChange={handleChange}
                                                required />
                                        </div>

                                        <div className="text-input">
                                            <label htmlFor="empCode" className="hra-text mr-3" style={{ display: "flex", justifyContent: "right" }}>Emp Code: <span className="text-danger">*</span></label>
                                            <input type="text" id="empCode" name="empcode"
                                                className="form-control form-input"
                                                maxLength="10" onChange={handleChange}
                                                required />
                                        </div>
                                    </div>


                                    <div className="text-input">
                                        <label htmlFor="division" className="form-text mr-3">Division: <span className="text-danger">*</span></label>
                                        <input type="text" id="division" name="division"
                                            className="form-control"
                                            maxLength="25" onChange={handleChange}
                                            required />
                                    </div>

                                    <div className="text-input">
                                        <label htmlFor="designation" className="form-text mr-3">Designation: <span className="text-danger">*</span></label>
                                        <input type="text" id="designation" name="designation"
                                            className="form-control"
                                            maxLength="25" onChange={handleChange}
                                            required />
                                    </div>

                                    <div className="text-input">
                                        <label htmlFor="workEmail" className="form-text mr-3">Work Email: <span className="text-danger">*</span></label>
                                        <input type="text" id="workEmail" name="workmail"
                                            className="form-control"
                                            maxLength="25" onChange={handleChange}
                                            required />
                                    </div>

                                    <div className="text-input">
                                        <label htmlFor="reportingManager" className="form-text mr-3">Reporting Manager: <span className="text-danger">*</span></label>
                                        <select name="reportmanager" className="form-control" style={{ appearance: "auto" }} onChange={handleChange} required>
                                            <option value="select Reporting Manager">Select Reporting Manager</option>
                                            <option value="ABCD">ABCD</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-right mt-4">
                            <button className="btn btn-primary" onClick={handleSubmit }>Save & Continue</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default AddEmployee;