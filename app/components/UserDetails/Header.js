'use strict';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import _ from 'lodash';

const Header = ({ picture, name }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: picture.large }} style={styles.image} />
      <Text style={styles.name}>
        {_.capitalize(name.first)} {_.capitalize(name.last)}
      </Text>
    </View>
  );
};

export default Header;
