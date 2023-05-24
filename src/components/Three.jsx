import {Button, Typography} from'@mui/material'
import React, { useState } from 'react'

const Three =()=>{
    var[namee,cNamee]=useState("");
    const Changenamee=()=>{
        cNamee("Home Page")
    }
    const ChangeGname=()=>{
        cNamee("Gallery Page")
    }
    const changeFname=()=>{
        cNamee("Contact Page")
    }
    return (
        <div>
            <Button variant='contained' color='primary' onClick={Changenamee}>Home</Button>&nbsp;
            <Button variant='contained' color='secondary' onClick={ChangeGname}>Gallery</Button>&nbsp;
            <Button variant='contained' color='success' onClick={changeFname}>Contact</Button>&nbsp;
            <br/>
            <Typography variant='h3'>Welcome to {namee}</Typography>
        </div>
    )
}
export default Three