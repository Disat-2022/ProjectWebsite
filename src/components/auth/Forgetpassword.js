import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Forgetpassword = () => {

    const [error,setError]=useState({
        status:false,
        msg:"",
        type:""
    })
    const navigate=useNavigate();
    const handlePassword=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualdata={
            email:data.get("email"),
            password:data.get("password"),
            confirmpassword:data.get("confirmpassword")
        }
        if(actualdata.email&&actualdata.password&&actualdata.confirmpassword)
        {
            if(actualdata.password === actualdata.confirmpassword)
            {
                console.log(actualdata);
                document.getElementById("reset-password").reset();
                setError({status:true,msg:"Password Updated Successfull!",type:"success"});
                setTimeout(()=>{
                    navigate("/login");
                },2000)
            }
            else
            {
                setError({status:true,msg:"Password and Confirm Password does not match!",type:"error"});
            }
        }
        else
        {
            setError({status:true,msg:"All Field Required",type:"error"});
        }
    }

  return (
    <>
        <Box>
            <Typography textAlign="center" variant="h4" color="primary" sx={{my:4}}>Change Password</Typography>
            <Grid container sx={{display:"flex",justifyContent:"center"}}>
                <Grid item>
                    <Box component="form" noValidate id="reset-password" onSubmit={handlePassword}>
                        <TextField margin='normal' required fullWidth id='email' name='email' label="Email Address" variant="outlined" />
                        <TextField margin='normal' required fullWidth id='password' type="password" name='password' label="Password" variant="outlined" />
                        <TextField margin='normal' required fullWidth id='password' type="password" name='confirmpassword' label="Confirm Password" variant="outlined" />
                        <Box textAlign="center">
                            <Button type="submit" variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
                        </Box>
                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert>:""}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default Forgetpassword