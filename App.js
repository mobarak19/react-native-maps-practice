
import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
import AppNavigation from './src/router/AppNavigation';


const App = () => {

  const [hidden, setHidden] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}  >
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={STYLES[0]}
        showHideTransition={TRANSITIONS[0]}
        hidden={hidden} />

      <AppNavigation />
    </SafeAreaView>
  );
};

export default App;
