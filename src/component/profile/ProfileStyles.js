import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../Items/Colors';

const dimensions = Dimensions.get('window');
const topNavigationHeight = 72;

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: Colors.background_2,
  },

  top_navigation: {
    height: 72,
    backgroundColor: Colors.primary2,
    width: '100%',
    paddingHorizontal: 16,
    // paddingTop: 38,
    paddingBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },

  top_navigation_text: {
    fontSize: 14,
    color: 'white',
  },

  top_navigation_header: {
    // fontSize: 24,
    // color: 'white',
    fontFamily: 'Lato-Black',
    fontSize: 18,
    color: 'white',
  },

  profile_intro_container: {
    height: 244,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: Colors.background_2,
  },

  profile_avatar: {
    marginTop: 32,
    backgroundColor: Colors.switch_disabled,
  },

  display_name: {
    fontSize: 24,
    fontFamily: 'Lato-Black',
    color: Colors.primary1,
    marginTop: 8,
  },

  autobiography: {
    fontSize: 14,
    color: Colors.profile_bio_text,
    marginTop: 16,
  },

  list_item_text: {
    fontSize: 16,
    color: Colors.profile_item_text,
  },

  section_header: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.item_border,
  },

  section_break: {
    height: 24,
    width: '100%',
    backgroundColor: Colors.primary2,
  },

  feedback_container: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  feedback_header_text: {
    fontSize: 24,
    fontFamily: 'Lato-Black',
    color: Colors.primary1,
    marginTop: 40,
  },

  feedback_input_area: {
    width: dimensions.width - 32,
    height: 174,
    marginTop: 32,
    borderWidth: 1,
    borderColor: Colors.primary2,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    padding: 12,
    overflow: 'hidden',
    textAlignVertical: 'top',
  },

  tos_pp_container: {
    padding: 16,
    paddingBottom: 100,
  },

  tos_pp_text: {
    fontSize: 16,
    color: 'black',
  },

  tint: {
    backgroundColor: Colors.tint,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  edit_container: (tabBarHeight) => {
    return {
      height: dimensions.height - topNavigationHeight - tabBarHeight,
      paddingHorizontal: 16,
    }
  },

  save_edits_button: {
    width: '30%', 
    alignSelf: 'flex-end',
  },

})

export default styles;