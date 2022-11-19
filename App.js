import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Trip from './app/screens/Trips/Trips';
import TripDetail from './app/screens/Trips/TripDetail';


const Render_trip = (props) => <Trip {...props}  />
const Stack = createNativeStackNavigator();
const MusicRoute = () => <Stack.Navigator>
<Stack.Screen name="All trips" component={Render_trip} />
<Stack.Screen name="Trip Detail" component={TripDetail} />

</Stack.Navigator>

const AlbumsRoute = () => <Text>Search</Text>;

const RecentsRoute = () => <Text>Upload</Text>;


export default function App() {
  

  useEffect(() => {
    // findUser();
    AsyncStorage.clear();
  }, [])

  
 
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Search', focusedIcon: 'rocket' },
    { key: 'recents', title: 'Upload', focusedIcon: 'history' },
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
   
  });

  return (
    <NavigationContainer>
        
        <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});