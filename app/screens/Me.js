'use strict';
import React, { Component } from 'react';
import { ActivityIndicator, View, Text, ScrollView } from 'react-native';

import { Header, Actions, Info } from '../components/UserDetails';
import colors from '../config/colors';
import { PrimaryButton } from '../components/Buttons';

class Me extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userLoaded: false
    };
  }

  componentWillMount() {
    const BASE_URL = 'https://gist.githubusercontent.com/antwaanvh/';
    const USER =
      '1e4363b382d9f2325a8abc5f2eae5f32/raw/931c1f1ef5b7b1fd39dd3ab022f0f7ece32c375b/user.json';

    fetch(`${BASE_URL}${USER}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data, userLoaded: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        {this.state.userLoaded
          ? <View>
              <Header {...this.state.user} />
              <PrimaryButton label="Edit Profile" onPress={() => null} />
              <Actions {...this.state.user} />
              <Info {...this.state.user} />
            </View>
          : <ActivityIndicator />}
      </ScrollView>
    );
  }
}

export default Me;
