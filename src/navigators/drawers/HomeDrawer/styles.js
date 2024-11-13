import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  OPEN_SANS_BOLD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  OPEN_SANS_MEDIUM,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_BORDER_RADIUS,
  STANDARD_DRAWER_WIDTH,
  STANDARD_DRAWER_HEADER_HEIGHT,
} from '../../../config/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  drawer: {
    width: STANDARD_DRAWER_WIDTH,
  },
  drawerHeaderImageBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    height: STANDARD_DRAWER_HEADER_HEIGHT,
  },
  logoWrapper: {
    marginHorizontal: STANDARD_SPACING * 2,
    padding: STANDARD_SPACING,
    borderRadius: STANDARD_BORDER_RADIUS * 5,
    width: scale(70),
    aspectRatio: 1,
  },
  logo: {
    width: null,
    height: null,
    flex: STANDARD_FLEX,
    resizeMode: 'contain',
  },
  brandName: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_SM,
  },
  brandSlogan: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
  drawerItem: {
    height: scale(45),
    justifyContent: 'center',
    borderRadius: scale(10),
  },
  drawerItemLabel: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
  },
});
