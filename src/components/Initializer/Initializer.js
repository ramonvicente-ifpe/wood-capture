import React, { Component } from 'react';
import Form from '../Form/Form';
import Welcome from '../Welcome/Welcome';
import ThankYou from '../ThankYou/ThankYou';

export class Initializer extends Component {
  state = {
    step: 1,
    specie: '',
    other: '',
    density: '',
    cut: '',
    planer: '',
    weight: '',
    sandpaper: '',
    lathe: '',
    imageUrl: '',
    imageUpload: '',
    width: '',
    height: '',
    cutType: ''
  };

  nextStep = () => {
      const { step } = this.state;
      this.setState({ step: step + 1 });
  };

  prevStep = () => {
      const { step } = this.state;
      this.setState({ step: step - 1 });
  };

  inputChange = input => element => {
      if(input === 'imageUrl') {
        this.setState({
          imageUrl: element.target.files[0]
        });
        this.setState({
          imageUpload: URL.createObjectURL(element.target.files[0])
        }); 
      } else {
        this.setState({
          [input]: element.target.value
        });
      }
  };

  render() {
    const { step } = this.state;
    const { specie, other, density, cut, planer, weight, sandpaper, lathe, imageUrl, imageUpload, width, height, cutType } = this.state;
    const values = { specie, other, density, cut, planer, weight, sandpaper, lathe, imageUrl, imageUpload, width, height, cutType };

    switch (step) {
      case 1:
        return (
          <Welcome
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <Form
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 3:
        return (
          <ThankYou />
        );
      default:
    }
  }
}

export default Initializer
