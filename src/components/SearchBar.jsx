import React, { useContext, useRef } from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContext } from '../contexts/SearchContext';

export default function SearchBar() {

  const inputRef = useRef();
  const { fetchSimilarArtists } = useContext(SearchContext);

  const handleSearch = () => {
    const value = inputRef.current.value.trim();

    if (value) {
      fetchSimilarArtists(value);
    }
  }
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
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
        inputRef={inputRef}
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
                <IconButton onClick={handleSearch} sx={{color: 'gray'}}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
      />
    </Box>
  );
}
