

const LeftSideBar = () => {

    

    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">

                {/*<!--- Sidemenu -->*/}
                <div id="sidebar-menu" >
                    {/*<!-- Left Menu Start -->*/}
                    <ul className="metismenu list-unstyled" id="side-menu" >
                        {/*<!-- <li className="menu-title">Main</li> -->*/}

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding:'8px' }}>

                                <i className="bi bi-columns-gap" style={{ fontSize: '20px' }}></i><br></br>
                                    <span> Dashboard </span>
                                </a>
                            </li>
                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>
                                <i className="bi bi-search" style={{ fontSize: '20px' }}></i><br></br>
                                    <span>Employment</span>
                            </a>
                            <ul className="sub-menu">
                                <li style={{ fontSize: '25px' }}><a href="LeaveApplication.html" className="nav-link" style={{ padding: '8px' }}>List Employee</a></li>
                                <li style={{ fontSize: '25px' }}><a className="nav-link" style={{ padding: '8px' }}>Add Employee</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>
                                <i className="bi bi-calendar-check" style={{ fontSize: '20px' }}></i><br></br>
                                    <span> Attendance </span>
                                </a>
                            </li>

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>
                                <i className="bi bi-suitcase-lg" style={{ fontSize: '20px' }}></i><br></br>
                                    <span> Payroll </span>
                                </a>
                            </li>

                            <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>
                                <i className="bi bi-gear-fill" style={{ fontSize: '20px' }}></i><br></br>
                                    <span> Services</span>
                                    
                                </a>
                            </li>

                        <li>
                            <a href="#" className="waves-effect text-center" style={{ padding: '8px' }}>

                                <i className="bi bi-journals" style={{ fontSize: '20px' }}></i><br></br>
                                    <span>Reports</span>
                                </a>
                               
                            </li>

                        <li>
                            <a href="#" className="text-center">
                                <i className="bi bi-box-arrow-right" style={{ fontSize: '20px' }}></i><br></br>
                                    <span> Logout</span>
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