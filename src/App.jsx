import './App.css'
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
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RightSide from './components/RightSide';
import { Routes, Route } from "react-router"
import Form from './components/Form';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context/UserContext";
import LoginPage from './components/LoginPage';
function App() {

    const { showmenu } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setLoading(true);
        }, [2000])
    },[])

    return (
        <>
            <Routes>
                
                <Route path="/fetch" element={
                    <>
                       < Header />
                        {
                            showmenu && <LeftSideBar />
                        }
                            <RightSide/>
                    </>
                }></Route>
                <Route path="/form" element={<Form></Form>}></Route> need to change path
                <Route path="/" element={loading ? <LoginPage /> :  <img id='loader-image' src="../src/assets/images/preloader.gif"/>} ></Route>
            </Routes>            
        </>
  )
}
export default App
