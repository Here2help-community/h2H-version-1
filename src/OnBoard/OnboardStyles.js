import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../Items/Colors';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

const OnboardStyles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.secondary_light,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    height: windowHeight,
  }, 
  header: {
    flex: 3.5,
  },
  content: {
    flex: 5,
  },
  navigation: {
    flex: 1.5,
  },
  
  logo: {
    flex: 3,
    paddingTop: '8%',
    paddingBottom: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    width: '100%',
    paddingVertical: '2%',
  },
  field_group: {
    width: '100%',
    height: 55,
    marginVertical: 16,
  },
  divider_container: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 2,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: '#C8C8C8',
  }, 
  oauth_group: {
    height: 46,
    width: '100%',
  },
  navigation_control: {
    flex: 3,
    marginBottom: 52,
  },
  progress_bar_container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  head: {
    fontSize: 40,
    fontFamily: 'Lato-Black',
    color: Colors.primary1,
  },
  progress_bar_filled: {
    height: 3,
    width: '22%',
    borderRadius: 20,
    backgroundColor: Colors.progress_bar_filled,
  },
  progress_bar: {
    height: 3,
    width: '22%',
    borderRadius: 20,
    backgroundColor: Colors.progress_bar,
  },
});

export default OnboardStyles; 