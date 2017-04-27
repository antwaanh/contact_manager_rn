'use strict';
import React from 'react';
import { View, Text, TouchableHighlight, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import _ from 'lodash';
import colors from '../../config/colors';

const ListItem = ({ contact, onPress }) => {
  const name = `${_.capitalize(contact.name.first)} ${_.capitalize(contact.name.last)}`;

  const iconName = Platform.OS === 'ios'
    ? 'ios-arrow-forward'
    : 'md-arrow-forward';

  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.rowUnderlay}>
      <View style={styles.row}>
        <Image
          source={{ uri: contact.picture.thumbnail }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{contact.email}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon
            name={iconName}
            size={CHEVRON_SIZE}
            color={colors.subtleText}
            style={styles.chevron}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
