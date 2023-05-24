import { TableCell, TableContainer, TableHead ,Table,TableRow,TableBody} from '@mui/material'
import React, { useState } from 'react'

const Tablee = () => {
    var[names,setNames]=useState(["Pearl","Maria","Joe"])
  return (
    <div style={{paddingTop:"50px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"30px"}}>Name</TableCell>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"30px"}}>Age</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
                {names.map((value,index)=>{
                    return(
                        <TableRow>
                        <TableCell>{value}</TableCell>
                        </TableRow>
                    )
                })}
                    
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tablee