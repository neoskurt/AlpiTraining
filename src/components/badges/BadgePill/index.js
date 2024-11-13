import {memo} from 'react';
import styles from './styles';
import {View, Text} from 'react-native';

// Functional component
const BadgePill = ({label, labelColor, backgroundColor}) => {
  return (
    <View style={[styles.badge, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
    </View>
  );
};

// Exporting
export default memo(BadgePill);
