import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'

const Flightsearchdf = () => {
    return (
        <View>
                      <View style ={{shadowColor:"grey" , shadowRadius:5, margin:20, borderRadius:5,borderWidth:1, borderColor:"#000"}}>
          <TouchableOpacity>
            <View style = {{flexDirection:"row" }}>
              <View>
                  <Text style = {{margin:10  , fontWeight:'bold' }}>
                      Departure Flights
                  </Text>
                  </View>
                  <View style = {{marginLeft:100 , marginTop:8}}>
                    <FontAwesome5 
                    name="bell" 
                    size={15} 
                    color="#006ee3"
                    />
                  </View>
                  <View  style= {{ marginTop:6,marginLeft:10}}>
                    <Text style = {{color:"#006ee3"}}>
                      Fare Alerts
                    </Text>
                  </View>
                </View>
                <View>
                    <Text  style = {{margin:10  , fontWeight:'bold'}} >   
                      DEL-MAA| Fri,08 Oct 2021               
                     </Text>
                </View>
                </TouchableOpacity>
              </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Flightsearchdf;
