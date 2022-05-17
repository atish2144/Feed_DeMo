import { Button, CssBaseline, Stack, TextField, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

type Props = {}

const CreateAccount = (props: Props) => {
  const theme = createTheme();
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })
  const [errors, seterrors] = useState({ email: "", password: "", firstName: '', lastName: '' });

  const [arr, setarr] = useState<any>([]);

  const handleSubmit = () => {
    console.log(user);
    setarr([...arr, user])

    console.log(arr);
  }


  // const firstNameHandle=(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
  //     setuser({...user,firstname:e.target.value})
  // }



  const validateFirstName = () => {
    let flag = false;
    if (user.firstname === '') {
      seterrors((prevState: { errors: any }) => ({
        errors: { ...prevState.errors, firstName: "FirstName cannot be empty" },
      }));
      flag = true;
    } else {
      seterrors((prevState: { errors: any }) => ({
        errors: { ...prevState.errors, firstName: "" },
      }));
    }
    if (flag) {
      return false;
    }
    else {
      return true;
    }
  }


  const validate = () => {
    console.log(user.email);
    let flag = false;
    if (user.firstname === '') {
      seterrors((prevState) => ({
        errors: { ...prevState.errors, firstName: "FirstName cannot be empty" },
      }));
      flag = true;
    } else {
      seterrors((prevState) => ({
        errors: { ...prevState.errors, firstName: "" },
      }));
    }
    if (user.lastname === '') {
      seterrors((prevState) => ({
        errors: { ...prevState.errors, lastName: "LastName cannot be empty" },
      }));
      flag = true;
    } else {
      seterrors((prevState) => ({
        errors: { ...prevState.errors, lastName: "" },
      }));
    }
    if (user.password === "") {
      // seterrors({...errors,password:'Password cannot be empty'})
      seterrors((prevState) => ({
        errors: { ...prevState.errors, password: "Password cannot be empty" },
      }));
      flag = true;
    } else if (
      /^(?=.*\d)(?=.*[a-z]).{6,20}$/.test(user.password) === false
    ) {
      // seterrors({...errors,password:'Invalid Password'})
      seterrors((prevState) => ({
        errors: { ...prevState.errors, password: "Invalid Password" },
      }));
      flag = true;
    } else {
      seterrors((prevState) => ({
        errors: { ...prevState.errors, password: "" },
      }));
    }
    if (user.email === "") {
      // seterrors({...errors,email:'Email cannot be empty'})
      seterrors((prevState) => ({
        ...prevState.errors,
        email: "Email cannot be empty",
      }));
      flag = true;
    } else if (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email) ===
      false
    ) {
      // seterrors({...errors,email:'Invalid Email'})
      seterrors((prevState) => ({
        ...prevState.errors,
        email: "Invalid Email",
      }));
      flag = true;
    } else {
      seterrors((prevState) => ({ ...prevState.errors, email: "" }));
    }
    if (flag) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box>

        </Box>
      </Container>

    </ThemeProvider>
  )
}
export default CreateAccount



{/* <div style={{ margin: "20px 0 10px 20px" }}>
<Stack direction="column" spacing={2} style={{ alignItems: "center" }}>
<TextField
  error={errors.firstName ? true : false}
  type='text'
  id="outlined-error"
  label="First Name"
  placeholder='Enter First Name'
  value={user.firstname}
  onChange={(e) => setuser({ ...user, firstname: e.target.value })}
  // onChange={(e)=>firstNameHandle(e)}  

  required
// helperText={errors.firstName}
/>

<TextField
  error={errors.firstName ? true : false}
  type='text'
  id="outlined-error"
  label="Last Name"
  placeholder='Enter Last Name'
  value={user.lastname}
  onChange={(e) => { setuser({ ...user, lastname: e.target.value }) }}

  required
  helperText={errors.firstName}
/>

<TextField
  // error={errors.email ? true : false}
  type='email'
  id="outlined-error"
  label="Email"
  placeholder='Enter your email'
  value={user.email}
  onChange={(e) => { setuser({ ...user, email: e.target.value }) }}

  required
// helperText={errors.email}
/>

<TextField
  error={errors.password ? true : false}
  size="small"
  required
  name="password"
  placeholder="password"
  type="password"
  id="password"
  value={user.password}
  autoComplete="current-password"
  onChange={(e) => { setuser({ ...user, password: e.target.value }) }}
  // helperText={errors.password}
  autoFocus
// sx={{ minWidth: "100%" }}
/>

<Button type='submit' variant='contained' color='primary' onClick={() => handleSubmit()}>Submit</Button>

</Stack>
</div> */}

