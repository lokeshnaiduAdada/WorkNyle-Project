import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {

    const [employeemenu, setEmployeeMenu] = useState(false);
    const [attendancemenu, setAttendanceMenu] = useState(false);
    const [payrollmenu, setPayRollMenu] = useState(false);

    const handleEmployeemenu = () => {
        setEmployeeMenu(!employeemenu);
        setAttendanceMenu(false);
        setPayRollMenu(false);
    }
    const handleattendancemenu = () => {
        setEmployeeMenu(false);
        setAttendanceMenu(!attendancemenu);
        setPayRollMenu(false);
    }
    const handlepayrollmenu = () => {
        setEmployeeMenu(false);
        setAttendanceMenu(false);
        setPayRollMenu(!payrollmenu);
    }

    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">

                {/*<!--- Sidemenu -->*/}
                <div id="sidebar-menu" >
                    {/*<!-- Left Menu Start -->*/}
                    <ul className="metismenu list-unstyled" id="side-menu" >
                        {/*<!-- <li className="menu-title">Main</li> -->*/}

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>

                                <img className="bi bi-columns-gap" src="/dashboard.png" style={{ width: '25px' }}></img><br></br>
                                <span className="leftsidemenu"> Dashboard </span>
                                </a>
                        </li>
                        <li style={{ backgroundColor: employeemenu ? "white" : "" }}>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }} onClick={handleEmployeemenu}>
                                <img className="bi bi-search" src="/employee 2.png" style={{ width: '25px' }}></img><br></br>
                                <span className="leftsidemenu">Employment</span>
                            </a>
                            <ul className="sub-menu" style={{ display: employeemenu ? "contents" : "none" }}>
                                <li style={{ fontSize: '25px' }}><Link to="/employeelist" className="nav-link" style={{ padding: '8px' }}>List Employee</Link></li>
                                <li style={{ fontSize: '25px' }}><Link to="/addemployee" className="nav-link" style={{ padding: '8px' }}>Add Employee</Link></li>
                            </ul>
                        </li>

                        <li style={{ backgroundColor: attendancemenu ? "white" : "" }}>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }} onClick={handleattendancemenu}>
                                <img className="bi bi-search" src="/calendar.png" style={{ width: '25px' }}></img><br></br>
                                <span className="leftsidemenu">Attendance</span>
                            </a>
                            <ul className="sub-menu" style={{ display: attendancemenu ? "contents" : "none" }}>
                                <li style={{ fontSize: '25px' }}><Link to="/attendance" className="nav-link" style={{ padding: '8px' }}>Attendance</Link></li>
                                <li style={{ fontSize: '25px' }}><Link to="/leaveapplication" className="nav-link" style={{ padding: '8px' }}>Leave Application</Link></li>
                            </ul>
                        </li>

                        <li style={{ backgroundColor: payrollmenu ? "white" : "" }}>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }} onClick={handlepayrollmenu}>
                                <img className="bi bi-search" src="/wages.png" style={{ width: '25px' }}></img><br></br>
                                <span className="leftsidemenu">PayRoll</span>
                            </a>
                            <ul className="sub-menu" style={{ display: payrollmenu ? "contents" : "none" }}>
                                <li style={{ fontSize: '25px' }}><Link to="/listpayroll" className="nav-link" style={{ padding: '8px' }}>List PayRoll</Link></li>
                                <li style={{ fontSize: '25px' }}><Link to="/addpayroll" className="nav-link" style={{ padding: '8px' }}>Add PayRoll</Link></li>
                                <li style={{ fontSize: '25px' }}><Link to="/payslip" className="nav-link" style={{ padding: '8px' }}>Pay Slips</Link></li>
                                <li style={{ fontSize: '25px' }}><Link to="/salarystructure" className="nav-link" style={{ padding: '8px' }}>Salary Structure</Link></li>
                            </ul>
                        </li>

                            <li>
                                <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>
                                    <img className="bi bi-search" src="/service.png" style={{ width: '25px' }}></img><br></br>
                                    <span className="leftsidemenu"> Services</span>
                                        
                                </a>
                            </li>

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>

                                <img className="bi bi-search" src="/report.png" style={{ width: '25px' }}></img><br></br>
                                <span className="leftsidemenu">Reports</span>
                                </a>
                               
                            </li>

                        <li>
                            <a href="#" className="text-center">
                                <img className="bi bi-search" src="/logout.png" style={{ width: '25px' }}></img><br></br>
                                <span className="leftsidemenu">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*<!-- Sidebar -->*/}
                </div>
            </div>
            //<!-- Left Sidebar End-- >
    )
}
export default LeftSideBar;