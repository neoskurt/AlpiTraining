import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import RNFS from 'react-native-fs';
import FitParser from 'fit-file-parser';
import { Buffer } from 'buffer';
import { ThemeContext } from '../../theming/ThemeContext';
import Loader from '../Loader';
import styles from './styles';

const Home = ({ navigation }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const [coordinates, setCoordinates] = useState([]);
  const [distance, setDistance] = useState(null);
  const [elevationGain, setElevationGain] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadFitFileData = async () => {
    try {
      const filePath = `/Users/rebeulotte/Desktop/AlpiTraining/src/assets/fit/463444033329463297.fit`;

      const fileExists = await RNFS.exists(filePath);
      if (!fileExists) {
        console.error("Fichier .fit introuvable.");
        return;
      }

      const fileContent = await RNFS.readFile(filePath, 'base64');
      const buffer = Buffer.from(fileContent, 'base64');

      const fitParser = new FitParser();
      fitParser.parse(buffer, (error, data) => {
        if (error) {
          console.error("Erreur FIT:", error);
          return;
        }

        // Récupération des données GPS, distance, dénivelé et durée
        const gpsData = data.records
          .filter(record => record.position_lat && record.position_long)
          .map(record => ({
            latitude: record.position_lat,
            longitude: record.position_long,
          }));
        setCoordinates(gpsData);

        // Récupérer la distance, le dénivelé et la durée
        const totalDistance = data.sessions?.[0]?.total_distance || 0;
        const totalElevation = data.sessions?.[0]?.total_ascent || 0;
        const totalDuration = data.sessions?.[0]?.total_timer_time || 0;

        setDistance((totalDistance / 1000).toFixed(1)); // Convertir en km
        setElevationGain(totalElevation);
        setDuration((totalDuration / 3600).toFixed(1)); // Convertir en heures

        setIsLoading(false);
      });
    } catch (error) {
      console.error("Erreur de lecture du fichier FIT:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadFitFileData();
  }, []);

  const getRegionForCoordinates = (coordinates) => {
    const latitudes = coordinates.map(coord => coord.latitude);
    const longitudes = coordinates.map(coord => coord.longitude);

    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);

    const latitudeDelta = (maxLat - minLat) * 1.2; 
    const longitudeDelta = (maxLng - minLng) * 1.2;

    return {
      latitude: (minLat + maxLat) / 2,
      longitude: (minLng + maxLng) / 2,
      latitudeDelta,
      longitudeDelta,
    };
  };

  const region = coordinates.length > 0 ? getRegionForCoordinates(coordinates) : null;
  const theme = isLightTheme ? lightTheme : darkTheme;

  if (isLoading) {
    return (
      <Loader
        title="Veuillez patienter..."
        titleColor={theme.textHighContrast}
        message="Votre application est en cours de chargement."
        messageColor={theme.textLowContrast}
      />
    );
  }

  return (
    <View style={[styles.mainWrapper, { backgroundColor: theme.accent }]}>
      <View style={[styles.bottomContentWrapper, { backgroundColor: theme.primary }]}>
      <View style={[styles.invoiceIssueDetailsWrapper]}>
        {/* Issued on */}
        <View>
          <Text
            style={[
              styles.issuedAndDueOnLabel,
              {color: theme.textLowContrast},
            ]}>
            Date
          </Text>
          <Text
            style={[
              styles.issuedAndDueDate,
              {color: theme.textHighContrast},
            ]}>
            10 Juin 2024
          </Text>
        </View>
        {/* Payee details */}
        <View style={[styles.payeeDetailsWrapper]}>
          <View
            style={[
              styles.payeeAvatarWrapper,
              {backgroundColor: theme.secondary},
            ]}>
            <Image
              style={styles.payeeAvatar}
              source={require('../../assets/images/placeholder/100x100-rounded.png')}
            />
          </View>
          <Text style={[styles.payeeName2, {color: theme.textHighContrast}]}>
            Jonas Darbellay
          </Text>
         
        </View>
        
        {/* Due on */}
        <View style={[styles.dueOnWrapper]}>
          <Text
            style={[
              styles.issuedAndDueOnLabel,
              {color: theme.textLowContrast},
            ]}>
           Lieu
          </Text>
          <Text
            style={[
              styles.issuedAndDueDate,
              {color: theme.textHighContrast},
            ]}>
          Haute-Savoie
          </Text>
        </View>
      </View>

      <Text style={[styles.payeeEmail, {color: theme.textLowContrast}]}>
            Trail 
          </Text>
      {/* Ordered items */}
      <View >
        <Text style={[styles.orderedItemsLabel, {color: theme.accent}]}>

        </Text>

        <View
            style={[
              styles.orderedItemWrapper,
              {backgroundColor: theme.secondary},
            ]}>
            <View style={[styles.orderedItemNameAndPriceWrapper]}>
              <View >
                <Text
                  style={[
                    styles.orderedItemName,
                    {color: theme.textHighContrast},
                  ]}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  Difficile mais super content de cette séance !
                </Text>
              </View>
            </View>

            
          </View>
          </View>

        <View style={styles.orderedItemsWrapper}>
          <View style={[styles.orderedItemWrapper, { backgroundColor: theme.secondary }]}>
            <View style={[styles.invoiceIssueDetailsWrapper]}>
              <View>
                <Text style={[styles.issuedAndDueDate, { color: theme.textHighContrast }]}>Distance</Text>
                <Text style={[styles.issuedAndDueOnLabel, { color: theme.textLowContrast }]}>{distance} km</Text>
              </View>
              <View style={[styles.payeeDetailsWrapper]}>
                <Text style={[styles.payeeName2, { color: theme.textHighContrast }]}>Dénivelé</Text>
                <Text style={[styles.payeeEmail, { color: theme.textLowContrast }]}>{elevationGain} m</Text>
              </View>
              <View style={[styles.dueOnWrapper]}>
                <Text style={[styles.issuedAndDueDate, { color: theme.textHighContrast }]}>Durée</Text>
                <Text style={[styles.issuedAndDueOnLabel, { color: theme.textLowContrast }]}>{duration} h</Text>
              </View>
            </View>
          </View>

          <MapView
            style={{ flex: 1 }}
            initialRegion={region || {
              latitude: coordinates[0]?.latitude || 0,
              longitude: coordinates[0]?.longitude || 0,
              latitudeDelta: 0.05, 
              longitudeDelta: 0.05,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
          >
            <Polyline coordinates={coordinates} strokeColor="red" strokeWidth={4} />
            {coordinates.length > 0 && (
              <>
                <Marker coordinate={coordinates[0]} title="Départ" pinColor="green" />
                <Marker coordinate={coordinates[coordinates.length - 1]} title="Arrivée" pinColor="blue" />
              </>
            )}
          </MapView>
        </View>
      </View>
    </View>
  );
};

export default Home;

