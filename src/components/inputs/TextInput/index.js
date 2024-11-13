import {memo} from 'react';
import styles from './styles';
import {TextInput as RNTextInput, View, Text} from 'react-native';

// Functional component
const TextInput = ({
  label,
  labelColor,
  placeholder,
  placeholderTextColor,
  leftIcon,
  rightIcon,
  backgroundColor,
  textInputValueColor,
}) => {
  // Returning
  return (
    <>
      <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
      <View
        style={[styles.textInputWrapper, {backgroundColor: backgroundColor}]}>
        {leftIcon && (
          <View style={[styles.textInputIconWrapper]}>{leftIcon}</View>
        )}
        {rightIcon && (
          <View
            style={[
              styles.textInputIconWrapperWithRightZero,
              styles.textInputIconWrapper,
            ]}>
            {rightIcon}
          </View>
        )}
        <RNTextInput
          placeholder={placeholder}
          style={[styles.textInput, {color: textInputValueColor}]}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
    </>
  );
};

// Exporting
export default memo(TextInput);
