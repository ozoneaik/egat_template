import Layout from "../../layouts/Layout.jsx";

export default function PR_main(){
    return (
        <Layout>
            <div className={'row'}>
                <div className={'col-lg-2'}>
                    <div className={'card mb-3'} style={{backgroundColor:'#2A529C',color:"white"}}>
                        <div className={'card-body'}>
                            <div className={'d-flex justify-content-between align-items-center mb-2'}>
                                <div className={''}>
                                    <i className="fa-solid fa-spinner bg-white rounded-circle me-2 p-2" style={{color:'#2A529C',height:32,width:32}}></i>
                                    <span style={{fontSize:14,fontWeight:300}}>ขั้นตอนที่ 1</span>
                                </div>
                                <div><i className="fa-solid fa-pen"></i></div>
                            </div>
                            <p style={{marginBottom:10}}>ระบุวงเงิน / เลือกวิธีจัดหา</p>
                            <button className={'btn btn-secondary'} style={{borderRadius:'var(--rounded-full, 1000px)',backgroundColor:'#748fc3',fontSize:12}}>แบบร่าง</button>
                        </div>
                    </div>
                    <div className={'card mb-3'} style={{backgroundColor:'#f9fafb',color:"#6B7280"}}>
                        <div className={'card-body'}>
                            <div className={'d-flex justify-content-between align-items-center mb-2'}>
                                <div className={''}>
                                    <i className="fa-regular fa-money-check-pen rounded-circle me-2 p-2" style={{color:'#A9A6A6',backgroundColor:'#ededed',height:32,width:32}}></i>
                                    <span style={{fontSize:14,fontWeight:300}}>ขั้นตอนที่ 2</span>
                                </div>
                            </div>
                            <p style={{marginBottom:10}}>สร้างแผนขอจัดซื้อ/จัดจ้าง</p>
                            <button className={'btn'} style={{borderRadius:'var(--rounded-full, 1000px)',backgroundColor:'#EDEDED',fontSize:12,color:'#A9A6A6'}}>รอดำเนินการ</button>
                        </div>
                    </div>
                    <div className={'card mb-3'} style={{backgroundColor:'#f9fafb',color:"#6B7280"}}>
                        <div className={'card-body'}>
                            <div className={'d-flex justify-content-between align-items-center mb-2'}>
                                <div className={''}>
                                    <i className="fa-regular fa-money-check-pen rounded-circle me-2 p-2" style={{color:'#A9A6A6',backgroundColor:'#ededed',height:32,width:32}}></i>
                                    <span style={{fontSize:14,fontWeight:300}}>ขั้นตอนที่ 3</span>
                                </div>
                            </div>
                            <p style={{marginBottom:10}}>สร้างเอกสารขอบเขตงาน (TOR)</p>
                            <button className={'btn'} style={{borderRadius:'var(--rounded-full, 1000px)',backgroundColor:'#EDEDED',fontSize:12,color:'#A9A6A6'}}>รอดำเนินการ</button>
                        </div>
                    </div>

                </div>
                <div className={'col-lg-10'}>
                    <div className={'card border-0'} style={{boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)'}}>
                        <div className={'card-header py-3'} style={{backgroundColor: '#2A529C',color:"white"}}>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <div id={'left'} className={'d-flex align-items-center'}>
                                    <div className={'bg-warning py-1 px-2 me-3'} style={{borderRadius:'0 12px 12px 0px'}}>
                                        <i className="fa-solid fa-angle-left" style={{color:"black"}}></i>
                                    </div>
                                    <div>
                                        <p className={'m-0 p-0'} style={{fontSize:14,fontWeight:400,color:'#C1E2FA'}}>สำหรับงานจัดซื้อจัดจ้างเชิงพาณิชย์ </p>
                                        <h4 className={'m-0 p-0'} style={{fontSize:20,fontWeight:400,color:'#F5F5F5'}}>วงเงินงบประมาณ</h4>
                                    </div>
                                </div>
                                <div id={'right'} style={{backgroundColor:'#163773',padding:'12px 20px',borderRadius:8,fontSize:14}}>
                                    <i className="fa-solid fa-house me-2"></i>
                                    <span className={'me-2'}>Home</span>
                                    <i className="fa-solid fa-angle-right me-2"></i>
                                    <span className={'me-2'}>PR</span>
                                    <i className="fa-solid fa-angle-right me-2"></i>
                                    <span>สร้างเอกสารสำหรับขอจัดซื้อ/จัดจ้าง</span>
                                </div>
                            </div>
                        </div>
                        <div className={'card-body'}>
                            <div className={'row mb-3'}>
                                <div className={'col-lg-12'}>
                                    <span style={{fontSize:12,fontWeight:500,color:'#2A529C'}}>เลือกวิธีการจัดหา งบประมาณสำหรับการจัดซื้อ หรือ จัดจ้าง</span>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-lg-6'}>
                                    <div className={'form-group'} style={{fontSize:14}}>
                                        <label className={'mb-1'}><span className={'text-danger'}>*</span>วงเงินงบประมาณ (รวม VAT)</label>
                                        <div className={'input-group mb-1'}>
                                            <input type="text" className={'form-control'} value={'32,100,000.00 บาท'}/>
                                            <span className={'input-group-text bg-none'}><i className="fa-solid fa-arrow-up-arrow-down"></i></span>
                                        </div>

                                        <span style={{color:'#A9A6A6'}}>ระบุจำนวนวงเงินงบประมาณ</span>
                                    </div>
                                </div>
                                <div className={'col-lg-6'}>
                                    <div className={'form-group'} style={{fontSize:14}}>
                                        <label className={'mb-1'}>เลือกวิธีการจัดหา</label>
                                        <div className={'input-group mb-1'}>
                                            <span className={'input-group-text'}><i className="fa-solid fa-magnifying-glass"></i></span>
                                            <input type="text" className={'form-control'} value={'วิธีการจัดหา'}/>
                                            <span className={'input-group-text bg-none'}><i className="fa-solid fa-chevron-down"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className={'border'}/>
                            <div className={'row'}>
                                <div className={'d-flex justify-content-between align-items-center'} >
                                    <button className={'btn btn-outline-primary px-4'} style={{fontSize:14,border:'solid 1px #2A529C',color:'#2A529C'}}>ย้อนกลับ</button>
                                    <button className={'btn btn-primary px-4'} style={{fontSize:14,backgroundColor:'#2A529C'}}>ถัดไป</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
