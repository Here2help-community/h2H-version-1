import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Picker from './socialise-picker';
import Colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';

const Social_Screen = (props) => {
  const navigation = useNavigation();

  const [SocialSet, SetType] = useState();
  const typeHandler = (item) => {SetType(item)};

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>
            <Feather name='chevron-left' size={15} color={Colors.primary3} />
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <Text style={styles.head}>Socialise</Text>
      </View>
      <View style={styles.container2}>
        <Image
          source={require('../h2h/s5.png')}
          resizeMode='contain'
          style={{
            width: '100%',
            height: '100%',
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={styles.container3}>
        <Text style={styles.head2}>
          Whether it be a phone call with a new friend, grabbing a coffee, or
          seeking a new hiking buddy.
        </Text>
      </View>

      <View style={styles.container4}>
        <Text style={styles.head3}>Select type of social activity</Text>
      </View>


      <View style={styles.container5}>
        <Picker selectType={typeHandler}/>
        </View>


      <View style={styles.container6}>
        <Dark_Button onPress={() => props.navigation.navigate('socialscreen2',
        {
          ...props.route.params,
          SocialSet,
        }
        )}>
          <Text>Request for Socialise</Text>
        </Dark_Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.6%',
  },
  top: {
    flex: 0.85,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingTop: '3%',
  },
  container1: {
    flex: 0.6,
    width: '100%',
  },
  container2: {
    flex: 2.7,
    width: '100%',
  },
  container3: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: '2%',
  },
  container4: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: '2%',
  },
  container5: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  container6: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: '2%',
    paddingBottom: '5%',
  },
  head: {
    fontSize: 25,
    fontWeight: 'bold',

    color: Colors.primary1,
  },
  head2: {
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 18.5,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default Social_Screen;
