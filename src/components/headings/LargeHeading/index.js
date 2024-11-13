import {memo} from 'react';
import styles from './styles';
import {Text} from 'react-native';

// Functional component
const LargeHeading = ({headingText, headingColor, textAlign}) => {
  return (
    <Text style={[styles.style, {color: headingColor, textAlign: textAlign}]}>
      {headingText}
    </Text>
  );
};

// Exporting
export default memo(LargeHeading);
