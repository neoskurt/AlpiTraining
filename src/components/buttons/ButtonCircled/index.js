import {memo} from 'react';
import styles from './styles';
import {Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';

// Functional component
const ButtonCircled = ({height, icon, backgroundColor, onPress, opacity}) => {
  return (
    <Pressable
      style={[
        styles.button,
        {
          height: scale(height),
          backgroundColor: backgroundColor,
          borderRadius: scale(height / 2),
          opacity: opacity,
        },
      ]}
      onPress={onPress}>
      {icon}
    </Pressable>
  );
};

// Exporting
export default memo(ButtonCircled);
