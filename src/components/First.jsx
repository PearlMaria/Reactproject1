import React from 'react'
import { Button, Typography,TextField } from '@mui/material';


const First = () => {
  return (
    <div>
        <h1>ARE YOU READY?</h1>
        <Typography variant='h1'>Pearl</Typography>
    <br/>
    <TextField variant='outlined' label='Name'></TextField>
    <br/>
    <br/>
    <Button variant='contained'>Submit</Button> 
    </div>
  )
}

export default First