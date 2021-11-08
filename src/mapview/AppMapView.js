import MapView from "react-native-maps"
import React from 'react';
import {
    StyleSheet,
} from 'react-native';


const AppMapView = () => {

    return (
        <>
            <MapView
                style={styles.map}

                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </>
    )
}
export default AppMapView


const styles = StyleSheet.create({
    map: { flex: 1 }
});
