import AppStyles from './AppStyles';
import Splash from './src/screens/Splash';
import {SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Statusbar from './src/components/others/Statusbar';
import {NavigationContainer} from '@react-navigation/native';
import HomeDrawer from './src/navigators/drawers/HomeDrawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeContextProvider} from './src/theming/ThemeContextProvider';

// Functional component
const App = () => {
  // Local states
  const [isStarting, setIsStarting] = useState(true);

  // Hooks
  useEffect(() => {
    // Updating state value after 3500 milliseconds(3.5 seconds) of delay. You may change the value of milliseconds(3500) as per your need.
    setTimeout(() => {
      // Updating states
      setIsStarting(false);
    }, 3500);
  }, []);

  // Checking
  if (isStarting) {
    // Returning
    return <Splash />;
  }

  // Returning
  return (
    <GestureHandlerRootView style={AppStyles.gestureHandlerRootView}>
      <ThemeContextProvider>
        <NavigationContainer>
          <Statusbar barStyle="light-content" />
          <SafeAreaView style={AppStyles.safeAreaView}>
            <HomeDrawer />
          </SafeAreaView>
        </NavigationContainer>
      </ThemeContextProvider>
    </GestureHandlerRootView>
  );
};

// Exporting
export default App;
