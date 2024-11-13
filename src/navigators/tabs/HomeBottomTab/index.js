import styles from './styles';
import {useContext} from 'react';
import HomeStack from '../../stacks/HomeStack';
import {scale} from 'react-native-size-matters';
import {ThemeContext} from '../../../theming/ThemeContext';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Creating bottom tab navigator
const Tab = createBottomTabNavigator();

// Home bottom tab navigator
const HomeBottomTab = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Screen options
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: theme.primary,
      elevation: 0,
      height: scale(50),
    },
  };

  // Returning
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home Stack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="home"
              color={focused ? theme.accent : theme.textLowContrast}
              size={STANDARD_VECTOR_ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home Stack 0"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="message-square"
              color={focused ? theme.accent : theme.textLowContrast}
              size={STANDARD_VECTOR_ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home Stack 1"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="share"
              color={focused ? theme.accent : theme.textLowContrast}
              size={STANDARD_VECTOR_ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home Stack 2"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="settings"
              color={focused ? theme.accent : theme.textLowContrast}
              size={STANDARD_VECTOR_ICON_SIZE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Exporting
export default HomeBottomTab;
