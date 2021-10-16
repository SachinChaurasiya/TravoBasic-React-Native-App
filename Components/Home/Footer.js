import React from  'react';
import { Text , View , Image } from 'react-native';

const image1={uri:'https://www.travomint.com/resources/images/logo.svg'}

const footerImage={uri:'https://www.travomint.com/resources/images/cardIn-logos.png'}
const footerImage1={uri: 'https://www.travomint.com/resources/images/godaddy.gif'}

const Footer = () => {
    return (
        <View style = {{marginBottom:10}}>
              <View style ={{backgroundColor:"#2f4f4f", justifyContent:"center" ,  alignItems:"center" }}>

                <View style = {{backgroundColor:"#2f4f4f"}}>
                        <Text style={{color:"whitesmoke",marginLeft:20, marginTop:10 }}>
                         (DBA of SNVA TravelTech Pvt Ltd)
                        </Text>
                </View>
                <View>
                    <View style = {{ color:"white",  backgroundColor:"#2f4f4f" ,marginTop:10 , fontSize:15}} >
                              <Image 
                                  source = {image1}
                                  style={{ resizeMode:"contain", width:50, height:10, marginTop:10}}
                                  />
                            <Text style={{color:"#fff"}}>Copyright © 2021. All rights reseved.</Text> 
                         </View>
                    <View style = {{backgroundColor:"#2f4f4f",flexDirection:"row"}} >
                          <Image
                               source ={footerImage}
                               style={{  resizeMode:"center", width:100, height:40 , marginLeft:30, marginTop:10}}
                           />
                         <Image 
                              source ={footerImage1}
                              style={{ resizeMode:"contain" , width:100, height:40, marginLeft:8, marginTop:10}}
                          />
                    </View>
               </View>
               <Text style = {{color : "whitesmoke",textAlign: "center",marginBottom:10}}>We assure safe and secure transactions through powerful Godaddy Secure Seal</Text>
            </View>    
        </View>
    )
}

export default Footer;
