import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}> 
          Cidade Maravilhosa
        </Text>
      </View>
      
      <MapView style={styles.maps}
      // Map configuration
       initialRegion={{
          latitude: -22.9068,
          longitude: -43.1729,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        // Map features
        mapType="terrain"
       
        >
          <Marker
            coordinate={{ latitude: -22.9068, longitude: -43.1729 }}
            title="Rio de Janeiro"
            description="Cidade Maravilhosa"
          />
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
  },
  title:{
    color: '#000', fontWeight:'bold' , fontSize: 30, textAlign: 'center', marginTop: 20
  },
  viewTitle:{
    position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 1,
  }
});
