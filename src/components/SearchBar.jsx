import React, { useRef } from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Box
      component="form"
      sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            '& > :not(style)': { m: 1, width: '80%', maxWidth: '1000px'},      
        }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="Buscar artista ou música" 
        variant="outlined" 
        sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              color: 'white',
              '& fieldset': {
                borderColor: 'gray',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              
              '&.Mui-focused fieldset': {
                borderColor: 'white', 
              },
            },
            '& .MuiInputLabel-root': {
              color: 'gray', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', 
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton /*onClick={handleSearch}*/ sx={{color: 'gray'}}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
      />
    </Box>
  );
}
