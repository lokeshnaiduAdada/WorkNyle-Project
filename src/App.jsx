import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
function App() {

    return (
        <>
            <Routes>
                <Route path="/fetch" element={
                    <>
                        <Header />
                        <LeftSideBar />
                        <RightSide/>
                    </>
                }></Route>
                <Route path="/" element={<Form></Form>}></Route>                
            </Routes>            
        </>
  )
}
export default App
