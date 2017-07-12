import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Provider as MobXProvider, observer } from 'mobx-react/native';

import Store from './stores/Store';

const store = new Store();

@observer
class ReactNativeMobXBoilerplate extends Component {
  render() {
    return (
      <MobXProvider store={store}>
        <View style={{ paddingTop: 20 }}>
          <Text>Item: {store.item}</Text>
        </View>
      </MobXProvider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeMobXBoilerplate', () => ReactNativeMobXBoilerplate);

export default ReactNativeMobXBoilerplate;
