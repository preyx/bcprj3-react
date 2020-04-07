import React from 'react';
import TextField from '../signup/@material-ui/core/TextField';
import { OutlinedInput } from '@material-ui/core';
import { makeStyles } from '../signup/@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


 {
  const classes = useStyles();

  return form(
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField error id="standard-error" label="Error" defaultValue="BootCamp Bot" />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Incorrect User Name"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Error"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
    </form>
  );
}
console.log('Twitch Bot Listening')
export default App

