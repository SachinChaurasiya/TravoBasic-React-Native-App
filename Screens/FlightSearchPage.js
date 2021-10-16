import React from 'react';
import {View, StyleSheet,Text,ScrollView} from 'react-native';
import FlightSearchCard from '../Components/FlightSearch/FlightSearchCard';
import Flightsearchdf from '../Components/FlightSearch/FlightSearchDF';
import Flightsearchfilter from '../Components/FlightSearch/FlightSearchFilter';
import FlightSearchHeader from '../Components/FlightSearch/FlightSearchHeader';

const Flightsearchpage = () => {
    return (
        <ScrollView>
            {/* <Text>FlightSearch</Text> */}
            <FlightSearchHeader/>
            <Flightsearchfilter/>
            <Flightsearchdf/>
            <FlightSearchCard/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Flightsearchpage;

