import React from 'react';
import {View,Text, StyleSheet,Image} from 'react-native';
import {FontAwesome5} from 'react-native-vector-icons';


const img = {uri : 'https://app-prod.mozio.com/20210216-1800/1a2cbda078fb9b2dc289e41bb5786f2e.svg'}

const TransferFooter = () => {
    return (
        <View style={{paddingVertical:20}}>
        <View style={styles.container}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Image source={img} style={{ resizeMode:"contain",width:40 ,height:23,}}/>
                    </View>
                    <View style={{flexDirection: 'row',marginLeft:3}}>
                        <Text  style={{marginLeft:2,color:'#727272'}}><FontAwesome5 name='facebook' size={18}/></Text>
                        <Text  style={{marginLeft:5,color:'#727272'}}><FontAwesome5 name='twitter-square' size={18}/></Text>
                        <Text  style={{marginLeft:5,color:'#727272'}}><FontAwesome5 name='instagram-square' size={18}/></Text>
                        <Text  style={{marginLeft:5,color:'#727272'}}><FontAwesome5 name='linkedin' size={18}/></Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row',marginTop:5}}>
                    <View>
                        <Text style={{fontSize:8, color:'#727272'}}>Privacy Policy</Text>
                    </View>
                    <View style={{marginLeft:4}}>
                        <Text style={{fontSize:8, color:'#727272'}}>Terms of Service</Text>
                    </View>
                    <View style={{marginLeft:4}}>
                        <Text style={{fontSize:8,color:'#727272'}}>Imprint</Text>
                    </View>
                </View>
            </View>



            <View style={{alignItems: 'flex-end'}}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color:'blue'}}>About Us</Text>
                        <Text style={{marginLeft:12 , fontSize:12 ,color:'blue'}}>FAQ</Text>
                        <Text style={{marginLeft:12 , fontSize:12,color:'blue'}}>Mobile App</Text>
                        <Text style={{marginLeft:12 , fontSize:12,color:'blue'}}>Blogs</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                        <Text style={{color:'blue'}}>Partners</Text>
                        <Text style={{marginLeft:12,fontSize:12,color:'blue'}}>Executive Assistant</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text style={{color:'blue',fontSize:12}}>Online Travel Landscape</Text>
                    </View>
                    <View>
                        <Text style={{marginLeft:12, fontSize:12,color:'blue'}}>Cookie Setting </Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color:'#727272'}}>+1 (855) 980 5668</Text>
                    <FontAwesome5 style={{marginLeft:10}} name="envelope" size={18}/>
                </View>
            </View>

        </View>
        <View>
            <Text style={{fontSize:10,color:"#727272",marginHorizontal:12}}>© 2021 Mozio Inc. Trademarks and brands are property of their respective owners.</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        backgroundColor:'#fff',
        flexDirection: 'row',
        marginHorizontal: 12,
        justifyContent:'space-between'
    }
})

export default TransferFooter;