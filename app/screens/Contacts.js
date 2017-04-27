'use strict';
import React, { Component } from 'react';
import { ActivityIndicator, View, Text, FlatList } from 'react-native';

import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: {},
      contactsLoaded: false
    };
  }

  componentWillMount() {
    const BASE_URI = 'https://gist.githubusercontent.com/antwaanvh/';
    const CONTACTS =
      '65e7d30beffd51f5ae317ee25ddb39b1/raw/5643e0cf8a0762882d848703e2733622a0f8cb71/contacts.json';

    fetch(`${BASE_URI}${CONTACTS}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data, contactsLoaded: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        {this.state.contactsLoaded
          ? <FlatList
              style={{ backgroundColor: colors.background }}
              data={this.state.contacts}
              renderItem={item => (
                <ListItem
                  contact={item.item}
                  onPress={() => this._handleRowPress(item.item)}
                />
              )}
              keyExtractor={item => item.email}
            />
          : <ActivityIndicator />}
      </View>
    );
  }

  _handleRowPress(item) {
    this.props.navigation.navigate('Details', item);
  }
}

export default Contacts;
