import { Link } from "react-router-dom";

const LeftSideBar = () => {

    //const [employeemenu, setEmployeeMenu] = useState(false);
    //const [attendancemenu, setAttendanceMenu] = useState(false);
    //const [payrollmenu, setPayRollMenu] = useState(false);

    //const handleEmployeemenu = () => {
    //    setEmployeeMenu(!employeemenu);
    //    setAttendanceMenu(false);
    //    setPayRollMenu(false);
    //}
    //const handleattendancemenu = () => {
    //    setEmployeeMenu(false);
    //    setAttendanceMenu(!attendancemenu);
    //    setPayRollMenu(false);
    //}
    //const handlepayrollmenu = () => {
    //    setEmployeeMenu(false);
    //    setAttendanceMenu(false);
    //    setPayRollMenu(!payrollmenu);
    //}

    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">

                {/*<!--- Sidemenu -->*/}
                <div id="sidebar-menu" >
                    {/*<!-- Left Menu Start -->*/}
                    <ul className="metismenu list-unstyled" id="side-menu" >
                        {/*<!-- <li className="menu-title">Main</li> -->*/}

                        <li>
                            <a href="/" className="waves-effect text-center" style={{ padding: '8px' }} >

                                <img className="bi bi-columns-gap" src="/dashboard.png" style={{ width: '23px' }}></img><br></br>
                                <span className="leftsidemenu"> Dashboard </span>
                            </a>
                        </li>
                        <li>
                            <span></span>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }} >
                                <img className="bi bi-search" src="/employee 2.png" style={{ width: '25px' }}></img><br></br>
                                <span className="leftsidemenu">Employment</span>
                            </a>
                            
                            <ul className="sub-menu">
                                <li ><Link to="/employeelist" className="nav-link" style={{ padding: '8px' }}>List Employee</Link></li>
                                <li ><Link to="/addemployee" className="nav-link" style={{ padding: '8px' }}>Add Employee</Link></li>
                            </ul>

                        </li>
                        
                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }} >
                                <img className="bi bi-search" src="/calendar.png" style={{ width: '25px' }}></img><br></br>
                                <span className="leftsidemenu">Attendance</span>
                            </a>
                            <ul className="sub-menu">
                                <li ><Link to="/attendance" className="nav-link" style={{ padding: '8px' }}>Attendance</Link></li>
                                <li ><Link to="/leaveapplication" className="nav-link" style={{ padding: '0px' }}>Leave Application</Link></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }} >
                                <img className="bi bi-search" src="/wages.png" style={{ width: '26px' }}></img><br></br>
                                <span className="leftsidemenu">PayRoll</span>
                            </a>
                            <ul className="sub-menu">
                                <li ><Link to="/listpayroll" className="nav-link" style={{ padding: '8px' }}>List PayRoll</Link></li>
                                <li ><Link to="/addpayroll" className="nav-link" style={{ padding: '8px' }}>Add PayRoll</Link></li>
                                <li ><Link to="/payslip" className="nav-link" style={{ padding: '8px' }}>Pay Slips</Link></li>
                                <li ><Link to="/salarystructure" className="nav-link" style={{ padding: '8px' }}>Salary Structure</Link></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>
                                <img className="bi bi-search" src="/service.png" style={{ width: '28px' }}></img><br></br>
                                <span className="leftsidemenu"> Services</span>

                            </a>
                        </li>

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>

                                <img className="bi bi-search" src="/report.png" style={{ width: '26px' }}></img><br></br>
                                <span className="leftsidemenu">Reports</span>
                            </a>

                        </li>

                        <li>
                            <a href="#" className="text-center" style={{ padding: "1.2rem 0.5rem" }}>
                                <img className="bi bi-search" src="/logout.png" style={{ width: '25.5px' }}></img><br></br>
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