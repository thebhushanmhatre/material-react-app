import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Container, Grid, Paper,
         AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Save, Delete, Menu } from '@material-ui/icons';
import { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 36,
    }
  }
})

function ButtonStyled(){
  const classes = useStyles()
  return <Button className={classes.root}>Styled Buttons</Button>
}

function App() {
  const [checked, setChecked] = useState(true)
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">

            <AppBar>
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">MUI Theme</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h3" component="div">Welcome to MUI</Typography>
            <Typography variant="subtitle1">Learn to use Material UI</Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item><Paper style={{height:70, width:50}} /></Grid>
              <Grid item><Paper style={{height:70, width:50}} /></Grid>
              <Grid item><Paper style={{height:70, width:50}} /></Grid>
            </Grid>

            <TextField variant="filled" color="secondary" type="email" label="The Time" placeholder="test@material.com" />
            <FormControlLabel label="WannaCheck" control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} color="primary" />} />
            <ButtonGroup size="large" variant="contained">
              <Button startIcon={<Save />} color="primary">
                Save
              </Button>
              <Button startIcon={<Delete />} color="secondary">
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
