import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const Header = () => {

    const { setShowMenu } = useContext(UserContext);

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [menu, setMenu] = useState(false);

    const handleMenuButton = () => {
        setMenu(!menu)
        setShowMenu(menu);
    }

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
        } else {
            document.exitFullscreen();
            setIsFullScreen(false);
        }
    };
    return (
        <div data-topbar="dark">

            <div id="layout-wrapper">
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box" >

                                <a href="#" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="logo-light.png" alt="" height="24" style={{ marginBottom: "5px", marginLeft: "20px" }} />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="worknylelogo-white-01-01 1.png" alt="" height="34" style={{ marginBottom: "5px", marginLeft: "2px" }} />
                                    </span>
                                </a>
                            </div>

                            <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn" onClick={handleMenuButton }>
                                {/*<i className="mdi mdi-menu"></i>*/}
                                <i className="bi bi-list" style={{ color: '#FFFFFF' }}></i>
                            </button>
                        </div>


                        <div className="d-flex">
                            <div className="dropdown d-inline-block" style={{ width: '130px', paddingRight: '0px' }} >
                                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'white', borderStyle: "none", backgroundColor: "#FFB12E" }}>
                                    User Name <i className="bi bi-arrow-down-short"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">

                                    <a className="dropdown-item" href="#">Profile</a>
                                    <a className="dropdown-item text-danger" href="#">Logout</a>
                                </div>
                            </div>

                            <div className="dropdown d-none d-lg-inline-block me-2" style={{ width: '60px', paddingRight: '0px' }}>
                                <button
                                    type="button"
                                    className="btn header-item noti-icon waves-effect"
                                    onClick={toggleFullScreen}>
                                    <i className={`bi ${isFullScreen ? "bi-fullscreen-exit" : "bi-fullscreen"}`} style={{ color: '#FFFFFF' }}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </div>
    )
}
export default Header;