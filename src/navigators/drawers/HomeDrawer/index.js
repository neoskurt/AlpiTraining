import styles from './styles';
import {useContext} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeBottomTab from '../../tabs/HomeBottomTab';
import {ThemeContext} from '../../../theming/ThemeContext';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {View, Image, Text, ImageBackground} from 'react-native';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';

// Creating drawer navigator
const Drawer = createDrawerNavigator();

// Custom drawer content component
const CustomDrawerContent = props => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      {/* Header image background */}
      <ImageBackground
        source={require('../../../assets/images/backgrounds/liquid-cheese-background.png')}
        style={styles.drawerHeaderImageBackground}>
        <View style={[styles.logoWrapper, {backgroundColor: theme.primary}]}>
          <Image
            source={
              isLightTheme
                ? require('../../../assets/images/alpi-logo.png')
                : require('../../../assets/images/alpi-logo.png')
            }
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={[styles.brandSlogan, {color: theme.textHighContrast}]}>
          100% adaptée à ton niveau !!
          </Text>
        </View>
      </ImageBackground>

      {/* Drawer item list */}
      <DrawerContentScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Custom drawer item */}
      <View>
        <DrawerItem
          label="Se déconnecter"
          labelStyle={[styles.drawerItemLabel, {color: theme.accent}]}
          icon={() => (
            <FeatherIcon
              name="log-out"
              size={STANDARD_VECTOR_ICON_SIZE}
              color={theme.accent}
            />
          )}
        />
      </View>
    </View>
  );
};

// Home drawer
const HomeDrawer = () => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Screen options
  const screenOptions = {
    headerShown: false,
    drawerActiveTintColor: theme.accent,
    drawerInactiveTintColor: theme.textLowContrast,
    drawerInactiveBackgroundColor: theme.primary,
    drawerStyle: styles.drawer,
    drawerItemStyle: styles.drawerItem,
    swipeEdgeWidth: 0,
  };

  // Retuning
  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeBottomTab"
        component={HomeBottomTab}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused}) => (
            <FeatherIcon
              name="home"
              color={focused ? theme.accent : theme.textLowContrast}
              size={STANDARD_VECTOR_ICON_SIZE}
            />
          ),
        }}
      />

     


      
    </Drawer.Navigator>
  );
};

// Exporting
export default HomeDrawer;
