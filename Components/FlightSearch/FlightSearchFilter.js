import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Button} from 'react-native';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'

const Flightsearchfilter = () => {
    return (
        <View>
                <View style = {{ flexDirection:"row",borderWidth:1, borderBottomColor:"#000",alignItems: "center",justifyContent:"space-between",}}>
                    <View style={{flexDirection:"row",alignItems: "center",}}>
                    <FontAwesome5  
                      name="filter"
                      size={22}
                      color="#006ee3"
                      />
                      <Text style ={{margin:10, fontSize:20 , color:"#006ee3"}}>  
                           Filter
                    </Text>
                    </View>
                    <View style={{ flexDirection:"row"}}>
                        <View style={{marginRight:10}}>
                        <Button title="GoDEL-GOI" color="#f15b2F"/>
                        </View>
                        <View>
                        <Button title="ReturnGOI-DEL" color="#f15b2F"/>
                        </View>
                    </View>
              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Flightsearchfilter;
