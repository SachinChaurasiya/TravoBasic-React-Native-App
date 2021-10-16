import React,{useState} from 'react'
import { View, Text, StyleSheet, TextInput,Button,ScrollView,TouchableOpacity } from 'react-native'

const OfferPromoCode = () => {
    const [offer, setOffer] = useState('Get Travomint Emails!')
    return (
          <View  style={styles.myShadow}>
            <View style={{justifyContent: 'center',alignItems: 'center', marginVertical:8}}>
                <Text style={{ color: '#000' , fontSize:20  , fontWeight: 'bold' }}>Sign Up and Save Up to <Text style={{color:"#F15b2F"}}>40%</Text> off</Text>
            </View>
            <View>
                <View>
                <View  style={{marginVertical:20}}>
                    <Text style={{marginLeft:12,fontWeight:'bold', fontSize:20}}>Avail the offer with your promo code!</Text>
                    <View style={{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                      onChangeText={setOffer}
                      value={offer}
                      placeholder="Get Travomint Emails!"
                    />
                   
                    <TouchableOpacity style={styles.whiteButton}>
                      <Text style={{textAlign:"center", padding:20,fontSize:20, color:"#fff"}}>Promo Code</Text>
                    </TouchableOpacity>
                    {/* <Button style={{}} color="#F15b2F" title="Get Promo Code"/> */}
                    </View>
                    <View>
                        <Text style={{marginLeft:12}}>T&C Applicable.</Text>
                    </View>
                </View>
                </View>
            </View>

          </View>
    )
}

const styles = StyleSheet.create({
        input: {
            width:'50%',
            height: 40,
            // margin: 12,
            marginTop:12,
            marginBottom:12,
            marginLeft:12,
            borderWidth: 1,
            padding: 10,
            borderBottomLeftRadius:30,
            borderTopLeftRadius:30
          },
          whiteButton : {
            borderWidth:1,
            overflow : "hidden",
            marginTop: 12,
            marginRight: 12,
            // marginBottom:12,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor:"#F15b2F",
            height:"50%",
            borderBottomRightRadius:30,
            borderTopRightRadius:30,
            borderColor:"white",
        },
        myShadow: {
            backgroundColor: "#eee",
            //flex: 1,
            // height:50,
            height:"8%",
            borderRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 5,
          },
})
export default OfferPromoCode