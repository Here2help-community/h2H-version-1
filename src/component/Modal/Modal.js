import React from 'react'
import { Pressable, TouchableOpacity, View } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'
import AppText from '../AppText/AppText'
import TrashCan from '../SVGs/TrashCan'
import styles from './ModalStyles'

const Modal = (props) => {

  const renderIcon = () => {
    switch (props.icon) {
      case 'trashCan':
        return <TrashCan />
      
      default:
        return undefined
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={props.onClose}>
        <View style={{ position: 'absolute' }}>
          <Svg
            width="9.292" 
            height="9.292" 
            viewBox="0 0 9.292 9.292"
          >
            <Path 
              id="Line_23"
              d="M0,0H11.123" 
              transform="translate(0.713 0.713) rotate(45)" 
              fill="none" 
              stroke="#011131" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="1.009"
            />
          </Svg>
        </View>
        <View style={{ position: 'absolute' }}>
          <Svg
            width="9.292" 
            height="9.292" 
            viewBox="0 0 9.292 9.292"
          >
            <Path 
              id="Line_24"
              d="M0,0H11.123" 
              transform="translate(8.578 0.713) rotate(135)" 
              fill="none" 
              stroke="#011131" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="1.009"
            />
          </Svg>
        </View>
      </TouchableOpacity>

      <View style={styles.icon}>{renderIcon()}</View>

      <View style={styles.text_container}>
        <AppText style={styles.header}>{props.header}</AppText>
        <AppText style={styles.details}>{props.details}</AppText>
      </View>

      <View style={styles.options}>
        <TouchableOpacity
          style={styles.button}
          onPress={props.onClose}
        >
          <AppText style={styles.cancel}>{props.cancel}</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={props.onConfirm}
        >
          <AppText style={styles.confirm}>{props.confirm}</AppText>
          </TouchableOpacity>
      </View>
    </View>
  )

}

export default Modal