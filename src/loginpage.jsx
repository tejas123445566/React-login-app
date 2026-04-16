import React from 'react'
import Box from '@mui/material/Box'
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';

import TextField from '@mui/material/TextField';

function LoginPage() {
  return (
    <div>
      <div className='login-container'>
        
      <h1>Login as</h1>

        <FormControl >
      

        <Select labelId="role-label" label="Role" defaultValue="student">
          <MenuItem value="student">Student </MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl><br />
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      
      </div>
    </div>
  )
}

export default LoginPage