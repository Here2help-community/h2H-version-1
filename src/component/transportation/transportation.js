import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Transport_screen = props => {
    return(

    <View style={styles.screen} >
        <Text>Transport Screen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Transport_screen;