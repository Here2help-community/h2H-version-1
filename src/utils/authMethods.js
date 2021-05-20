import { Alert, Platform } from 'react-native';
import firebase from "firebase";
import * as Google from 'expo-google-app-auth';
import store from '../asyncStorage/store';
import { EMAIL_PASSWORD_AUTH, HOME } from '../asyncStorage/actionsList';
import fb from '../config/firebase'
import * as Facebook from 'expo-facebook';
import { FACEBOOK_ID, FACEBOOK_VERSION } from './constants';

export const signInWithGoogle = () => {

}

const facebookAuthentication = (handler) => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult()
    .then(handler)
    .catch((error) => {
      console.log(error)
    });
}

const reactNativeFacebookAuthentication = () => {
  Facebook.initializeAsync(FACEBOOK_ID)
    .then(() => {
      Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      })
      .then(({ type, token, expirationDate, permissions, declinedPermissions }) => {
        if (type === 'success') {
          const credential = firebase.auth.FacebookAuthProvider.credential(token)
          firebase.auth()
            .signInWithCredential(credential)
            .catch(e => console.log(e))
        }
      })
      .catch(e => {
        console.log(e)
      })
    })
    .catch(e => { 
      console.log(e) 
    })
}

export const signInWithFacebook = () => {
  if (Platform.OS === 'web') {
    facebookAuthentication(result => {})
  } else {
    reactNativeFacebookAuthentication()
  }

  

}

export const signIn = async ({ email, password }) => {
    try {
        const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
        const user = resp.user
        store.dispatch((dispatch) => {
            dispatch({
                type: HOME,
                authType: EMAIL_PASSWORD_AUTH,
            });
        });
    } catch (error) {
        let errorMessage = "There was problem signing you in!"

        if (error.code === "auth/invalid-email") {
            errorMessage = "Invalid Email provided!"
        }
        if (error.code === "auth/wrong-password") {
            errorMessage = "Check your email or password!"
        }
        if (error.code === "auth/user-not-found") {
            errorMessage = "You are not a registered user!"
        }
        throw errorMessage
    }
}
