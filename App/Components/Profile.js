import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import Badge from './Badge';
import Separator from './helpers/Separator';

class Profile extends Component {
  getRowTitle(values) {
    const item = (values === 'public_repos' || values === 'public_gists') ? values.replace('_', ' ') : values;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    const userInfo = this.props.userInfo;
    const topicArr = ['company', 'location', 'followers', 'following', 'email',
                    'bio','blog', 'public_repos', 'public_gists'];
    const list = topicArr.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index} />
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {this.getRowTitle(item)} </Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>
            </View>
            <Separator />
          </View>
        )
      }
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={userInfo} />
        {list}
      </ScrollView>
    )
  }
}

Profile.propTypes = {
  userInfo: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

export default Profile
