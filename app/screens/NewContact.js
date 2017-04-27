/* @flow */
'use strict';
import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { TextInput } from '../components/TextInput';
import { PrimaryButton } from '../components/Buttons';

import colors from '../config/colors';

const fields = [
  { placeholder: 'First Name', stateKey: 'firstName' },
  { placeholder: 'Last Name', stateKey: 'lastName' },
  { placeholder: 'Email', stateKey: 'email', 'keyboardType': 'email-address' },
  { placeholder: 'Cell', stateKey: 'mobilePhone' },
  { placeholder: 'City', stateKey: 'city' },
  { placeholder: 'Birthday', stateKey: 'dob' },
  { placeholder: 'Registered', stateKey: 'registered' },
  { placeholder: 'Username', stateKey: 'username' },
]

class NewContact extends Component {
  state = {};
  constructor() {
    super();

    this.state = {};
  }

  onInputChange = (text, stateKey) => {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod)
  }

  handleSubmit = (index, override) => {
    if(index === fields.length - 1 || override) {
      alert('Submit');
    } else {
      const nextField = fields[index + 1];
      this[nextField.stateKey].focus();
    }
  }
  render() {
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
        {
          fields.map((f, index) => (
            <TextInput
              key={f.stateKey}
              onChangeText={(text) => this.onInputChange(text, f.stateKey)}
              returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
              onSubmitEditing={() => this.handleSubmit(index)}
              ref={(input) => this[f.stateKey] = input}
              {...f}
            />
          ))
        }
        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            label="Save"
            onPress={() => this.handleSubmit(0, true)}
          >
          </PrimaryButton>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default NewContact;
