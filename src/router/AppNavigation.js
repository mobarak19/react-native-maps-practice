
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppMapView from '../mapview/AppMapView';
import MarkerList from '../marker/markerlist/MarkerList';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Map" options={setUpHeader} component={AppMapView} />
                <Tab.Screen name="Markerlist" component={MarkerList} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation


const setUpHeader = ({ route, navigation }) => {
    console.log(route)
    console.log(navigation)

    return ({
        headerShown: false,
        title: 'My home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    })
}