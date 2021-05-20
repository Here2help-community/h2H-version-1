
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import GoogleIcon from '../../../assets/images/googleIcon.png';
import { signInWithFacebook } from '../../utils/authMethods';

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const smallButtonWidth = (SCREEN_WIDTH / 2) - 25

export const FacebookAuthButton = () => (
    <TouchableOpacity>
        <View style={[styles.button, { backgroundColor: "#3C5A99" }]}>
            <FontAwesome name="facebook-f" size={24} color="#fff" style={{ marginTop: 10, marginRight: 30 }} />
            <Text style={{ fontSize: 18, marginTop: 10, color: "#fff" }}>Sign In with Facebook</Text>
        </View>
    </TouchableOpacity>
)

export const GoogleAuthButton = () => (
    <TouchableOpacity>
        <View style={[styles.button, styles.googleButton]}>
            <Image source={GoogleIcon} style={{ width: 23, height: 23, marginTop: 10, marginRight: 30 }} />
            <Text style={{ fontSize: 18, marginTop: 10, color: "#939393" }}>Sign In with Google</Text>
        </View>
    </TouchableOpacity>
)

export const FacebookSmallAuthButton = () => (
    <TouchableOpacity onPress={signInWithFacebook}>
        <View style={[styles.button, { backgroundColor: "#3C5A99" }]}>
            <Text style={[styles.buttonText, {  color: "#fff" }]}>Login with </Text>
            <FontAwesome name="facebook-f" size={24} color="#fff" style={{ marginTop: 10, }} />
        </View>
    </TouchableOpacity>
)

export const GoogleSmallAuthButton = () => (
    <TouchableOpacity>
        <View style={[styles.button, styles.googleButton]}>
            <Text style={[styles.buttonText, { color: "#939393" }]}>Login with </Text>
            <Image source={GoogleIcon} style={{ width: 23, height: 23, marginTop: 10 }} />
        </View>
    </TouchableOpacity>
)

const elevation = 5

const styles = StyleSheet.create({
    button: {
        width: smallButtonWidth,
        height: 46,
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 0.3,
        borderColor: "#939393",
        borderRadius: 4,
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    },
    googleButton: {
        backgroundColor: "#FFFFFF",
        borderWidth: 0.3,
        borderColor: "#939393"
    },
    buttonText: {
        fontSize: 18,
        marginTop: 10,
        marginRight: 10
    }
})
