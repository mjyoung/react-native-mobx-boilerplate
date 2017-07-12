import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider as MobXProvider, observer } from 'mobx-react/native';

import Store from './stores/Store';
import Navigator from './navigator';

const store = new Store();

@observer
class ReactNativeMobXBoilerplate extends Component {
  render() {
    return (
      <MobXProvider store={store}>
        <View style={{ paddingTop: 20 }}>
          <Navigator />
        </View>
      </MobXProvider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeMobXBoilerplate', () => ReactNativeMobXBoilerplate);

export default ReactNativeMobXBoilerplate;
