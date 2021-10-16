import React, { useState } from "react";
import { StyleSheet , View , Text , Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Logo= {uri:"https://static.mozio.com/wldata/264/images/bGEekm_travomint_logo_long.png"}



const TransferHeader = () => {

const [selectedValue,setSelectedValue] = useState("select class")
const [SecondselectedValue,setSecondSelectedValue] = useState("select class")

    return(
        <>
         <View style={{backgroundColor:'#fff'}}>
             <View style = {{ backgroundColor:"whitesmoke",flexDirection:"row" , justifyContent:"space-between"}}>
                 <View >
                           <Picker 
                                selectedValue={selectedValue}
                                style={{height:45 , width: 130 ,backgroundColor:"whitesmoke" , color:"#f15b2F"}} 
                                onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)}>     
                               <Picker.Item label ="Language" value="" />      
                               <Picker.Item label ="ENGLISH" value="ENGLISH" />      
                               <Picker.Item label ="DEUTSCH" value="DEUTSCH" />
                               <Picker.Item label ="ITALIANO" value="ITALIANO" />
                               <Picker.Item label ="POLSKI" value="POLSKI" />
                               <Picker.Item label ="DUTCH" value="DUTCH" />
                           </Picker>
                           </View>
                           <View>
                           <Text style={{marginTop:14 ,fontWeight:"bold" , fontSize:15 ,  color:"#f15b2F"}}>
                               RESEND BOOKING
                           </Text>
                           </View>
                           <View>
                           <Picker 
                                selectedValue={SecondselectedValue}
                                style={{height:45 , width: 130,backgroundColor:"whitesmoke", color :'#f15b2F'}} 
                                onValueChange={(itemValue,itemIndex) => setSecondSelectedValue(itemValue)}>     
                               <Picker.Item label ="Currency" value="" />      
                               <Picker.Item label ="USD UNITED STATES DOLLAR" value="USD" />      
                               <Picker.Item label ="GBP BRITISH POUND" value="GBP" />
                               <Picker.Item label ="EUR EURO" value="EUR" />
                               <Picker.Item label ="AED UNITED ARAB EMIRATES DIRHAM" value="AED" />
                               <Picker.Item label ="AFN AFGHAN AFGHANI" value="AFN" />
                           </Picker>
                           </View>
          </View>
         </View>  
       </>   
    )
}
export default TransferHeader;