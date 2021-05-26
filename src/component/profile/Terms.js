import React from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { TERMS_OF_SERVICE } from '../../utils/constants';
import { Feather } from "@expo/vector-icons";
import AppText from '../AppText/AppText';
import styles from './ProfileStyles'

const Terms_component = props => {
    return(
      <SafeAreaView style={styles.screen}>
        <View style={styles.top_navigation}>
          <TouchableOpacity 
            onPress={() => props.navigation.goBack()}
            style={{ width: '15%' }}  
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
          <View style={{ width: '70%' }}>
            <AppText style={[styles.top_navigation_header, { textAlign: 'center' }]}>
              Terms Of Service
            </AppText>
          </View>
          <View style={{ width: '15%' }}></View>
        </View>

        <ScrollView style={styles.tos_pp_container}>
          <AppText style={styles.tos_pp_text}>
            {TERMS_OF_SERVICE}
          </AppText>
        </ScrollView>
      </SafeAreaView>
    );
}

export default Terms_component;