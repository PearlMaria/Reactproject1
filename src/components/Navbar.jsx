import{AppBar,Button,Toolbar,Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'black'} sx={{ flexGrow: 1}} align='left'>NewApp</Typography>
                <Button variant='text' ><Link to={'/'}>Home</Link></Button>
                <Button variant='text'><Link to={'/first'}>First</Link></Button>
                <Button variant='text'><Link to={'/table'}>Table</Link></Button>
                <Button variant='text'><Link to={'/axios'}>Axios</Link></Button>

             </Toolbar>
            </AppBar>
           </div>
        
                
  )
}

export default Navbar