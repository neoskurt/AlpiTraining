import {memo} from 'react';
import styles from './styles';
import {Text, TouchableOpacity} from 'react-native';

// Functional component
const Button = ({label, labelColor, backgroundColor, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Button);
