import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
  state = {
    step: 1, 
    firstName: '',
    lastName: '',
    email: ''
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step -1
    });
  }
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email } = this.state;
    const values = { firstName, lastName, email }

    switch(step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
        case 2:
          return <h1>FormPersonalDetails</h1>
        case 3:
          return <h1>Confirm</h1>
        case 4:
          return <h1>Success</h1> 
    }


    return (
      <div>


      </div>
    )
  }
}

export default UserForm


import React from 'react';
import TextField from '@material-ui/core/TextField';
import { OutlinedInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  return form (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
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
export default form