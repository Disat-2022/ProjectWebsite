import { Avatar } from "@mui/material"
import AboutPic from "../../images/aboutpic.png"
import { deepPurple } from '@mui/material/colors';
import AboutData from "./AboutAPI.js"


const About = () => {
  return (
    <>
      <section id="about" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="aboutrow-sec col-md-6 pt-lg-0 order-2 order-md-1 d-flex justify-content-center flex-column">
                  <h1 className="about-us">About Us</h1>
                  <h4>Our success is dependent on ensuring that all of our clients expand their online presence and enjoy online success.</h4>
                </div>
                <div className="col-lg-6 col-md-6 mt-2 order-1 order-md-2">
                  <div sx={{width:"auto",height:"500px"}}>
                    <img className="img-fluid animated"  src={AboutPic} alt="text"/>
                  </div>
                </div>
              </div>
              <section className="about-sec2">
                <h1>How We Do It?</h1>
                <h4 style={{marginTop:"15px",marginBottom:"15px"}}>We make your spending stress-free so you can stay in complete control.</h4>
                <div className="row gy-4">
                  
                  {
                    AboutData.map((curele,i)=>{
                        return(
                        <>
                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                          <div className="card">
                          <Avatar sx={{ width: 45, height: 45,m:"10px",bgcolor:deepPurple[500]}}>{curele.number}</Avatar>
                            <div className="card-body">
                              <h4 className="card-title">{curele.title}</h4>
                              <p className="card-text">{curele.describe}</p>
                            </div>
                          </div>
                          </div>
                        </>
                        )
                    })
                  }
                  
                </div>
            
              </section>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About