import React, { useContext, useRef, useState } from 'react';
import { TextField, InputAdornment, IconButton, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContext } from '../contexts/SearchContext';

export default function SearchBar() {
  const inputRef = useRef();
  const [type, setType] = useState('artist'); // <- adicionado
  const { fetchSimilarArtists, fetchSimilarTracks } = useContext(SearchContext);

  /*const handleSearch = () => {
    const value = inputRef.current.value.trim();

    if (value) {
      if (type === 'artist') {
        fetchSimilarArtists(value);
      } else if (type === 'track') {
        fetchSimilarTracks(value);
      }
    }
  };*/
  const handleSearch = () => {
    const value = inputRef.current.value.trim();
  
    if (value) {
      if (type === 'artist') {
        fetchSimilarArtists(value);
      } else if (type === 'track') {
        const [track, artist] = value.split(' - ').map((v) => v.trim());
        
        if (track && artist) {
          fetchSimilarTracks(track, artist);
        } else {
          alert('Por favor, digite no formato: Nome da música - Nome do artista');
        }
      }
    }
  };
  

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            '& > :not(style)': { m: 1, width: '80%', maxWidth: '1000px'},      
        }}
      noValidate
      autoComplete="off"
    >
  <ToggleButtonGroup
    value={type}
    exclusive
    onChange={(event, newType) => {
      if (newType !== null) setType(newType);
    }}
    size="small"
    sx={{
      mb: 1,
      backgroundColor: '#2c2c2c',
      borderRadius: '20px',
      '& .MuiToggleButton-root': {
        color: 'gray',
        border: 'none',
        fontFamily: 'Orbitron, sans-serif',
        '&.Mui-selected': {
          backgroundColor: 'white',
          color: 'black',
        },
        '&:hover': {
          backgroundColor: '#444',
        },
      },
    }}
  >
      <ToggleButton value="artist">🎤 Artista</ToggleButton>
      <ToggleButton value="track">🎵 Música</ToggleButton>
    </ToggleButtonGroup>

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
