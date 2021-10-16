import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawercreate from "./Drawer/DrawerCreate";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Flightsearchpage from './Screens/FlightSearchPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello!</Text> */}
      {/* <Flightscreen/> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Drawercreate} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="FlightScreen" component={Flightsearchpage}/>
        </Stack.Navigator>
      </NavigationContainer>
        {/* <FlightSearchCard/> */}
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
