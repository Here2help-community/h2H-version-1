// @refresh reset
import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, Text, TextInput, Button, YellowBox } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore'

import store_redux_thunk from '../../asyncStorage/store'
import { SIGN_IN, SIGN_OUT, GOOGLE_AUTH, EMAIL_PASSWORD_AUTH, RESTORE_TOKEN } from "../../asyncStorage/actionsList";


YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

const Chat_Screen = props => {

  // make user uid as key
  var user_from_auth = store_redux_thunk.getState().userToken;
  // if a google user then target changes
  if (store_redux_thunk.getState().authType === GOOGLE_AUTH) {
    user_from_auth = user_from_auth.user;
  }
  const uid = user_from_auth.uid;
  const username = user_from_auth.displayName;


  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    readUser()
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data()
          //createdAt is firebase.firestore.Timestamp instance
          //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
          return { ...message, createdAt: message.createdAt.toDate() }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      appendMessages(messagesFirestore)
    })
    return () => unsubscribe()
  }, [])

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    },
    [messages]
  )

  async function readUser() {
    const user = await AsyncStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  };

  async function handlePress() {
    const _id = Math.random().toString(36).substring(7)
    const user = { _id, name }
    await AsyncStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  async function handleSend(messages) {
    const writes = messages.map((m) => chatsRef.add(m))
    await Promise.all(writes)
  }


  if (!user) {
    return (
      <View style={styles.screen}>
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
        <Button onPress={handlePress} title="Enter the chat" />
      </View>
    )
  }
  return <GiftedChat messages={messages} user={user} onSend={handleSend} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Chat_Screen;