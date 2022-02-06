import React from 'react';
import {  Container, AppBar, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const Header = () => {

  const useStyles = makeStyles(() => ({
    title:{
        flex: 1,
        color: '#FFD369',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
  }));
  const classes = useStyles();

  let navigate = useNavigate();

  const { currency, setCurrency } = CryptoState()
// console.log(currency)

  const darkTheme = createTheme({
    palette: {
      primary: {
          main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
      <>
      <ThemeProvider theme={darkTheme} >
        <AppBar color='transparent' postion='static' >
            <Container>
                <Toolbar>
                    <Typography 
                        className={classes.title}
                        onClick={() => { navigate("/"); }} 
                        variant='h6'
                    >
                        Crypto Tracker
                    </Typography>
                    <Select 
                        variant='outlined' 
                        style={{
                            width: 100,
                            height: 40,
                            marginRight: 15,
                        }}
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={'USD'} >USD</MenuItem>
                        <MenuItem value={'INR'} >INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
      </>
  );
};

export default Header;
