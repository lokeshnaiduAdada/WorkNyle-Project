
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
    const [doj, setDoj] = useState("")
    const [designation, setDesignation] = useState("");
    const [empcode, setEmpCode] = useState("");

    const handleSubmit = (e) => {

        if (mail != "" && gender != "" && doj != "" && designation != "" && empcode != "" ) {
            if (mobile.length === 10) {
                if (age >= 18 && age.length ===2) {
                    if (empcode.length === 4) {
                        e.preventDefault();
                        setData({ name, mobile, mail, dob, age, gender, doj, designation, empcode });
                        navigate("/fetch");
                    }
                    else {
                        alert("Invalid Employee code");
                    }
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

    return (
        <>
            <div className="form-main-content">
                <table style={{ background: 'orange' }}>
                    <thead style={{ color: 'white', fontSize: '22px', fontWeight: 'bold' }}>
                        <tr style={{ position: 'relative',left:'150px' }}>Employee Form</tr>

                    </thead>
                    <tbody>
                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Name</th>
                            <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>
                            <td>
                                <input type='text' value={name} onChange={(e) =>
                                    setName(e.target.value)}></input>
                            </td>
                        </tr>

                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Mobile Number</th>
                            <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>
                            <td>
                                <input type='number' value={mobile} onChange={(e) => 
                                    setMobile(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Email</th>
                            <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>
                            <td>
                                <input type='email' value={mail} onChange={(e) => 
                                    setMail(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Date of Birth</th>
                            <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>
                            <td>
                                <input style={{ width:'180px' }} type='date' value={dob} onChange={(e) =>
                                    setDob(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Age</th>
                            <td style={{ width: '1px',fontWeight: 'bold' }}>:</td>
                            <td>
                                <input type='number' value={age} onChange={(e) => setAge(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Gender</th>
                            <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>
                            <td>
                                <select style={{ width: '11rem', height:'30px' }} onChange={(e) => setGender(e.target.value)}>
                                    <option value="">Select gender</option>
                                    <option value="male" >male</option>
                                    <option value="female" >female</option>
                                    <option value="others" >others</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Date of Joining</th>
                            <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>
                            <td>
                                <input style={{ width: '180px' }} type='date' value={doj} onChange={(e) =>
                                    setDoj(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Designation</th>
                            <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>
                            <td>
                                <input type='text' value={designation} onChange={(e) =>
                                    setDesignation(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr className="table-secondary">
                            <th style={{ color: 'black', textAlign: 'left' }}>Employee Code</th>
                            <td style={{ width: '1px', fontWeight: 'bold' }}>:</td>
                            <td>
                                <input type='text' value={empcode} onChange={(e) =>
                                    setEmpCode(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr style={{ background: 'orange' }}>
                            <td></td>
                            <td >
                                <button type='submiy' className="btn btn-primary" onClick={handleSubmit}>Submit</button>                                
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Form;