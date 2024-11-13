import styles from '../styles';
import {useContext} from 'react';
import Home from '../../../screens/Home';
import {scale} from 'react-native-size-matters';
import {IndependentColors} from '../../../config/Colors';
import {ThemeContext} from '../../../theming/ThemeContext';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';


// Creating stack navigator
const Stack = createStackNavigator();

// Home stack
const HomeStack = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Screen options
  const screenOptions = ({navigation}) => ({
    headerTitleAlign: 'center',
    headerTitleStyle: [styles.headerTitle],
    headerTintColor: IndependentColors.white,
    headerStyle: [
      {
        backgroundColor: theme.accent,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    ],
    headerLeft: () => (
      <FeatherIcon
        name="arrow-left"
        size={scale(20)}
        color={IndependentColors.white}
        style={styles.leftArrowIcon}
        onPress={() => navigation.goBack()}
      />
    ),
  });

  // Returning
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// Exporting
export default HomeStack;
