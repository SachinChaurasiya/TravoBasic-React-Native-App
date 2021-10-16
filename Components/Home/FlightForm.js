import React,{useState} from "react";
import { StyleSheet, Text, View, Button, ImageBackground , TextInput } from "react-native";
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import { Picker } from "@react-native-picker/picker";
// import DropDownPicker from 'react-native-dropdown-picker'


const FlightForm = (props) => {

const [selectedValue , setSelectedValue] = useState("Select Class");
 const [secondselectedValue , setSecondSelectedValue] = useState("Select");

const Separator = () => (
  <View style ={styles.separator}></View>
)


  return (
  
    <View >  
      <ImageBackground
      source={require('./170249.jpg')}
      style= {{resizeMode:"contain" , height:300 , opacity:1.0 }}>
<View style = {{ margin:10 , borderRadius:10 }}>
         <View style = {{flexDirection:'column'  , borderTopRightRadius:10 ,  borderTopLeftRadius:10 }}> 
             <View style ={{ flexDirection:'row' , justifyContent: "space-around"}}>
                <Button title="Round Trip" color="#F15b2F"   />
                <Button 
                title="one way"
                color ="#F15b2F"
                /> 
             </View>
         </View>

   <View style={{flexDirection: 'row' ,justifyContent:"space-between"}}>
     <View>
     <View style={{flexDirection: 'row',marginTop: 30 ,backgroundColor:"#f5f5f5",padding:10,borderRadius:20}}>
       <FontAwesome5 
       style={{marginRight:5}}
        size={24}
       name="map-marker-alt"
       co
       />
       <TextInput placeholder="Search" style={{width:120}}/>
     </View>
     <View style={{flexDirection: 'row',marginTop: 15,backgroundColor:"#f5f5f5",padding:10,borderRadius:20}}>
       <FontAwesome5 
       style={{marginRight:5}}
       size={24}
       name="calendar-alt"
       co
       />
       <TextInput placeholder="Search" style={{width:100}}/>
     </View>

     <View style ={{marginTop: 25}}>
       <View>
       </View>
             <Picker   
                 mode='dropdown'
                 selectedValue={selectedValue}
                 style={{height:30,width:100 }}
                 onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)}>
                   <Picker.Item label = "Select"/>
                   <Picker.Item label = "Adult(18+)" value="Adult"  />
                   <Picker.Item label = "Children(2-11YRS)" value="Children" />
                   <Picker.Item label = "Infant(On lap)" value="Infant(on lap)" />
               </Picker>
            </View>
       </View>

        {/* <View>
        <View>
              <FontAwesome5
              style={{marginTop:30}}
              name="exchange-alt"
              size={36}
              color ="#F15b2F" />
          </View>
        </View> */}




       <View>
     <View style={{flexDirection: 'row',marginTop: 30, backgroundColor:"#f5f5f5",padding:10,borderRadius:20}}>
       <FontAwesome5 
       style={{marginRight:5}}
       size={24}
       name="map-marker-alt"
       co
       />
       <TextInput placeholder="Search" style={{width:100}}/>
     </View>

     <View style={{flexDirection: 'row',marginTop: 15,backgroundColor:"#f5f5f5",padding:10,borderRadius:20}}>
       <FontAwesome5 
       style={{marginRight:5}}
       size={24}
       name="calendar-alt"
       co
       />
       <TextInput placeholder="Search" style={{width:100}}/>
     </View>

     <View style={{flexDirection: 'row',marginTop: 15}}>
         <View style ={{margin:10 }}>
         <Picker 
         mode="dropdown"
             secondselectedValue={secondselectedValue}
             style={{height:30,width:100,borderBottomEndColor:"black"}} 
             onValueChange={(itemValue,itemIndex) => setSecondSelectedValue(itemValue)}
             >
                <Picker.Item label ="Select Class" value="" />      
                <Picker.Item label ="Economy" value="Economy" />
                <Picker.Item label ="PremiumEconomy" value="Pe" />
                <Picker.Item label ="Business" value="Business" />
                <Picker.Item label ="First Class" value="Fc" />
          </Picker>
     </View>
     </View>
     </View>
  </View>

        <View>
        <Button title = "Submit" color="#f15b2F" 
        onPress={()=>props.navigation.navigate('FlightScreen')}/> 
        </View>
          </View>
          </ImageBackground>
          <Separator />
         </View> 
      
  );
};

const styles = StyleSheet.create({
    placeholder:{
      width:60,
      color:"white",
      height:50,

    },
    Searchbtn:{
    marginLeft:70,
    marginRight:70,
    margin:10,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default FlightForm;

