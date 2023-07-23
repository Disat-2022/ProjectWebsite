import { Button } from "@mui/material"
import ServiceAPI from "./ServiceAPI"
import { NavLink } from "react-router-dom"
import s7 from "../../images/service7.png"

const Service = () => {
  return (
    <>
      <section id="service">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <section className="" style={{backgroundColor:"#f3f3fa!important;"}}>
                <div className="row">
                  <div className="col-lg-8 mx-auto mb-5 mt-5">
                    <div className=" text-center">
                    <h6 className='text-muted'>GET IN TOUCH</h6>
                    <h2 className="mt-2" style={{fontWeight:"500",color:"#343f52"}}>We are dedicated to providing top-</h2>
                    <h2 className="mb-4" style={{fontWeight:"500",color:"#343f52",lineHeight:"1.5rem"}}>notch services.</h2>
                  </div>
                  </div>
                </div>
              </section>

              <div className="text-center service-sec">
                <h6 className='text-muted'>OUR SERVICE</h6>
                <h2 className="mt-2" style={{fontWeight:"500",color:"#343f52"}}>Our full range of services is intended to</h2>
                <h2 className="mb-4" style={{fontWeight:"500",color:"#343f52",lineHeight:"1.5rem"}}>meet your project and business needs.</h2>
              </div>
              <div className="row">

                {
                  ServiceAPI.map((currentele,i)=>{
                    return(
                    <>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="card mb-3 card-border" key={i}>
                       <div className="row g-0">
                        <div className="col-md-3 col-3 mt-3 text-center">
                          <img src={currentele.image} width="55" height="55" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-9 col-9">
                          <div className="card-body">
                            <h4 className="card-title" style={{color:"green"}}>{currentele.title}</h4>
                            <p className="card-text">{currentele.description}</p>
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
              <div className="row service-taksec">
                <div className="col-lg-6 col-md-12">
                  <img src={s7} className="img-fluid service-animation" alt="text" />
                </div>
                <div className="col-lg-6 col-md-12 mt-5 service-talk">
                  <h5>LET'S TALK</h5>
                  <h2 className="mt-3">Let's make something great together. We are trusted by 138+ clients.</h2>
                  <div className="servicetalk-content">
                    <p>We have a dedicated team to handle your requirements. We have experienced staff to provide you with services for your business. People are trusting us for these services: Web Development, Application Development, Data Science, and IOT solutions.</p>
                  </div>
                  <div className="mt-4">
                    <Button className="contact-btn" component={NavLink} to="/contact" variant="contained" style={{backgroundColor:"#605dba"}}  sx={{"&:hover":{transform:"translateY(-0.15rem)",boxShadow:"0 0.25rem 0.75rem rgba(30,34,40,.15)"}}} >Contact Us</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Service