import {memo} from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';

// Functional component
const ButtonSquared = ({height, icon, backgroundColor}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          height: scale(height),
          backgroundColor: backgroundColor,
          borderRadius: height * 0.2,
        },
      ]}>
      {icon}
    </TouchableOpacity>
  );
};

// Exporting
export default memo(ButtonSquared);
