import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../Items/Colors';

const styles = StyleSheet.create({

  container: {
    width: 343,
    height: 256,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  close: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 16,
    right: 24,
  },

  icon: {
    marginTop: 30,
    width: 64,
    height: 64,
    borderRadius: 32,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.11,
    shadowRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  text_container: {
    paddingHorizontal: 28,
  },

  header: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: Colors.primary2,
    marginTop: 18,
    textAlign: 'center',
  },

  details: {
    fontSize: 15,
    color: 'black',
    marginTop: 8,
    textAlign: 'center',
  },

  options: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  button: {
    width: '50%',
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1, 
    borderColor: Colors.modal_options_border,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  cancel: {
    fontSize: 16,
    color: Colors.primary3,
    textAlign: 'center',
  },

  confirm: { 
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: Colors.primary2,
    textAlign: 'center',
  }

})

export default styles;