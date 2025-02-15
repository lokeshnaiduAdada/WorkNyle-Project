
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router";

const Form = () => {

    const { setData } = useContext(UserContext);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [mail, setMail] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    //const [doj, setDoj] = useState("")
    //const [designation, setDesignation] = useState("");
    //const [empcode, setEmpCode] = useState("");

    const handleSubmit = (e) => {

        if (name!="" && mail != "" && gender != "" && dob !=""  ) {
            if (mobile.length === 10) {
                if (age >= 18 && age.length ===2) {
                    e.preventDefault();
                    setData({ name, mobile, mail, dob, age, gender });
                    navigate("/fetch");
                }
                else {
                    alert("Invalid age");
                }
            }
            else {
                alert("Invalid mobile number");
            }
        }
        else {
            alert("please complete the form completely");
        }
        
    };

    const handlePathButton = (path) => {
        navigate(`/${path}`);
    }

    return (
        <>
            <div className="d-inline-block justify-content-center align-items-center vh-100" style={{ textAlign: "center" }}>
                <div className="" style={{ display: "inline-block" }}>
                    <table className="table table-striped table-hover text-center" id="formtable">
                        <thead >
                            <tr>
                                <th colSpan="7" className="text-center"  >Employee Form</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="table-secondary">
                                <th >Name</th>
                                <td id="collam" >:</td>
                            <td>
                                    <input id="tableinput" type='text' value={name} onChange={(e) =>
                                        setName(e.target.value)} ></input>
                            </td>
                        </tr>

                        <tr className="table-secondary">
                            <th >Mobile Number</th>
                                <td id="collam">:</td>
                            <td>
                                    <input id="tableinput" type='number' value={mobile} onChange={(e) => 
                                    setMobile(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th >Email</th>
                                <td id="collam">:</td>
                            <td>
                                    <input id="tableinput" type='email' value={mail} onChange={(e) => 
                                    setMail(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th >Date of Birth</th>
                                <td id="collam">:</td>
                            <td>
                                    <input id="tableinput" type='date' value={dob} onChange={(e) =>
                                    setDob(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th >Age</th>
                                <td id="collam">:</td>
                                <td>
                                    <input type='number' value={age} onChange={(e) => setAge(e.target.value)} id="tableinput"></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th >Gender</th>
                                <td id="collam">:</td>
                            <td>
                                    <select id="tableinput" onChange={(e) => setGender(e.target.value)}>
                                    <option value="">Select gender</option>
                                    <option value="male" >male</option>
                                    <option value="female" >female</option>
                                    <option value="others" >others</option>
                                </select>
                            </td>
                        </tr>
                        {/*<tr className="table-secondary">*/}
                        {/*    <th style={{ color: 'black', textAlign: 'left' }}>Date of Joining</th>*/}
                        {/*    <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>*/}
                        {/*    <td>*/}
                        {/*        <input style={{ width: '180px' }} type='date' value={doj} onChange={(e) =>*/}
                        {/*            setDoj(e.target.value)}></input>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*<tr className="table-secondary">*/}
                        {/*    <th style={{ color: 'black', textAlign: 'left' }}>Designation</th>*/}
                        {/*    <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>*/}
                        {/*    <td>*/}
                        {/*        <input type='text' value={designation} onChange={(e) =>*/}
                        {/*            setDesignation(e.target.value)}></input>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*<tr className="table-secondary">*/}
                        {/*    <th style={{ color: 'black', textAlign: 'left' }}>Employee Code</th>*/}
                        {/*    <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>*/}
                        {/*    <td>*/}
                        {/*        <input type='text' value={empcode} onChange={(e) =>*/}
                        {/*            setEmpCode(e.target.value)}></input>*/}
                        {/*    </td>*/}
                            {/*</tr>*/}
                    </tbody>
                    </table>
                    <button type='submit' className="btn btn-primary" style={{ margin:"15px" }} onClick={handleSubmit}>Submit</button>
                </div>

                <div style={{ display: "block" }}>
                    <div style={{margin:"15px"}}>
                        <button className="btn btn-info" onClick={()=>handlePathButton("addemployee") }>Add Employee</button>
                    </div>
                    <div style={{margin:"15px"}}>
                        <button className="btn btn-info" onClick={()=>handlePathButton("employeelist") }>List Employee</button>
                    </div>
                    <div style={{margin:"15px"}}>
                        <button className="btn btn-info" onClick={()=>handlePathButton("addpayroll") }>Add PayRoll</button>
                    </div>
                    <div style={{margin:"15px"}}>
                        <button className="btn btn-info" onClick={()=>handlePathButton("attendance") }>Attendance</button>
                    </div>
                    <div style={{margin:"15px"}}>
                        <button className="btn btn-info" onClick={()=>handlePathButton("listpayroll") }>List PayRolls</button>
                    </div>
                    <div style={{margin:"15px"}}>
                        <button className="btn btn-info" onClick={()=>handlePathButton("listpurchase") }>List Purchase</button>
                    </div>
                    <div style={{margin:"15px"}}>
                        <button className="btn btn-info" onClick={()=>handlePathButton("payslip") }>Pay Slips</button>
                    </div>
                    <div style={{margin:"15px"}}>
                        <button className="btn btn-info" onClick={()=>handlePathButton("salarystructure") }>Salary Structure</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;