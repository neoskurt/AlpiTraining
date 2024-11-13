import styles from './styles';
import {View, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';

// Functional component
const Splash = () => {
  return (
    <Animatable.View
      style={[styles.mainWrapper]}
      delay={100}
      animation="fadeIn"
      easing="ease-in-out-sine"
      useNativeDriver={true}>
      {/* Image background */}
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.imageBackgroundOverlay}>
          {/* Logo wrapper */}
          <View style={styles.logoWrapper}>
            {/* Logo */}
            <Animatable.Image
              source={require('../../assets/images/alpi-logo.png')}
              style={styles.logo}
              delay={600}
              animation="fadeInDown"
              easing="ease-in-out-back"
              useNativeDriver={true}
            />
          </View>
          {/* Title wrapper */}
          <View style={styles.titleWrapper}>
            {/* Title */}
            <Animatable.Text
              style={styles.title}
              delay={1100}
              animation="fadeInLeft"
              easing="ease-in-out-sine"
              useNativeDriver={true}>
              Ton APP{' '}
            </Animatable.Text>
            {/* Title highlighted */}
            <Animatable.Text
              style={[styles.title, styles.titleHighlighted]}
              delay={1600}
              animation="fadeInRight"
              easing="ease-in-out-sine"
              useNativeDriver={true}>
              D'entrainement
            </Animatable.Text>
          </View>
          {/* Message */}
          <Animatable.Text
            style={styles.message}
            delay={2100}
            animation="fadeInUp"
            easing="ease-in-out-back"
            useNativeDriver={true}>
            La plus complète et individualisée
          </Animatable.Text>
        </View>
      </ImageBackground>
    </Animatable.View>
  );
};

// Exporting
export default Splash;
