import React from "react";
import {View, Text , Image} from 'react-native'


const Person1 = {uri:'https://static.generated.photos/vue-static/face-generator/landing/wall/20.jpg'}
const Person2 = {uri:'https://petapixel.com/assets/uploads/2019/02/download-2-800x800.jpeg'}
const Person3 = {uri:"https://petapixel.com/assets/uploads/2019/02/download-3-800x800.jpeg"}


const TransferReview = () => {
    return(
        <View style = {{justifyContent:"center", alignItems:"center",marginTop:100,backgroundColor:"tan"}}>
            <View>
                <Text style = {{ margin:20,  fontSize:28 }}>
                    What Customers Have Said
                </Text>
            </View>
            <View style = {{marginTop:20, width:'80%' }}>
            <View style= {{marginRight:150 , flexDirection:"row"}}>
                <View>
                <Image
                 source = {Person1}
                 style= {{resizeMode:'contain' , width:70 , height:70,borderRadius:50 }}
                />
                </View>
                <View>
                    <Text style = {{fontSize:20, margin:20}}>
                        Charles J.
                    </Text>
                </View>
          </View>

                <Text style ={{}}>
                
                    The cab was waiting at our apartment as requested for 4:45am Morning. Driver was professional and ride was smooth. Reservation was simple and quick. Highly recommend without a doubt.
   
                </Text>
            </View>
           

           
            <View style = {{marginTop:20, width:'80%' }}>
            <View style= {{marginRight:150 , flexDirection:"row"}}>
                <View >
                <Image
                 source = {Person2}
                 style= {{resizeMode:'contain' , width:70 , height:70,borderRadius:50 }}
                />
                </View>
                <View>
                    <Text style = {{fontSize:20, margin:20}}>
                        Kar S.
                    </Text>
                 </View>
          </View>
                <Text style ={{}}>
                 
                    The ride was a surprise for my wife's visit. She was thrilled and the driver was extremely nice.
           
                </Text>
            </View>

         
            <View style = {{marginTop:20, width:'80%' }}>
           <View>
            <View style= {{marginRight:150,flexDirection:'row'}}>
               <View>
                <Image
                 source = {Person3}
                 style= {{resizeMode:'contain' , width:70 , height:70, borderRadius:50 }}
                /></View>
                <View>
                    <Text style = {{margin:20 ,  fontSize:20 }}>
                        Talvin D.
                    </Text>
                
                </View>
                </View>
          </View>
        <View style={{marginBottom:30}}>
            <Text>My ride and driver were great, he was very nice, talkative but not too much and ON TIME which is very important to me. I give your service a 5 out of 5 stars.</Text>
            </View>
            </View>
        </View>
    )
}

export default TransferReview;  