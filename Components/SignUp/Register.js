// import React from 'react';
// import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Google from '../../assets/GooglePng.png'
// const Register = () => {
//     return (
//         <View>
//             <View style={styles.boxstyles}>
//                 <View style={{justifyContent: 'center',alignSelf: 'center',alignItems: 'center',textAlign: 'center'}}>
//                 <View style={styles.IconDiv}>
//                   <FontAwesome5 
//                   name="user"
//                   color="white"
//                   size ={40} />
//                   </View>
//                     <View style={{marginVertical:10}}>
//                         <Text style={{fontSize:20,fontWeight: 'bold'}}>Register</Text>
//                     </View>
//                     <View>
//                         <Text style={{marginHorizontal:12}}>Create Your Account. It's Free and only Takes A Minute</Text>
//                     </View>
//                 </View>
//                 <View>
//     <View style={{ marginTop: 15, flexDirection: "row" }}>
//       <GooglePlacesAutocomplete
//         placeholder="Enter Tour Name"
//         styles={{
//           textInput: {
//             backgroundColor: "#fff",
//             borderRadius: 20,
//             fontWeight: "700",
//             marginTop: 7,
//           },
//           textInputContainer: {
//             backgroundColor: "#fff",
//             borderRadius: 50,
//             flexDirection: "row",
//             alignItems: "center",
//             marginRight: 10,
//           },
//         }}
//         renderLeftButton={() => (
//           <View style={{ marginLeft: 10 }}>
//             <Ionicons name="ios-person-circle" size={24} />
//           </View>
//         )}
//       />
//     </View>

//     <View style={{ marginTop: 15, flexDirection: "row" }}>
//       <GooglePlacesAutocomplete
//         placeholder="Enter Your E-Mail"
//         styles={{
//           textInput: {
//             backgroundColor: "#fff",
//             borderRadius: 20,
//             fontWeight: "700",
//             marginTop: 7,
//           },
//           textInputContainer: {
//             backgroundColor: "#fff",
//             borderRadius: 50,
//             flexDirection: "row",
//             alignItems: "center",
//             marginRight: 10,
//           },
//         }}
//         renderLeftButton={() => (
//           <View style={{ marginLeft: 10 }}>
//             <Ionicons name="md-mail" size={24} />
//           </View>
//         )}
//       />
//     </View>

//     <View style={{ marginTop: 15, flexDirection: "row" }}>
//       <GooglePlacesAutocomplete
//         placeholder="Enter Your Password"
//         styles={{
//           textInput: {
//             backgroundColor: "#fff",
//             borderRadius: 20,
//             fontWeight: "700",
//             marginTop: 7,
//           },
//           textInputContainer: {
//             backgroundColor: "#fff",
//             borderRadius: 50,
//             flexDirection: "row",
//             alignItems: "center",
//             marginRight: 10,
//           },
//         }}
//         renderLeftButton={() => (
//           <View style={{ marginLeft: 10 }}>
//             {/* <Ionicons name="location-sharp" size={24} /> */}
//             <FontAwesome5 name="unlock-alt" size={24}/>
//           </View>
//         )}
//       />
//     </View>

//     <View style={{ marginTop: 15, flexDirection: "row" }}>
//       <GooglePlacesAutocomplete
//         placeholder="Enter Your Confirm Password"
//         styles={{
//           textInput: {
//             backgroundColor: "#fff",
//             borderRadius: 20,
//             fontWeight: "700",
//             marginTop: 7,
//           },
//           textInputContainer: {
//             backgroundColor: "#fff",
//             borderRadius: 50,
//             flexDirection: "row",
//             alignItems: "center",
//             marginRight: 10,
//           },
//         }}
//         renderLeftButton={() => (
//           <View style={{ marginLeft: 10 }}>
//             {/* <Ionicons name="location-sharp" size={24} /> */}
//             <FontAwesome5 name="unlock-alt" size={24}/>
//           </View>
//         )}
//       />
//     </View>

