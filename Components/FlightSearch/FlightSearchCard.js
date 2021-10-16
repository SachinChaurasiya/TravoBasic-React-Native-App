import React, {useState} from 'react' ;
import { View ,Text , Image, CheckBox , FlatList } from 'react-native';
import logo from '../../assets/2T.png'


const FlightSearchCard = () =>{
    const [isSelected , setSelection] = useState(false);
    return(
        <View>
           
            <View style = {{ borderRadius:4 ,borderStyle:"solid", borderColor:"#000",borderWidth:1 ,flexDirection:"row",justifyContent:"space-evenly" , margin:10 }}>
                    <View>
                    <Image  
                    source ={logo}
                    style ={{resizeMode:'cover', width:55 ,height:50}}
                    />
                    </View>
                    <View >
                        <Text>
                            
                        </Text>
                        <Text>
                        "9:30AM-12:30PM"
                        </Text>
                    </View>
                    <View>
                        <Text>5h 50m</Text>
                        <Text>(One-Stop)</Text>
                        <Text>MAA-DEL</Text>
                        <Text>G8-302/327</Text>
                    </View>
                    <View>
                        <Text>Form₹</Text>
                        <Text>7566.00</Text>
                    </View>
                              <View style ={{marginLeft:5, flexDirection:"row-reverse",flex:1, justifyContent:"flex-end" ,alignItems:"flex-end" }} >
                                 <Text>{isSelected?'selected' : 'select'}</Text>
                                    <CheckBox
                                        size = {20}
                                        value={isSelected }
                                        onValueChange={setSelection}
                                        />
                           </View>
          </View>
          {/* <FlatList
                data={data}
                renderItem={({item})=>  <Cards item={item} />}
                keytractor={(item) =>{item.id}}
                /> */}
        </View>
    )
}

export default FlightSearchCard;