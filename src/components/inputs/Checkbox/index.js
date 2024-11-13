import {memo} from 'react';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import ic_check from '../../../assets/icons/svg/ic_check';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';

// Functional component
const Checkbox = ({checked, backgroundColor}) => {
  // Returning
  return (
    <TouchableOpacity
      style={[styles.checkbox, {backgroundColor: backgroundColor}]}>
      {checked ? (
        <SvgXml
          xml={ic_check}
          width={STANDARD_VECTOR_ICON_SIZE}
          height={STANDARD_VECTOR_ICON_SIZE}
        />
      ) : null}
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Checkbox);
