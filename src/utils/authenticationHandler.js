import firebase from 'firebase'
import fb from '../config/firebase'
import store from '../asyncStorage/store';
import { HOME, ONBOARD, SIGN_IN, SIGN_UP } from '../asyncStorage/actionsList';
import { addUser, findUserByEmail } from '../data/users'

export const handleAuthStateChange = async (user) => {
  if (user == null) {
    return
  }
  
  const state = store.getState().type
  
  switch(state) {
    case SIGN_UP:
      handleSignUp()
      break
    case SIGN_IN:
      handleSignIn()
      break
    default:
  }

}

const handleSignUp = () => {
  const user = fb.auth().currentUser;
  findUserByEmail(user.email)
    .then(result => {
      if (!result) {
        // TODO continue sign up process. User is simply added for now.
        addUser(user)
          .then(docRef => console.log(docRef))
      } else {
        // TODO display this info to the user
        console.log("Account already exists.")
      }
    })
    .catch(e => console.log(e))

}

const handleSignIn = () => {
  const user = fb.auth().currentUser;
  findUserByEmail(user.email)
    .then(result => {
      if (result) {
        store.dispatch({ type: HOME })
      } else {
        // TODO display this info to the user
        console.log("Account does not exist.")
      }
    })

}