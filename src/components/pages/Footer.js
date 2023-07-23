import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <section id="footer" className='mt-5' width="auto" heigth="auto">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-3 col-12">
                                <h3 style={{fontSize:"25px",fontWeight:"600"}}>INDUSTRY</h3>
                                <div className='footer-content'>
                                    <p>InfoLabz IT Services Pvt. Ltd. is a leading IT company that provides technical solutions and services. We strive to provide you with innovative and client-focused solutions.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-12">
                                <h3 className='footer-head'>Quick Links</h3>
                                <ul>
                                    <li className='mt-2' style={{listStyleType:"none"}}>
                                        <NavLink to="/" className="footer-navbar">Home</NavLink>
                                    </li>
                                    <li className='mt-2' style={{listStyleType:"none"}}>
                                        <NavLink to="/about" className="footer-navbar">About</NavLink>
                                    </li>
                                    <li className='mt-2' style={{listStyleType:"none"}}>
                                        <NavLink to="/service" className="footer-navbar">Service</NavLink>
                                    </li>
                                    <li className='mt-2'style={{listStyleType:"none"}}>
                                        <NavLink to="/contact" className="footer-navbar">Contact</NavLink>
                                    </li>
                                    <li className='mt-2' style={{listStyleType:"none"}}>
                                        <NavLink to="/login" className="footer-navbar">Login/Reg</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12">
                                <h6><PhoneInTalkOutlinedIcon sx={{fontSize:35,marginRight:"20px"}} /><span className="footer-head">Phone</span></h6>
                                <div className='mt-3 mx-4 footer-address'>
                                <h6 className='mx-4'>8866662670</h6>
                                <h6 className='mx-4'>8866662670</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-12">
                            <h6><LocationOnOutlinedIcon className='footerhead-icon' /><span className="footer-head">Address</span></h6>
                               <div className='mt-3 mx-4 footer-address'>
                                <h6>410 Vraj Apartment, Above SAM'S</h6>
                                <h6>Pizza, Nr Commerce Six Road,</h6>
                                <h6>Navrangpura Ahmedabad,380009</h6>
                               </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-5 col-md-5 col-12">
                                <p style={{fontSize:"18px"}}>© 2022 All rights reserved by InfoLabz IT Services Pvt. Ltd.</p>
                            </div>
                            <div className="col-lg-3 offset-lg-4 col-md-5 col-12 align-self-end">
                                <h6 style={{cursor:"pointer",marginBottom:"10px"}}>
                                <span><TwitterIcon className="footer-icon" sx={{"&:hover":{transform:"translateY(-0.15rem)",color:"blue"}}} /></span>
                                <span className='mx-4'><FacebookIcon className="footer-icon" sx={{"&:hover":{transform:"translateY(-0.15rem)",color:"blue"}}}/></span>
                                <span><LinkedInIcon className="footer-icon" sx={{"&:hover":{transform:"translateY(-0.15rem)",color:"blue"}}}/></span>
                                <span className='mx-4'><InstagramIcon className="footer-icon" sx={{"&:hover":{transform:"translateY(-0.15rem)",color:"blue"}}}/></span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer