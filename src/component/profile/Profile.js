import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import {
  SectionList,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import { Accessory, Avatar } from "react-native-elements";
import { GOOGLE_AUTH, SIGN_OUT } from "../../asyncStorage/actionsList";
import store from "../../asyncStorage/store";
import Colors from "../../Items/Colors";
import fb from '../../config/firebase';
import StandardListItem from '../ListItems/StandardListItem/StandardListItem'
import AppText from "../AppText/AppText";
import styles from './ProfileStyles'
import { findUserByEmail } from "../../data/users";
import Modal from "../Modal/Modal";
import * as ImagePicker from 'expo-image-picker';

const db = firebase.firestore();

const ItemSeparator = () => {
  return <View style={styles.section_header}></View>
}

const pickImage = async (setPhotoURL) => {
  try {
    if (Platform.OS !== 'web') {
      console.log('imagepicker', ImagePicker)
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
      exif: true,
    });

    if (!result.cancelled) {
      setPhotoURL(result.uri);
    }
  } catch (e) {
    console.log(e)
  }
};

const renderProfileIntro = (props, fullName, photoURL, setPhotoURL) => {
  return (
    <View>
      <View style={styles.profile_intro_container}>{ 
        Platform.OS === 'android' && photoURL == null ?
          <View
            style={[styles.profile_avatar, { width: 72, height: 72, borderRadius: 36, justifyContent: 'center' }]}
          >
            <AppText style={{ fontSize: 36, color: 'white', textAlign: 'center' }}>{fullName ? fullName.toUpperCase()[0] : ''}</AppText>
            <TouchableOpacity
              style={{ position: 'absolute', bottom: 0, right: 0 }}
              onPress={() => pickImage(setPhotoURL)}
            >
              <Image
                source={require('../../../assets/images/edit_profile_pic.png')}
                style={{ width: 10, height: 10 }}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View> :
          <Avatar
            size={72}
            rounded
            title={fullName ? fullName.toUpperCase()[0] : ''}
            source={{
              uri: photoURL,
            }}
            containerStyle={styles.profile_avatar}
          >
            <Accessory  
              onPress={() => pickImage(setPhotoURL)}
              // resizeMode='contain'
              // source={require('../../../assets/images/edit_profile_pic.png')}
            />
          </Avatar>
        }
        <AppText style={styles.display_name}>{fullName}</AppText>

        <AppText
          style={styles.autobiography}
        >
          Enter short bio here. lorem ispum dolor amet, constructoradipiscing
          elit. Accuan, urna,viverra, faucibus auctor in euismod id nullam.
        </AppText>
      </View>
      <View style={styles.section_header}></View>
    </View> 
  )
}

const signout = () => {
  store.dispatch((dispatch) => {
    dispatch({ type: "showload" });
  });
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logged out");
      store.dispatch((dispatch, getState) => {
        dispatch({
          type: SIGN_OUT,
        });
        // console.log(getState());
      });
    })
    .catch((error) => {
      console.log("signout error ", error);
    });
};

const deleteAccount = () => {
  var user = firebase.auth().currentUser;

  store.dispatch((dispatch) => {
    dispatch({ type: "showload" });
  });
  user
    .delete()
    .then(function () {
      console.log("account deleted");
      store.dispatch((dispatch) => {
        dispatch({
          type: SIGN_OUT,
        });
      });
    })
    .catch(function (error) {
      console.log("account delete error ", error);
    });
};