//                  </View>
//             {/* Button */}

            
//             <View style={{marginLeft:100,marginRight:100,marginTop:30}}>
//             <TouchableOpacity>
//                 <View style={{ backgroundColor:"#F15b2F" ,textAlign: 'center',alignItems: 'center'}}>
//                     <Text style={{padding:10}}>Register</Text>
//                 </View>
//                 </TouchableOpacity>
//             </View>
            

//             {/* Sign in with Google */}

            
//             <View style={{flexDirection: 'row',marginHorizontal:100,textAlign: 'center',alignItems: 'center',marginTop:30}}>
//                 <View>
//                 <Image source={Google} style = {{resizeMode: 'contain',width : 20,height: 20}} />
//                 </View>
//                 <TouchableOpacity>
//                 <View style={{marginLeft:10}}>
//                     <Text>Register With Google</Text>
//                 </View>
//                 </TouchableOpacity>
//             </View>
           
//              </View>
//          </View>
//     );
// }

// const styles = StyleSheet.create({
//     boxstyles:{
//         marginHorizontal:12,
//         marginVertical:12,
//         // backgroundColor:"#eee",
//         height:"100%"
//     },
//     IconDiv:{
//         marginTop:10,
//         backgroundColor:"#f15b2F",
//         height:80,
//         width:80,
//         borderRadius:100,
//         alignItems:"center",
//         justifyContent:"center"
//     },
// })

// export default Register;




