import React, { Component } from 'react';
import { useState } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import { Divider } from 'material-ui';



// const getReady = () => {

//   const [count, setCount] = useState(10);

// }


export class UserForm extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''

  }

  //Proceed to next step 
  nextStep = () => { // arrow function
    //pulling the variable "step" out of the state 
    //and assigning it to a new variable by distructure
    const { step } = this.state;

    this.setState({
      step: step + 1
    }); // changing step from the state
  }

  //Go back to previous stgep 
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  //Handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value }); // to hanle all the fields
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio } // values of the fields

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />
    }
  }
}

export default UserForm