const ProfileScreen = (props) => {
  const [tasksRequested, setNoTasks] = useState(0);
  const [fullName, setName] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();

  // make user uid as key
  var user = store.getState().userToken;
  // if a google user then target changes
  // if (store.getState().authType === GOOGLE_AUTH) {
  //   user = user.user;
  // }
  const uid = fb.auth().currentUser.uid;

  const DATA = [
    {
      title: '',
      data: [
        { field: 'First Name', value: fName },
        { field: 'Last Name', value: lName },
        { field: 'Email', value: email },
        {
          field: 'Change Password',
          value: <Feather name="chevron-right" size={18} color={Colors.profile_item_text} />,
          onPress: () => { console.log('TODO: Change password') },
        },
        { field: 'Address', value: address },
        { field: 'Phone', value: phone },
      ]
    },
    {
      title: '1',
      data: [
        {
          field: 'Settings',
          value: <Feather name="chevron-right" size={18} color={Colors.profile_item_text} />,
          onPress: () => navigation.navigate('settings'),
        },
      ]
    },
    {
      title: '2',
      data: [
        {
          field: 'Review History',
          value: '',
          onPress: () => console.log("TODO: View History"),
        },
        { field: 'Times Volunteered', value: 'TODO' },
        { field: 'Tasks Requested', value: 'TODO' },
      ]
    },
    {
      title: '3',
      data: [
        { field: 'Help',
          value: '',
          onPress: () => console.log("TODO: View Help"),
        },
        {
          field: 'Terms of Service',
          value: '',
          onPress: () => navigation.navigate('terms'),
        },
        {
          field: 'Privacy Policy',
          value: '',
          onPress: () => navigation.navigate('privacy'),
        },
        {
          field: 'Submit Feedback',
          value: '',
          onPress: () => navigation.navigate('feedback'),
        },
        {
          field: 'Delete Account',
          value: '',
          onPress: () => setShowModal(true),
        },
        {
          field: 'Log out from Account',
          value: '',
          onPress: () => signout(),
        }
      ]
    },
  ]

  useEffect(() => {
    // var docRef = db
    //   .collection("queries")
    //   .doc(uid)
    //   .collection("service-requests")
    //   .get()
    //   .then(function (querySnapshot) {
    //     var count = 0;
    //     querySnapshot.forEach(function (doc) {
    //       count++;
    //     });
    //     setNoTasks(count);
    //   })
    //   .catch(function (error) {
    //     console.log("Error getting document:", error);
    //   });

    let user = store.getState().user
    let n = user.displayName || user.fullName;
    setName(n);
    setEmail(user.email);
    var nameSplit = n.split(" ");
    setfName(nameSplit[0]);
    setlName(nameSplit[1]);
    setAddress(user.address);
    setPhone(user.phone);
    setPhotoURL(user.photoURL); 

  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.top_navigation}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={{ width: '33%' }}  
        >
          <AppText style={[styles.top_navigation_text, { textAlign: 'left' }]}>
            <Feather
              name='chevron-left'
              size={16}
              color='white'
            />
            Back
          </AppText>
        </TouchableOpacity>
        <View style={{ width: '33%' }}>
          <AppText style={[styles.top_navigation_header, { textAlign: 'center' }]}>
            Profile
          </AppText>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('editProfile')}
          style={{ width: '33%' }}
        >
          <AppText style={[styles.top_navigation_text, { textAlign: 'right' }]}>
            Edit
          </AppText>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.field + index }
        renderItem={
          ({ item }) => {
            return (
              <StandardListItem 
                field={<AppText style={styles.list_item_text}>{item.field}</AppText>}
                value={<AppText style={styles.list_item_text}>{item.value}</AppText>}
                onPress={item.onPress}
              />
            )
          }
        }
        ListHeaderComponent={
          renderProfileIntro(props, fullName, photoURL, setPhotoURL)
        }
        ListFooterComponent={<View style={styles.section_break}></View>}
        ItemSeparatorComponent={ItemSeparator}
        renderSectionHeader={
          ({ section: { title } }) => {
            return title ?
              <View style={styles.section_break}></View> :
              <View></View>
          }
        }
      />
      {
        showModal ?
          <View style={styles.tint}>
            <Modal
              header="Are you sure you want to delete"
              details="This action cannot be undone."
              cancel="Cancel"
              confirm="Delete"
              icon="trashCan"
              onCancel={() => setShowModal(false)}
              onConfirm={() => { 
                console.log("TODO: Delete account") 
                setShowModal(false)
              }}
            ></Modal>
          </View> :
          undefined
      }
      
    </SafeAreaView>
  );
};

export default ProfileScreen;
