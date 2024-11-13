import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

// Functional component
const NoDataWarning = ({
  backgroundColor,
  lottieFileName,
  iconName,
  iconSize,
  iconColor,
  message,
  messageColor,
}) => {
  return (
    <View style={[styles.mainWrapper, {backgroundColor}]}>
      <View style={styles.lottieViewWrapper}>
        {/* Lottie view */}
        <LottieView
          source={lottieFileName}
          loop
          autoPlay
          resizeMode="contain"
        />
      </View>
      <FeatherIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
      <Text style={[styles.message, {color: messageColor}]}>{message}</Text>
    </View>
  );
};

// Exporting
export default NoDataWarning;
