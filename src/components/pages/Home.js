import { Button } from "@mui/material"
import Home1 from "../../images/home1.png"
import Python from "../../images/python.png"
// import Flutter from "../../images/flutter.png"
import React from "../../images/react.png"
import Ds from "../../images/datascience.png"
import Android from "../../images/android.png"
import Php from "../../images/php.png"
import Iot from "../../images/iot.png"
import Home2 from "../../images/home2.png"
import Home3 from "../../images/home3.png"
import Homedata from "./HomeAPI.js"
import { NavLink } from "react-router-dom"




const Home = () => {
  return (
    <>
    <section id="homepage">
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <section id="home">
              <div className="row">
                <div className="col-md-6 col-12 home-content">
                  <div className="">
                    <h1 className="homepage-content">We Help You<span style={{color:"#605dba"}}> Grow <br/> Your Business</span></h1>
                    <p className="mt-2" style={{fontSize:"20px",lineHeight:"1.5rem",color:"#959ca9"}}>We create effective solutions. We are driven <br/> by a passion to code your success.</p>
                        <div className="contact-btn">
                          <Button className="cbtn" component={NavLink} to="/contact" variant="contained" sx={{"&:hover":{transform:"translateY(-.25rem)"}}}>Contact Us</Button>
                        </div>
                        <div className="service-btn">
                          <Button className="sbtn" component={NavLink} to="/service" variant="outlined" sx={{"&:hover":{transform:"translateY(-.25rem)",backgroundColor:"#605dba",color:"#fff"}}}>Explore Service</Button>
                        </div>
                  </div>
                  </div>
                  <div className="col-md-6 col-12 mx-auto mt-2 mb-3 home-image">
                      <img className="img-fluid animated" src={Home1} width="500px" height="200px" alt="" />
                  </div>
              </div>
            </section>
        
            {/*  */}

            <section id="technology">
              <div className="text-center  mt-5">
                <p className="text-muted">Trending Technology We Work With</p>
              </div>
              <div className="row mt-4 mb-5 animated">  
                <div className="col-md-4 col-4 res-img">
                  <img className="img-fluid" src={Python} width="200" height="200" alt="text" />
                </div>
                {/* <div className="col-md-3 col-4">
                  <img className="img-fluid px-2" width="180px" height="180px" src={Flutter} alt="text" />
                </div> */}
                <div className="col-md-4 col-4 res-img">
                <img className="img-fluid px-2" width="200" height="200" src={React} alt="text" />
                </div>
                <div className="col-md-4 col-4 res-img">
                <img className="img-fluid px-2" width="200" height="200" src={Ds} alt="text" />
                </div>
              </div>
              <div className="row tech-animation">
                <div className="col-md-4 col-4 res-img">
                <img className="img-fluid px-2" width="200" height="200" src={Android} alt="text" />
                </div>
                <div className="col-md-4 col-4 res-img">
                <img className="img-fluid px-2" width="200" height="200" src={Iot} alt="text" />
                </div>
                <div className="col-md-4 col-4 res-img">
                  <img className="img-fluid px-2" width="200" height="200" src={Php} alt="text" />
                </div>
                {/* <div className="col-md-3 col-4">
                  <img className="img-fluid px-2 mt-2" width="180px" height="180px" src={Python} alt="text" />
                </div> */}
              </div>
            </section>
              
{/* What make Us Diffrent */}
            <section id="makediffrent" className="make-diff mt-5">
              <div id="diffrent">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="mt-2 text-muted">WHAT MAKES US DIFFERENT?</p>
                    <h1 className="mt-3 mb-3">
                    We provide <span style={{color:"purple"}}>Solutions</span> <br/>
                    to help your business climb new heights.
                    </h1>
                    <div className="homedata row">
                    {
                      Homedata.map((curele,i)=>{
                        return(
                        <>
                        <div className="col-lg-6 col-md-6 col-12">
                      <div className="card margin-bottom border-light">
                       <div className="row g-0">
                        <div className="col-lg-3 col-md-3 col-3 mt-3 text-center">
                          <img src={curele.image} width="55" height="55" className="img-fluid" alt="..."/>
                        </div>
                        <div className="col-lg-9 col-md-9 col-9">
                          <div className="card-body">
                            <h4 className="card-title">{curele.title}</h4>
                            <p className="card-text">{curele.describe}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                      </div>
                        </>
                        )
                      })
                    }
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12" style={{position:"relative"}}>
                      <figure style={{borderRadius:"0.4rem"}}>
                          <img className="img-fluid" src={Home2} alt="" />
                      </figure>
                      <div class="card d-none d-md-block" style={{top:"15%",left:"-7%",boxShadow:"0 .25rem 1.75rem rgba(30,34,40,.07)",position:"absolute"}}>
                        <div class="card-body py-4 px-5">
                          <div class="d-flex flex-row align-items-center">
                            <div>
                              <img src={Home3} className="" style={{width:"2.2rem",height:"2.2rem",marginRight:"0.75rem"}} alt=""/>
                            </div>
                            <div>
                              <h3 className="counter mb-0" style={{fontSize:"1.25rem"}}>138+</h3>
                              <p className="fs-16 lh-sm mb-0">Happy Clients</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Home