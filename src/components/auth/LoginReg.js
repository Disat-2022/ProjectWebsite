import { Box, Grid, Tab, Tabs } from "@mui/material"
import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import Loginpage from "../../images/Loginpage.svg"

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <>
    <section id="loginreg">
      <Box>
        <Grid container>
          <Grid item md={6}>
              <img src={Loginpage} className="img-fluid animated" alt="" />
          </Grid>
          <Grid item md={6} sm={12}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}  aria-label="basic tabs example">
                <Tab label="Login" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
                <Tab label="Registration" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Login/>
            </TabPanel>
            <TabPanel value={value} index={1}>
             <Registration/>
            </TabPanel>
          </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
    </>
  )
}

export default LoginReg