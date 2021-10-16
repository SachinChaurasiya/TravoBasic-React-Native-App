import React,{useState} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,Alert,Modal,Pressable,Button} from 'react-native';
import{FontAwesome5} from 'react-native-vector-icons';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
//flags 
import Flag from 'react-native-flags';
// components 
import FlightScreen from '../Screens/FlightScreen';
import HotelsScreen from '../Screens/HotelsScreen';
import SignInScreen from '../Screens/SignInScreen';
import Transferscreen from '../Screens/TransferScreen';
import MyBookingScreen from '../Screens/MyBookingScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import SupportScreen from '../Screens/SupportScreen';
import DrawerContent from './DrawerContent';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// image
import Logo from '../assets/Travomint.png';
import TransferLogo from '../assets/Transferlogo.png';


const Drawer = createDrawerNavigator();


function LogoTitle() {
  return (
    <Image source={Logo} style={{width:150 , height:30}} />
  );
}

function RightSideTitle() {

  return (
    <View>


                   <Pressable>
                   <View style={{flexDirection: 'row', marginRight:10,}}>
                        <Text>
                        <Flag
                        style={{marginTop:4}}
                           code="IN"
                           size={16}
                         />
                        </Text>
                        <Text>
                          ₹IND
                          <FontAwesome5 name="chevron-down" size={15}/>
                        </Text>
                        <Text >En</Text>
                    </View>
                   </Pressable>
                      </View>
  );
}

function TransferLogoIMG() {
  return(
   <View style = {{marginRight:20}} > 
     <Image source={TransferLogo} style={{ resizeMode:'contain', width:300 , height:35,marginRight:40}}/>
   </View>
  )
}


const Drawercreate = (props) => {
    return (
   
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Flights" 
        style={{position:'fixed'}}
              options={{
                headerTitle: (props) => <LogoTitle {...props}  /> ,
                headerRight: (props) => (<RightSideTitle {...props}/>
                )
                 }}
        component={FlightScreen} />



        <Drawer.Screen name="SignIns"
        style={{position:'fixed'}}
           options={{
            headerTitle: (props) => <LogoTitle {...props}  /> ,
            headerRight: (props) => (<RightSideTitle {...props}/>
            )
             }}
        component={SignInScreen} />



        <Drawer.Screen name="Hotels" 
        style={{position:'fixed'}}
          options={{
            headerTitle: (props) => <LogoTitle {...props}  /> ,
            headerRight: (props) => (<RightSideTitle {...props}/>
            )
             }}
        component={HotelsScreen} />
        <Drawer.Screen name="Transfers" 
          options={{
            headerTitle: (props) => <TransferLogoIMG {...props}  /> 
             }}
        component={Transferscreen}/>
        <Drawer.Screen name="Registers"  
          options={{
            headerTitle: (props) => <LogoTitle {...props} /> ,
              headerRight: (props) => (<RightSideTitle {...props}/>)
             }}
        component={RegisterScreen} />
        <Drawer.Screen name="MyBookings" 
            options={{
              headerTitle: (props) => <LogoTitle {...props} /> ,
              headerRight: (props) => (<RightSideTitle {...props}/>
              )
               }}
        component={MyBookingScreen} />
        <Drawer.Screen name="Supports"  
          options={{
            headerTitle: (props) => <LogoTitle {...props} /> ,
            headerRight: (props) => (<RightSideTitle {...props}/>
            )
             }}
        component={SupportScreen}/>
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
  modalView: {
    width:300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,alignItems:'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
})

export default Drawercreate;


