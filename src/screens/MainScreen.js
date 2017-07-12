import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

@inject('store') @observer
class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Item: {this.props.store.item}</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => navigate('Second')}
        />
      </View>
    );
  }
}

MainScreen.wrappedComponent.propTypes = {
  navigation: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired
};

export default MainScreen;
