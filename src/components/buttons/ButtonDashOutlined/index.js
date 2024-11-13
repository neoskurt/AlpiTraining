import {memo} from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';

// Functional component
const ButtonDashOutlined = ({
  icon,
  iconWrapperBackgroundColor,
  label,
  labelColor,
  borderColor,
}) => {
  return (
    <TouchableOpacity style={[styles.button, {borderColor: borderColor}]}>
      <View style={styles.buttonIconLabelWrapper}>
        <View
          style={[
            styles.iconWrapper,
            {backgroundColor: iconWrapperBackgroundColor},
          ]}>
          {icon}
        </View>
        <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(ButtonDashOutlined);
