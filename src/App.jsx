
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

// import '@fortawesome/fontawesome-free/css/all.min.css';
import '/src/assets/styles/WorkNyle2.css';
import AddEmployee from './components/AddEmployee';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RightSide from './components/RightSide';
import { Routes, Route } from "react-router"
import EmployeeList from './components/EmployeeList';
import Form from './components/Form';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context/UserContext";
import LoginPage from './components/LoginPage';
import Attendance from './components/Attendance';
import AddPayRoll from './components/AddPayRoll';
import ListPayRolls from './components/ListPayRolls';
import ListPurchase from './components/ListPurchase';
import PaySlip from './components/PaySlip';
import SalaryStructure from './components/SalaryStructure';

function App() {

    const { showmenu } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setLoading(true);
        }, [2000])
    }, [])
    //const [forecasts, setForecasts] = useState();

    //useEffect(() => {
    //    populateWeatherData();
    //}, []);

    //const contents = forecasts === undefined
    //    ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
    //    : <table className="table table-striped" aria-labelledby="tableLabel">
    //        <thead>
    //            <tr>
    //                <th>Date</th>
    //                <th>Temp. (C)</th>
    //                <th>Temp. (F)</th>
    //                <th>Summary</th>
    //            </tr>
    //        </thead>
    //        <tbody>
    //            {forecasts.map(forecast =>
    //                <tr key={forecast.date}>
    //                    <td>{forecast.date}</td>
    //                    <td>{forecast.temperatureC}</td>
    //                    <td>{forecast.temperatureF}</td>
    //                    <td>{forecast.summary}</td>
    //                </tr>
    //            )}
    //        </tbody>
    //    </table>;

    return (
        //<>
        //<div>
        //    <h1 id="tableLabel">Weather forecast</h1>
        //    <p>This component demonstrates fetching data from the server.</p>
        //    {contents}
        //</div>
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
                <Route path="/form" element={<Form></Form>}></Route> 
                <Route path="/" element={loading ? <LoginPage /> : <img id='loader-image' src="preloader.gif"  />} ></Route>
                <Route path="/attendance" element={<Attendance />}></Route>
                <Route path="/addpayroll" element={<AddPayRoll />}></Route>
                <Route path="/listpayroll" element={<ListPayRolls />}></Route>
                <Route path="/listpurchase" element={<ListPurchase />}></Route>
                <Route path="/payslip" element={<PaySlip />}></Route>
                <Route path="/salarystructure" element={<SalaryStructure/> }></Route>
            </Routes>
            
        </>
    );    
    //async function populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    if (response.ok) {
    //        const data = await response.json();
    //        setForecasts(data);
    //    }
    //}
}
export default App;