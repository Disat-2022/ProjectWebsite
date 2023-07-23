import { Alert, Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Registration = () => {

    const [error,setError]=useState({
        status:false,
        msg:"",
        type:""
    })
    
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualdata={
            name:data.get("fullname"),
            email:data.get("email"),
            password:data.get("password"),
            confirmpassword:data.get("confirmpassword"),
            tc:data.get("tc")
        }
        if(actualdata.name && actualdata.email && actualdata.password && actualdata.confirmpassword && actualdata.tc!==null)
        {
            if(actualdata.password === actualdata.confirmpassword)
            {
                console.log(actualdata);
                document.getElementById("registration-form").reset();
                setError({status:true,msg:"Registration Successfull",type:"success"});
                setTimeout(()=>{
                    navigate("/")
                },2000)
            }
            else
            {
                setError({status:true,msg:"Password & Confirm Password does not match!",type:"error"});
            }
        }
        else
        {
            setError({status:true,msg:"All Fields are Required!",type:"error"});
        }
    }

  return (
    <>
        <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='name' name='fullname' label="Full Name" variant="outlined" />
            <TextField margin='normal' required fullWidth id='email' name='email' label="Email Address" variant="outlined" />
            <TextField margin='normal' required fullWidth id='password' type="password" name='password' label="Password" variant="outlined" />
            <TextField margin='normal' required fullWidth id='confirmpassword' type="password" name='confirmpassword' label="Confirm Password" variant="outlined" />
            <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to Terms & Condition" />
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
            </Box>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
    </>
  )
}

export default Registration