import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      
      <MapView style={styles.maps}
      // Map configuration
       initialRegion={{
          latitude: -22.9068,
          longitude: -43.1729,
          latitudeDelta: 0.100,
          longitudeDelta: 0.100,
        }}
        // Map features
        mapType="terrain"
        // Map controls
        showsMyLocationButton={true}
        showsCompass={true}
        rotateEnabled={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        showsUserLocation={true}
        showsScale={true}
        showsTraffic={false}
        showsIndoors={true}
        showsBuildings={true}
        showsPointsOfInterest={true}>

      </MapView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  maps:{
    width: '100%',
    height: '100%',
  }
});
