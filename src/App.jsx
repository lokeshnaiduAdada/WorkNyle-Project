
import './App.css';
import '/src/assets/styles/login-style2.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/assets/styles/formstyles.css';
import '/src/assets/styles/app.min.css';
import '/src/assets/styles/app-rtl.min.css';
import '/src/assets/styles/Attendance.css';
import '/src/assets/styles/bootstrap.min.css';
import '/src/assets/styles/icons.min.css';
import '/src/assets/styles/index.css';
import '/src/assets/styles/layout.css';
import '/src/assets/styles/WorkNyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import '@fortawesome/fontawesome-free/css/all.min.css';
import '/src/assets/styles/WorkNyle2.css';
import AddEmployee from './components/AddEmployee';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RightSide from './components/RightSide';
import { Routes, Route } from "react-router"
import EmployeeList from './components/EmployeeList';
//import Form from './components/Form';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context/UserContext";
import LoginPage from './components/LoginPage';
import Attendance from './components/Attendance';
import AddPayRoll from './components/AddPayRoll';
import ListPayRolls from './components/ListPayRolls';
import ListPurchase from './components/ListPurchase';
import PaySlip from './components/PaySlip';
import SalaryStructure from './components/SalaryStructure';
import LeaveApplication from './components/LeaveApplication';

function App() {

    const { showmenu } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setLoading(true);
        }, [2000])
    }, [])

    return (
        <>
            <Routes>
                <Route path="/addemployee" element={<AddEmployee />}></Route>
                <Route path="/employeelist" element={<EmployeeList />}></Route>
                <Route path="/fetch" element={
                    <>
                        < Header />
                        {
                            showmenu && <LeftSideBar />
                        }
                        <RightSide />
                    </>
                }></Route>
                {/*<Route path="/form" element={<Form></Form>}></Route> */}
                <Route path="/" element={loading ? <LoginPage /> : <img id='loader-image' src="preloader.gif"  />} ></Route>
                <Route path="/attendance" element={<Attendance />}></Route>
                <Route path="/leaveapplication" element={<LeaveApplication/> }></Route>
                <Route path="/addpayroll" element={<AddPayRoll />}></Route>
                <Route path="/listpayroll" element={<ListPayRolls />}></Route>
                <Route path="/listpurchase" element={<ListPurchase />}></Route>
                <Route path="/payslip" element={<PaySlip />}></Route>
                <Route path="/salarystructure" element={<SalaryStructure/> }></Route>
            </Routes>
            
        </>
    );
}
export default App;