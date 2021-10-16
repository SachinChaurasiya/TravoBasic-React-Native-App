import React from 'react'
import { Image , StyleSheet , View,Text, Button , TouchableOpacity } from 'react-native'
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'



const FlightSearchHeader = () => {
  return (
    <View>
      <View style = {{height:60,backgroundColor:"#006ee3"  ,flexDirection:"row" , justifyContent:"space-between" }}>
       <View style={{marginLeft:10,marginTop:5 }}>
             <TouchableOpacity>
                 <View style={{flexDirection:"row"}}>
               <Text style={{fontSize:15 , color:"white"}}>
                 DEL
                 </Text> 
                 <FontAwesome5 
                 style={{marginHorizontal:10}}
                    name="exchange-alt"
                    color="white"
                    size={20}
                 />
                 <Text style={{fontSize:15 , color:"white"}}>
                   MAA
                </Text>
                </View>
                <View style={{flexDirection:"row" ,alignItems: "center",paddingTop:8}}>
                <FontAwesome5 
                  name="clock"
                  size={15}
                  color="white"
                   />
                   <Text  style ={{color:"white"}}>
                      Oct 08 - Oct 10 | Class:Economy
                   </Text>
                </View>
             </TouchableOpacity>
       </View> 


            <View style={{margin:10 ,width:90 , height:35 , borderRadius:10, backgroundColor:"whitesmoke"  , justifyContent:"center" , alignItems:"center"}}>
          <TouchableOpacity>
          <Text style={{textTransform:"uppercase"}}>
          <FontAwesome5 
            name="pencil-alt"
            style = {{margin:2}} 
            />
            Modify
          </Text>
         </TouchableOpacity>
            </View>   
      </View>
        
    </View>
  )
}

export default FlightSearchHeader;