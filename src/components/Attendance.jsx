import { useContext } from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import { UserContext } from "../Context/UserContext";
// import { PieChart, Pie, Cell,Tooltip } from "recharts";


const Attendance = () => {

    // const casualLeavesdata = [
    //     { name: "Used", value: 5 }, // Adjust values as per your requirement
    //     { name: "Remaining", value: 10 },
    // ];
    // const COLORS = ["orange", "#C6C6C6"] // Yellow and Gray colors

    // const sickLeaveData = [
    //     { name: "used", value: 2 },
    //     { name: "Remaining", value: 9 }
    // ];
    // const COLORS1 = ["#d1d5db", "#F87113"];

    // const earnLeaveData = [
    //     { name: "used", value: 7 },
    //     { name: "Remaining", value: 10 },
    //     {name:"carry forword", value:3}
    // ];
    // const COLORS2 = ["#d1d5db", "#89CDD1","#3EA8AE"];

    // const losOfPayData = [
    //     { name: "This month", value: 4 },
    //     { name: "Last months", value: 1 },
    //     { name: "Total", value: 5 }
    // ];
    // const COLORS3 = ["#d1d5db", "#8DE0B8","#2BC179"];

    const { showmenu } = useContext(UserContext);

    const attendanceData = [
        { type: 'Sick Leave', from: '12-JAN-2024', to: '15-JAN-2024', approver: 'Manager Name', status: 'APPROVED' },
        { type: 'Casual Leave', from: '18-FEB-2024', to: '19-FEB-2024', approver: 'Supervisor Name', status: 'REJECTED' },
        { type: 'Annual Leave', from: '20-MAR-2024', to: '25-MAR-2024', approver: 'Director Name', status: 'APPROVED' },
        { type: 'Maternity Leave', from: '01-APR-2024', to: '30-JUN-2024', approver: 'HR Head', status: 'APPROVED' },
        { type: 'Paternity Leave', from: '10-MAY-2024', to: '15-MAY-2024', approver: 'HR Head', status: 'REJECTED' },
        { type: 'Study Leave', from: '05-JUN-2024', to: '10-JUN-2024', approver: 'Manager Name', status: 'REJECTED' },
        { type: 'Sick Leave', from: '15-JUL-2024', to: '20-JUL-2024', approver: 'Manager Name', status: 'APPROVED' },
        { type: 'Casual Leave', from: '02-AUG-2024', to: '03-AUG-2024', approver: 'Supervisor Name', status: 'APPROVED' },
        { type: 'Annual Leave', from: '10-SEP-2024', to: '15-SEP-2024', approver: 'Director Name', status: 'REJECTED' },
        { type: 'Maternity Leave', from: '01-OCT-2024', to: '31-OCT-2024', approver: 'HR Head', status: 'APPROVED' },
        { type: 'Paternity Leave', from: '10-NOV-2024', to: '15-NOV-2024', approver: 'HR Head', status: 'APPROVED' },
        { type: 'Study Leave', from: '05-DEC-2024', to: '10-DEC-2024', approver: 'Manager Name', status: 'REJECTED' }
    ];
    return (
        <>
            <Header />
            {showmenu && <LeftSideBar/>}
            <div style={{ backgroundColor: "#f6f6f6",paddingTop:"5rem", marginLeft: showmenu ? '130px' : '0px' }} >
                <div className="heading-bar">
                    <p className="main-heading m-2 ml-4">Attendance</p>
                </div>
                <div className="p-4">
                    <div>
                        <h1 className="leave-card-heading mb-3">Leave Management</h1>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-6 col-xl-3">
                                <div className="leave-card leave-details d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h1 className="leave-card-heading">Casual Leaves</h1>
                                        <ul>
                                            <li className="consumed-list"><span className="leave-card-list">Consumed: 05</span></li>
                                            <li className="casual-available-list"><span className="leave-card-list">Available: 10</span></li>
                                        </ul>
                                    </div>
                                    <canvas id="casualLeaveChart" className="ml-3"></canvas>
                                    {/* <PieChart width={120} height={120}>
                                        <Pie
                                            data={casualLeavesdata}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={35}
                                            outerRadius={50}
                                            startAngle={90}
                                            endAngle={-270}
                                            dataKey="value"
                                        >
                                            {casualLeavesdata.map((entry, index) => (
                                                <Cell key = {`cell-${index}`} fill={COLORS[index]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart> */}
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-3">
                                <div className="leave-card leave-details d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h1 className="leave-card-heading">Sick Leaves</h1>
                                        <ul>
                                            <li className="consumed-list"><span className="leave-card-list">Consumed: 02</span></li>
                                            <li className="sick-available-list"><span className="leave-card-list">Available: 9</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <canvas id="casualLeaveChart" className="ml-3"></canvas>
                                        {/* <PieChart width={120} height={120}>
                                            <Pie
                                                innerRadius={35}
                                                outerRadius={50}
                                                startAngle={90}
                                                endAngle={-270 }
                                                cx="50%"
                                                cy="50%"
                                                data={sickLeaveData}
                                                dataKey="value"
                                            >
                                                {
                                                    sickLeaveData.map((element, index) => {
                                                        return(
                                                            <Cell key={index} fill={COLORS1[index]} />
                                                        )
                                                    })
                                                }
                                            </Pie>
                                            <Tooltip/>
                                        </PieChart> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-3">
                                <div className="leave-card leave-details d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h1 className="leave-card-heading">Earned Leaves</h1>
                                        <ul>
                                            <li className="consumed-list"><span className="leave-card-list">Consumed: 07</span></li>
                                            <li className="earned-available-list"><span className="leave-card-list">Available: 10</span></li>
                                            <li className="carry-forward-list"><span className="leave-card-list">Carry Forward : 03</span></li>
                                        </ul>
                                    </div>
                                    <canvas id="casualLeaveChart" className="ml-3"></canvas>
                                    {/* <PieChart width={120} height={120 }>
                                        <Pie
                                            data={earnLeaveData}
                                            dataKey="value"
                                            innerRadius={35}
                                            outerRadius={50}
                                            cx="50%"
                                            cy="50%"
                                            startAngle={90}
                                            endAngle={-270 }
                                        >
                                            {
                                                earnLeaveData.map((element, index) => {
                                                    return (
                                                        <Cell key={index} fill={COLORS2[index]} />
                                                    )
                                                })
                                            }</Pie>
                                        <Tooltip/>
                                    </PieChart> */}
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-3">
                                <div className="leave-card leave-details d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h1 className="leave-card-heading">Loss Of Pay</h1>
                                        <ul>
                                            <li className="consumed-list"><span className="leave-card-list">This Month : 04</span></li>
                                            <li className="loss-lst-mnth-list"><span className="leave-card-list">Last Month: 01</span></li>
                                            <li className="loss-total-list"><span className="leave-card-list">Total : 05</span></li>
                                        </ul>
                                    </div>
                                    <canvas id="casualLeaveChart" className="ml-3"></canvas>
                                    {/* <PieChart width={120} height={120 }>
                                        <Pie
                                            data={losOfPayData}
                                            dataKey="value"
                                            innerRadius={35}
                                            outerRadius={50}
                                            startAngle={90}
                                            endAngle={-270 }
                                        >
                                            {
                                                losOfPayData.map((element, index) => {
                                                    return (
                                                        <Cell key={index} fill={COLORS3[index]} />
                                                    )
                                                })
                                            }
                                        </Pie>
                                        <Tooltip/>
                                    </PieChart> */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-9 table-responsive">
                                <table className="leave-table mt-3" style={{ width: "100%" }} >
                                    <thead>
                                        <tr>
                                            <th>Leave Type</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Approver</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody id="attendancetableBody">
                                        {/*<!-- Dynamic Rows Will Be Inserted Here -->*/}
                                        {
                                            attendanceData.map((element, index) => {
                                                return (
                                                    <tr key={index} className="tablebody">
                                                        <td>{element.type}</td>
                                                        <td>{element.from}</td>
                                                        <td>{element.to}</td>
                                                        <td>{element.approver}</td>
                                                        <td style={{ color: element.status == "APPROVED" ? "green" : "red", fontWeight: 'bold' }}>
                                                            {element.status}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div id="moreLink" className="text-right more-link" style={{ display: "none" }} onClick="showMoreRows()">More</div>
                            </div>

                            <div className="col-12 col-lg-3 mt-3">
                                <h1 className="leave-card-heading">Loss Of Pay</h1>
                                <table className="holiday-table" style={{ width: "100%" }} >
                                    <tr className="tablebody">
                                        <td>17-JUN-2024</td>
                                        <td>Bakrid Eid</td>
                                    </tr>
                                    <tr className="tablebody">
                                        <td>17-JUL-2024</td>
                                        <td>Muharram</td>
                                    </tr>
                                    <tr className="tablebody">
                                        <td>15-AUG-2024</td>
                                        <td>Independence Day</td>
                                    </tr>
                                    <tr className="tablebody">
                                        <td>16-AUG-2024</td>
                                        <td>Varalakshmi Vratham</td>
                                    </tr>
                                    <tr className="tablebody">
                                        <td>19-AUG-2024</td>
                                        <td>Raksha Bandhan</td>
                                    </tr>
                                    <tr className="tablebody">
                                        <td>26-AUG-2024</td>
                                        <td>Janmashtami</td>
                                    </tr>
                                    <tr className="tablebody">
                                        <td>02-OCT-2024</td>
                                        <td>Gandhi Jayanthi</td>
                                    </tr>
                                    <tr className="tablebody">
                                        <td>31-OCT-2024</td>
                                        <td>Diwali / Deepavali</td>
                                    </tr>
                                    <tr className="tablebody">
                                        <td>25-DEC-2024</td>
                                        <td>Christmas</td>
                                    </tr>
                                </table>
                                <div id="moreLink2" className="text-right more-link" style={{ display: "none" }} onClick="showMoreRows()">More</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Attendance;