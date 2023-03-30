import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;


    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confrim User Details" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            />
            <ListItem
              primaryText="Email"
              secondaryText={email}
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <ListItem
              primaryText="City"
              secondaryText={city}
            />
            <ListItem
              primaryText="bio"
              secondaryText={bio}
            />
          </List>
          <br />
          <RaisedButton
            label="Confirm And Continue"
            primary={true}
            style={style.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={style.button}
            onClick={this.back}

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
