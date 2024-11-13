import {StyleSheet} from 'react-native';
import {IndependentColors} from '../../../config/Colors';
import {OPEN_SANS_SEMIBOLD, FONT_SIZE_XXS} from '../../../config/Constants';

// Exporting style
export default StyleSheet.create({
  tabBarBadgeStyle: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XXS,
    backgroundColor: IndependentColors.orange,
    color: IndependentColors.white,
  },
});
