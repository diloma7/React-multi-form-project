import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }


  render() {
    const { values, handleChange } = this.props;


    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="My First React.js AppBar" />
          <TextField
            hintText="Enter first name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter last name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter email name"
            floatingLabelText="email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={style.button}
            onClick={this.continue}

          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const style = {
  button: { margin: 15 }
}

export default FormUserDetails
