import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#673ab7',
  '&:hover': {
    backgroundColor: '#8561c5',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#482880'}}>
        <Toolbar>
          <FlightRoundedIcon
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </FlightRoundedIcon>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: '2em', sm: '2em' } }}
          >
            LabeX
          </Typography>
          <Search
          sx={{display: { xs: 'none', sm: 'block'}}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Procurar..."
              inputProps={{ 'aria-label': 'search' }}
              sx ={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}}}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}