import React, {useState} from 'react';
import { View ,Text , StyleSheet , TextInput , CheckBox , Button ,Image , TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as yup from 'yup';
import { Formik } from 'formik';

const GoogleIcon ={ uri:"https://image.similarpng.com/thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png"}


const Register = ({navigation}) => {

const [isSelected , setSelection] = useState(false);

    return (
<SafeAreaView>
    <ImageBackground
    source={require('../../assets/5T.jpg')}
    style= {{resideMode:"contain" , height:'100%' , width:'100%'}}
    >
        <Formik
        initialValues = {{
            firstName:'',
            lastname:'',
            email:'',
            password:'',
            reenterpassword:''
        }}
        onSubmit={values=>Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
            firstName:yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too Long!')
            .required('Please , Provide your Firstname!'),
           lastname:yup.string()
           .min(2, "Too short!")
           .max(50 , "Too long!")
           .required('Please , provide your Lastname'),
            email:yup
            .string()
            .email()
            .required(),
           password:yup
            .string()
            .min(4)
            .max(10, 'Password should not excced 10 chars.')
            .required(),
            reenterpassword:yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
            
        })}
        > 
         {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <View>
            <View style  ={{flex:1, flexDirection:'row'  }}>
               <View style = {styles.Icon}>
                   <View style = {styles.IconDiv}>
                  <FontAwesome5 
                  name="user"
                  color="white"
                  size ={40} />
                  </View>
                
                  <View style ={{marginTop:10 }}>
                      <View style= {{justifyContent:"center" , alignItems:"center"}}>
                          <Text style={{fontSize:20 , fontWeight:"bold"}}>
                             Register
                           </Text>
                      </View>
                           <View style = {{marginTop:8}}>
                             <Text>Create a free account . It's free</Text>
                          </View>
                  </View>

                  <View style = {{marginTop:20 , marginRight:10  , flexDirection:"row"  }}>
                      <View style = {{marginTop:8 , marginRight:8}}> 
                          <FontAwesome5  
                                size = {20}
                                name="user"
                                color="black" 
                                />
                                </View>
                          <View>
                          <TextInput
                            value={values.firstName}
                            onChangeText={handleChange('firstName')}
                            onBlur={()=> setFieldTouched('firstName')}
                            style={{height:40 , width:200 , borderBottomColor:'black',borderBottomWidth:1 }}
                            placeholder="First Name"
                            placeholderTextColor="black"
                            />
                      </View>
                 
                  </View>
                  {touched.firstName && errors.firstName && <Text style = {{fontSize:12 , color:'red'}}>{errors.firstName}</Text>}

                  <View style = {{marginTop:20 , marginRight:10  , flexDirection:"row"    }}>
                      <View style = {{marginTop:8 ,marginRight:8 }}> 
                          <FontAwesome5  
                                size = {20}
                                name="user"
                                color="black" 
                                />
                                </View>
                          <View>
                          <TextInput
                            value={values.lastname}
                            
                            onChangeText={handleChange('lastname')}
                            onBlur={()=> setFieldTouched('lastname')}
                            style={{height:40 , width:200 , borderBottomColor:'black',borderBottomWidth:1 }}
                            placeholder="Last Name "
                            placeholderTextColor="black"
                            />
                      </View>
                  </View>
                  {touched.lastname &&  errors.lastname && <Text style ={{fontSize:12 , color:"red"}}>{errors.lastname}</Text>}
                  
                  <View style = {{marginTop:20 , marginRight:10  , flexDirection:"row"    }}>
                      <View style = {{marginTop:8 ,marginRight:8 }}> 
                          <FontAwesome5  
                                size = {20}
                                name="envelope"
                                color="black" 
                                />
                                </View>
                          <View>
                          <TextInput
                            value={values.email}
                            
                            onChangeText={handleChange('email')}
                            onBlur={()=> setFieldTouched('email')}
                            style={{height:40 , width:200 , borderBottomColor:'black',borderBottomWidth:1 }}
                            placeholder="Email"
                            placeholderTextColor="black"
                            />
                      </View>
                  </View>

                  {touched.email &&  errors.email && <Text style ={{fontSize:12 , color:"red"}}>{errors.email}</Text>}
                  <View style = {{marginTop:20 , marginRight:10  , flexDirection:"row"    }}>
                      <View style = {{marginTop:8 ,marginRight:8 }}> 
                          <FontAwesome5  
                                size = {20}
                                name="unlock-alt"
                                color="black" 
                                />
                                </View>
                          <View>
                          <TextInput
                            value={values.password}

                            onChangeText={handleChange('password')}
                            onBlur={()=> setFieldTouched('password')}
                            style={{height:40 , width:200 , borderBottomColor:'black',borderBottomWidth:1 }}
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry
                            />
                      </View>
                  </View>
                  {touched.password &&  errors.password && <Text style ={{fontSize:12 , color:"red"}}>{errors.password}</Text>}
                  <View style = {{marginTop:20 , marginRight:10  , flexDirection:"row"    }}>
                      <View style = {{marginTop:8 ,marginRight:8 }}> 
                          <FontAwesome5  
                                size = {20}
                                name="unlock-alt"
                                color="black" 
                                />
                                </View>
                          <View>
                          <TextInput
                            value={values.reenterpassword}

                            onChangeText={handleChange('reenterpassword')}
                            onBlur={()=> setFieldTouched('reenterpassword')}
                            style={{height:40 , width:200 , borderBottomColor:'black',borderBottomWidth:1 }}
                            placeholder="Re-type Password"
                            placeholderTextColor="black"
                            secureTextEntry
                            />
                      </View>
                  </View>
                  {touched.reenterpassword &&  errors.reenterpassword && <Text style ={{fontSize:12 , color:"red"}}>{errors.reenterpassword}</Text>}
                  <View style = {{marginTop:40 , width:'50%'}}>
                      <Button 
                      onPress ={handleSubmit}
                      title = "Login In"
                      color  = "#f15b2F"
                      disabled={!isValid}
                      onSubmit={handleSubmit}
                      />
                  </View>
                  <View style = {{flexDirection:'row' , marginTop:10}}>
                  <Text style = {{color:"white"}}>Already Have a Account?</Text>
                  <Text style = {{color:"#f15b2F"}}>Sign In</Text>
                  </View>
               </View>  
          </View>    
        </View>
         )}
        </Formik>
        </ImageBackground>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    Icon:{
        flex: 3,
        height:600,
        flexDirection:"column" , 
        margin: 10, 
        justifyContent:'center',
        alignItems:"center",
       
    },
    IconDiv:{
        backgroundColor:"#f15b2F",
        height:80,
        width:80,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
})
export default Register;