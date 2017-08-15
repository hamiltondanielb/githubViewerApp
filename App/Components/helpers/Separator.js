import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

const Separator = (props) => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    backgroundColor: '#E4E4E4',
    height: 1,
    marginLeft: 15,
    marginRight: 15
  }
});

export default Separator
