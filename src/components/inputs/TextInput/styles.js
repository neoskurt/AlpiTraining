import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  OPEN_SANS_BOLD,
  OPEN_SANS_MEDIUM,
  FONT_SIZE_XS,
  STANDARD_TEXT_INPUT_HEIGHT,
} from '../../../config/Constants';

// Exporting style
export default StyleSheet.create({
  label: {
    marginBottom: scale(7.5),
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
  },
  textInputWrapper: {
    overflow: 'hidden',
    position: 'relative',
    height: STANDARD_TEXT_INPUT_HEIGHT,
    borderRadius: STANDARD_TEXT_INPUT_HEIGHT * 0.2,
  },
  textInput: {
    flex: 1,
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    paddingLeft: STANDARD_TEXT_INPUT_HEIGHT,
  },
  textInputIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: STANDARD_TEXT_INPUT_HEIGHT,
    height: STANDARD_TEXT_INPUT_HEIGHT,
  },
  textInputIconWrapperWithRightZero: {
    right: 0,
  },
});
