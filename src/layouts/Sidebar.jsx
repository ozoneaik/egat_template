import {Link, useLocation} from "react-router-dom";
import {useRef} from "react";

export default function Sidebar(){

    const location = useLocation()
    const path = location.pathname

    const isDashboardActive = path.includes("/dashboard");
    const isProjectsActive = path.includes("/projects");
    const isMessagesActive = path.includes("/messages");
    const isSettingsActive = path.includes("/settings");
    const isNotificationsActive = path.includes("/notifications");
    const isPRActive = path.includes("/pr");

    const sidebarRef = useRef(null)

    function hideMenu(){
        sidebarRef.current.classList.remove('active');
    }

    return (
        <div className="sidebar" id="side_nav" ref={sidebarRef}>
            <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
                <h1 className="fs-4">
                    <span className="bg-white text-dark rounded shadow px-2 me-2">CL</span>
                    <span className="text-white">Coding League</span>
                </h1>
                <button onClick={()=>hideMenu()} className="btn d-md-none d-block close-btn px-1 py-0 text-white">
                    <i className="fal fa-stream"></i>
                </button>
            </div>

            <ul className="list-unstyled px-2 pt-3">
                <li className={''}>
                    <Link to={''} className={"text-decoration-none px-3 py-2 d-block"}>
                        <i className="fa-solid fa-chart-pie"></i>&nbsp;ภาพรวมจัดซื้อจัดจ้าง
                    </Link>
                </li>
                <li className={isPRActive ? 'active' : ''}>
                    <Link to={'/pr'} className={"text-decoration-none px-3 py-2 d-block"}>
                        <i className="fa-regular fa-credit-card"></i>&nbsp;PR (Purchase Requistion)
                    </Link>
                </li>
                <li className={isDashboardActive ? "active" : ""}>
                    <Link to={'/dashboard/'} className={"text-decoration-none px-3 py-2 d-block"}>
                        <i className="fal fa-home"></i>&nbsp;Dashboard
                    </Link>
                </li>
                <li className={isProjectsActive ? "active" : ""}>
                    <Link to={'/projects/'} className="text-decoration-none px-3 py-2 d-block">
                        <i className="fal fa-list"></i>&nbsp;Projects
                    </Link>
                </li>
                <li className={isMessagesActive ? "active" : ""}>
                    <Link to={'/messages/'} className="text-decoration-none px-3 py-2 d-block d-flex justify-content-between">
                        <span><i className="fal fa-comment"></i>&nbsp;Messages</span>
                        <span className="bg-dark rounded-pill text-white py-0 px-2">02</span>
                    </Link>
                </li>
            </ul>
            <hr className="h-color mx-2"/>
            <ul className="list-unstyled px-2">
                <li className={isSettingsActive ? "active" : ""}>
                    <Link to={'/settings/'} className="text-decoration-none px-3 py-2 d-block">
                        <i className="fal fa-bars"></i>&nbsp;Settings
                    </Link>
                </li>
                <li className={isNotificationsActive ? "active" : ""}>
                    <Link to={'/notifications/'} className="text-decoration-none px-3 py-2 d-block">
                        <i className="fal fa-bell"></i>&nbsp;Notifications
                    </Link>
                </li>
            </ul>
        </div>
    )
}