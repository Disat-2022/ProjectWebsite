import { Alert, Box, Button, TextField } from "@mui/material"
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  
    const [error,setError]=useState({
        status:false,
        msg:"",
        type:""
    })

    const navigate=useNavigate();

    const handleChange=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualdata={
            email:data.get("email"),
            password:data.get("password")
        }
        if(actualdata.email && actualdata.password)
        {
            console.log(actualdata);
            document.getElementById("login-form").reset();
            setError({status:true,msg:"Login Success",type:"success"})
            setTimeout(()=>{
                navigate("/")
            },2000)
        }
        else
        {
            setError({status:true,msg:"All Field Required",type:"error"})
        }
    }

  return (
    <>
        <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleChange}>
            <TextField margin='normal' required fullWidth id='email' name='email' label="Email Address" variant="outlined" />
            <TextField margin='normal' required fullWidth id='password' type="password" name='password' label="Password" variant="outlined" />
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
            </Box>
            <NavLink to='/forgetpassword' >Forgot Password ?</NavLink>
            {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
        </Box>
    </>
  )
}

export default Login