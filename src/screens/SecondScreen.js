import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

class SecondScreen extends Component {
  render() {
    const { goBack } = this.props.navigation;

    return (
      <View>
        <Text>This is the second screen.</Text>
        <Button
          title="Go back"
          onPress={() => goBack()}
        />
      </View>
    );
  }
}

SecondScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default SecondScreen;
