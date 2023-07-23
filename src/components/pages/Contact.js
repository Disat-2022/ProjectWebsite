
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';

const Contact = () => {
  
  const navigate=useNavigate();

  const handleContact=(e)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const actualdata={
      fname:data.get("fname"),
      lname:data.get("lname"),
      email:data.get("email"),
      phone:data.get("phone"),
      msg:data.get("msg")
    }
    if(actualdata.fname&&actualdata.lname&&actualdata.email&&actualdata.phone&&actualdata.msg)
    {
      console.log(actualdata);
      window.alert("Form Submitted Successfully!")
      setTimeout(()=>{
        navigate("/");
      },2000)
    }
    else
    {
      window.alert("Please Fill out All Fields!");
    }
  }

  return (
    <>
      <section>
        <div className="text-center mt-5">
          <h6 className='text-muted'>GET IN TOUCH</h6>
          <h2 className="mt-2" style={{fontWeight:"500",color:"#343f52"}}>Have any questions? Reach out to us</h2>
          <h2 className="mb-4" style={{fontWeight:"500",color:"#343f52",lineHeight:"1.5rem"}}>from our contact form.</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="card mb-3 img-fluid">
                    <div className="row g-0">
                      <div className="col-md-3 col-4 text-center mt-3">
                        <LocationOnOutlinedIcon sx={{fontSize:40}}/>
                      </div>
                      <div className="col-md-9 col-8">
                        <div className="card-body contact-card">
                          <h4 className="card-title">Address</h4>
                          <p className="card-text">405 Vraj Avenue,Above SAM'S Pizza,<br/>Nr Commerce Six Road, Navrangpura,<br/> Ahmedabad.</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-4 text-center mt-3">
                        <PhoneInTalkOutlinedIcon sx={{fontSize:40}}/>
                      </div>
                      <div className="col-md-9 col-8">
                        <div className="card-body contact-card">
                          <h4 className="card-title">Phone</h4>
                          <NavLink to="/" className="card-text" style={{textDecoration:"none",color:"black",fontSize:"19px"}}>8866662670</NavLink>
                        </div>
                      </div>
                      <div className="col-md-3 col-4 text-center mt-3">
                        <EmailOutlinedIcon sx={{fontSize:40}}/>
                      </div>
                      <div className="col-md-9 col-8">
                        <div className="card-body contact-card">
                          <h4 className="card-title">Email</h4>
                          <NavLink to="/" className="card-text" style={{textDecoration:"none",color:"black",fontSize:"19px"}}>info@naukri.com</NavLink><br/>
                          <NavLink to="/" className="card-text" style={{textDecoration:"none",color:"black",fontSize:"19px"}}>contact@naukri.com</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  {/* <div className="google-map">
                    <iframe width="500" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.987607342748!2d77.66169230270333!3d12.987934439032026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112f8d31b9c1%3A0xc297f3a40a1f5437!2sGoogle%20office!5e0!3m2!1sen!2sin!4v1689598136580!5m2!1sen!2sin" alt="text" title="located" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div> */}
                  <div className='card img-fluid' style={{width:"auto",height:"24rem"}}>
                    <iframe height="380" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.987607342748!2d77.66169230270333!3d12.987934439032026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112f8d31b9c1%3A0xc297f3a40a1f5437!2sGoogle%20office!5e0!3m2!1sen!2sin!4v1689598136580!5m2!1sen!2sin" alt="text" title="located" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.987607342748!2d77.66169230270333!3d12.987934439032026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112f8d31b9c1%3A0xc297f3a40a1f5437!2sGoogle%20office!5e0!3m2!1sen!2sin!4v1689598136580!5m2!1sen!2sin" width="400" height="350" title="googleoffice" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
              </div>

{/* Second section start */}
              <div id="contact-us" className='mt-5'>
                <div className="text-center">
                  <h1 className="mt-3" style={{fontWeight:"bold",color:"#343f52"}}>Drop Us a Line</h1>
                  <h5 className="mt-2 mb-2" style={{fontWeight:"500",color:"#343f52"}}>Reach out to us by filling this form and we will get back to you shortly.</h5>
                </div>
                <Box component='form' noValidate sx={{ mt: 1 }} id='contact-form' onSubmit={handleContact}>
                <div className="row g-2">
                  <div className="col-md-6 col-12">
                    <TextField margin='normal' required fullWidth id='fname' name='fname' label="First Name" variant="outlined" />
                  </div>
                  <div className="col-md-6 col-12">
                    <TextField margin='normal' required fullWidth id='lname' name='lname' label="Last Name" variant="outlined" />
                  </div>
                  <div className="col-md-6 col-12">
                    <TextField margin='normal' required fullWidth id='email' name='email' label="Email Address" variant="outlined" />
                  </div>
                  <div className="col-md-6 col-12">
                    <TextField type="tel" pattern="" size="10" maxLength="10" margin='normal' required fullWidth id='phone' name='phone' label="Phone" maxSize={10} variant="outlined" />
                  </div>
                  <div className="col-md-12 col-12">
                  <TextField
                  margin='normal' required fullWidth
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    cols={4}
                    name="msg"
                  />
                  </div>
                </div>
                <div className="text-center">
                  <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} style={{borderRadius:"15px"}}>Send Message</Button>
                </div>
              </Box>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact