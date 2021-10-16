import React from 'react';
import { View, Text } from 'react-native';
import {FontAwesome5} from 'react-native-vector-icons'

export default function WeekendTours() {
    return (
        <View>
            <View style={{marginBottom:40}}>
                <View  style={{marginVertical:10}}>
                    <Text style={{fontSize:20,fontWeight: 'bold', marginLeft:25}}>WEEKEND TOURS</Text>
                </View>
                <View style={{flexDirection:"row"}}> 
                    <View style={{marginLeft:25}}>
                        <FontAwesome5 name="plane-departure" size={35} color="#F15b2F"/>
                    </View>
                    <View style={{marginLeft:10}}>
                    <View style={{
                        width: 102,
                        height: 2,
                        backgroundColor: '#c0c0c0',
                        margin: 5,
                    }}></View>
                    <View style={{
                        width: 160,
                        height: 2,
                        backgroundColor: '#c0c0c0',
                        margin:3,
                    }}></View>
                    <View style={{
                        width: 132,
                        height: 3,
                        backgroundColor: '#c0c0c0',
                        margin: 5,
                    }}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}