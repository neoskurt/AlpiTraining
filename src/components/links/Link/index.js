import {memo} from 'react';
import styles from './styles';
import {Text, TouchableOpacity} from 'react-native';

// Functional component
const Link = ({label, labelColor, onPress}) => {
  // Returning
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.style, {color: labelColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Link);
