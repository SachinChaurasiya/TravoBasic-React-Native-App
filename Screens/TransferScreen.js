import React from 'react';
import {View, StyleSheet,Text,ScrollView} from 'react-native';
import TransferFooter from '../Components/Transfer/TransferFooter';
import TransferHeader from '../Components/Transfer/TransferHeader';
import TransferIconSection from '../Components/Transfer/TransferIconSection';
import TransferMainSection from '../Components/Transfer/TransferMainSection';
import TransferReview from '../Components/Transfer/TransferReview';

const Transferscreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <TransferHeader/>
            <TransferMainSection/>
            <TransferIconSection/>
            <TransferReview/>
            <TransferFooter/>
            {/* <Text>Transfer</Text> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff"
    }
})

export default Transferscreen;
