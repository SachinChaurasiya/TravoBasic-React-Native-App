import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';


const image={uri: 'https://www.travomint.com/resources/images/footer_bg_img.jpg'}

const image1={uri:'https://www.travomint.com/resources/images/logo.svg'}



export default function Aboutus() {
  return (
    <View>
    <View>
    <View style =  {styles.container}>
      <View >
      <ImageBackground
       source={image} 
      style={{width: '100%', height: '100%' , }} >
        
      

        <Image
       source={image1} 
       style={{resizeMode:"contain",
       width:150,
       height:40,
       marginTop:20,
       marginLeft:10
       }}
      />


     <Text style ={[styles.Text,{opacity:0.8, marginTop:10, marginLeft:10,  marginRight:10, marginBottom:10 , lineHeight:25 }]}> 
      Travomint.com is an independent travel portal with no third party association. 
      By using travomint.com, you agree that travomint is not accountable for any loss - direct or indirect, arising of offers, materials or links to other sites found on this website. 
      In case of queries, reach us directly at our Toll Free Number-
      </Text>
    
      <Text style ={{ marginLeft:10, fontSize:25  , color:"#f15b2F" , fontWeight:"bold"}}>
        Who Are We
      </Text>
      <View style = {{marginLeft:10}}>
      <View style={{
                        width: 110,
                        height: 4,
                        backgroundColor: '#f15b2f',
                        marginTop: 10,
                    }}>
                      
                    </View>
                     <View style={{
                        width: 90,
                        height: 4,
                        backgroundColor: '#f15b2F',
                        marginTop: 8,

                      }}></View>
      </View>
     
      <View style ={{ flexDirection:"column"}} >
      <View style = {{margin:10 ,  fontSize:10, fontWeight:"bold"}}>
          
          <Text  style = {{fontWeight:"bold" , fontSize:18}}>Frequently Asked Questions</Text> 
          
          <Text style={{marginVertical:10 , fontWeight:"bold", fontSize:18}}>Terms And Condition</Text>
          
          <Text style = {{marginBottom:10 , fontWeight:"bold",fontSize:18 }}>Privacy Policy</Text>
          
          <Text style = {{fontWeight:"bold" , fontSize:18}}>About Us</Text>
          </View>

        </View>

      </ImageBackground>

     </View>

    </View> 
    </View>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  Text:{
    color:"black",
    fontSize:15,

  },
  // image:{  
  //     overflow: 'hidden',
  //     shadowColor: 'grey',
  //     shadowRadius: 10,
  //     shadowOpacity:12,
  //   },
});