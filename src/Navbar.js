// import { NavLink } from "react-router-dom"

// import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <section id="Navbar">
    {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button component={NavLink} to="/" color="inherit" sx={{textTransform:"none"}}>Home</Button>
          <Button component={NavLink} to="about" color="inherit" sx={{textTransform:"none"}}>About</Button>
          <Button component={NavLink} to="service" color="inherit" sx={{textTransform:"none"}}>Service</Button>
          <Button component={NavLink} to="contact" color="inherit" sx={{textTransform:"none"}}>Contact</Button>
          <Button component={NavLink} to="login" color="inherit" sx={{textTransform:"none"}}>Login/Reg</Button>
        </Toolbar>
      </AppBar>
    </Box> */}
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">INDUSTRY</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/service">Service</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/login">Login/Reg</NavLink>
                  </li>
                </ul>
     
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    </section>
    </>
  )
}

export default Navbar