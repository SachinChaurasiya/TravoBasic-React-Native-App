import React from 'react';
import {View, StyleSheet,Text, ScrollView } from 'react-native';
import Aboutus from '../Components/Home/AboutUs';
import DealsArea from '../Components/Home/DealsArea';
import FTH_Page from '../Components/Home/FHT_Page';
import FlightForm from '../Components/Home/FlightForm';
 import Footer from '../Components/Home/Footer';
import OfferPromoCode from '../Components/Home/OfferPromoCode';
import PopularDeals from '../Components/Home/PopularDeals';
import WeekendCards from '../Components/Home/WeekendCards';
import WeekendTours from '../Components/Home/WeekendTour';

const Flightscreen = (props) => {
  return (
    
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <FTH_Page {...props}/>
      <FlightForm {...props}/>
      <OfferPromoCode/>
      <PopularDeals/>
      <DealsArea/>
      <WeekendTours/>
      <WeekendCards/>
      <Aboutus/>
      <Footer/>   
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex:1
  }
})

export default Flightscreen;
