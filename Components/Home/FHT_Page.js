import React,{useState} from 'react';
import {StyleSheet, Text, View,TextInput,Button, ScrollView,TouchableOpacity} from 'react-native';
import{FontAwesome5} from 'react-native-vector-icons';
import {Entypo} from 'react-native-vector-icons';
import { StatusBar } from 'expo-status-bar';

const FTH_Page = (props) => {


    const Separator = () => (
        <View style ={styles.separator}></View>
      )
    return (
      
          <View style={styles.container}>
            <View style={{marginHorizontal:12,marginVertical:10}}>
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{flexDirection: 'column',paddingHorizontal:20,}}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <Entypo name="aircraft-take-off" size={24} color="#F15b2F"/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold',color:"#F15b2F"}}> Flight</Text>  
                </View>
                <View style={{flexDirection: 'column',paddingHorizontal:20, }}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <FontAwesome5 name="hotel" size={24}/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold'}}> Hotel</Text>
                </View>
                <TouchableOpacity  onPress={()=>props.navigation.navigate("Transfers")}>
                <View style={{flexDirection: 'column',paddingHorizontal:20}}>
                  <View style={{justifyContent: 'center',alignItems: 'center',paddingVertical:10}}>
                  <FontAwesome5 name="exchange-alt" size={24}/></View>
                  <Text style={{fontSize:15 ,fontWeight: 'bold'}}> Transfer</Text>
                </View>
                </TouchableOpacity>
              </View>
            </View>
            <Separator/>
              
            <StatusBar style="auto" />
            </View>
          </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        // flex:1,
        backgroundColor: '#fff',
      },
      separator: {
        marginVertical:10,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})

export default FTH_Page;


// import React,{useState} from 'react';
// import {View, StyleSheet,Text,TouchableOpacity,Button} from 'react-native';



// const FhtPage = ({navigation}) => {
//   const [ActiveTab, setActiveTab] = useState('Flight');
//   return (
//     <View style={{marginVertical:20}}>
//       <View style={{flexDirection:'row',alignSelf:"center"}}>
//         <View>
//       {/* <Buttons text="Flight" btnColor="#F15b2F" textColor="white" ActiveTab={ActiveTab} setActiveTab={setActiveTab}/> */}
//       <Buttons style={{width:100,height:200}} text="Flight" btnColor="#F15b2F" textColor="white" ActiveTab={ActiveTab} setActiveTab={setActiveTab}/>
//       </View>
//       <View>
//       <Buttons  text="Hotels" btnColor="white" textColor="black" ActiveTab={ActiveTab} setActiveTab={setActiveTab}/>
//       </View>
//       <View>
//         <TouchableOpacity >
//       <Buttons
//        onPress={()=>navigation.navigate("Transfers")}
//        text="Transfer" 
//        btnColor="white" 
//        textColor="black" 
//        ActiveTab={ActiveTab} 
//        setActiveTab={setActiveTab} 
//        />
//        </TouchableOpacity>
                      
//       </View>
//       </View>
//     </View>
//   );
// }



// const Buttons = (props) =>{
//   return(
//     <View>
//       <TouchableOpacity style={{
//         backgroundColor: props.ActiveTab === props.text ? "#F15b2F" : "White",
//         paddingVertical:6,
//         paddingHorizontal:16,
//         borderRadius:30
//       }}
//       onPress={() => props.setActiveTab(props.text)}
//       >
//       <Text style={{
//         color:props.ActiveTab === props.text ? "white":"#F15b2F",
//         fontSize:15,
//         fontWeight:"900"
//       }}>{props.text}</Text>


//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({

// })

// export default FhtPage;
