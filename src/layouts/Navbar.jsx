import $ from 'jquery'
import {useRef} from "react";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({children}){

    const sidebarRef = useRef(null)
    function showMenu(){
        $('.open-btn').on('click', function () {
            $('.sidebar').addClass('active');
        });
        // sidebarRef.current.classList.add('active');
    }

    return (
        <div className="content">
            <nav className="navbar navbar-expand-md navbar-light bg-white" style={{borderBottom: '4px solid var(--primary-Primary-2, #FFCC2A'}}>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between d-md-none d-block">
                        <button onClick={()=>showMenu()} className="btn px-1 py-0 open-btn me-2">
                            <i className="fal fa-stream"></i>
                        </button>
                        <a className="navbar-brand fs-4" href="#">
                            <span className="bg-dark rounded px-2 py-0 text-white">CL</span>
                        </a>

                    </div>
                    <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fal fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <div className={'ms-2'}>
                            <p className={'p-0 m-0'} style={{fontSize:20,fontWeight:400,lineHeight:"normal"}}>สร้างเอกสารสำหรับงานจัดซื้อจัดจ้าง</p>
                            <p className={'p-0 m-0'} style={{fontSize:14,fontWeight:300,lineHeight:'150%',color:'#888888'}}>สำหรับงานจัดซื้อจัดจ้างเชิงพาณิชย์</p>
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/dashboard'} className="nav-link active btn btn-warning px-3" aria-current="page" href="#">
                                    <i className="fa-solid fa-clock me-2"></i>
                                    <span style={{fontSize:14}}>ประวัติเวอร์ชัน</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*Content*/}
            <div className="dashboard-content px-4 pt-4">
                {children}
            </div>
            {/* End Content */}
        </div>
    )
}