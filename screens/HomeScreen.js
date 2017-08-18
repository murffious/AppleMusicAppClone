import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { WebBrowser, AppLoading, Font } from 'expo';
import ScreenH1 from '../components/Screen_H1'
import { MonoText } from '../components/StyledText';
import { Entypo } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  
 
  
  static navigationOptions = {
    header: null,
  };
  // componentWillMount() {
  //    Font.loadAsync({
  //       'Roboto': require('../assets/fonts/Roboto/Roboto-Regular.ttf')
  //    })
  // }
  componentWillMount() {
    
  }
  render() {
   
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.listItemWrap}>
        <Text style={styles.headerStyle}>Library</Text>
        </View>
        <View style={styles.listItemWrap}>
        <Text style={styles.listStyle}>Playlists</Text>
          <View style={styles.icon}>
            <Entypo name="chevron-small-right" size={29} color="#e2e0e1"/>
          </View> 
        </View>
        <View style={styles.listItemWrap}>
        <Text style={styles.listStyle}>Artists</Text>
        <View style={styles.icon}>
            <Entypo name="chevron-small-right" size={29} color="#e2e0e1"/>
          </View>
        </View>
        <View style={styles.listItemWrap}>
        <Text style={styles.listStyle}>Albums</Text>
        <View style={styles.icon}>
            <Entypo name="chevron-small-right" size={29} color="#e2e0e1"/>
          </View>
        </View>
        <View style={styles.listItemWrap}>
        <Text style={styles.listStyle}>Songs</Text>
        <View style={styles.icon}>
            <Entypo name="chevron-small-right" size={29} color="#e2e0e1"/>
          </View>
        </View>
        <View style={styles.listItemWrap}>
        <Text style={styles.listStyle}>Downloaded Music</Text>
        <View style={styles.icon}>
            <Entypo name="chevron-small-right" size={29} color="#e2e0e1"/>
          </View>
        </View>
        <View>
         <Text style={styles.recentlyAddedText}>Recently Added</Text>
        </View>
        <View style={styles.addedMusicList}>
          <View style={styles.addedAlbumWrap}>
            <Image 
              style={styles.addedAlbumImage}
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/61bAK8eKupL.jpg'}}/>
            <Text>Live 2012</Text>
            <Text style={styles.addedAlbumBand}>Coldplay</Text>
          </View>
          <View style={styles.addedAlbumWrap}>
            <Image 
              style={styles.addedAlbumImage}
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51VRdpYNU9L._SY355_.jpg'}}/>
            <Text>Live 2012</Text>
            <Text style={styles.addedAlbumBand}>Coldplay</Text>
          </View>
          <View style={styles.addedAlbumWrap}>
            <Image 
              style={styles.addedAlbumImage}
              source={{uri: 'http://cps-static.rovicorp.com/3/JPG_500/MI0003/943/MI0003943481.jpg?partner=allrovi.com'}}/>
            <Text>Live 2012</Text>
            <Text style={styles.addedAlbumBand}>Coldplay</Text>
          </View>
          <View style={styles.addedAlbumWrap}>
            <Image 
              style={styles.addedAlbumImage}
              source={{uri: 'https://pbs.twimg.com/profile_images/863149687984893952/jxcAoc2y.jpg'}}/>
            <Text>Live 2012</Text>
            <Text style={styles.addedAlbumBand}>Coldplay</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
  

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12
    
  },
  headerStyle: { 
    marginTop: 56,
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: '900',
    paddingBottom: 8,

    
  },
  listStyle: {
    fontSize: 21,
    color: '#ef0264',
    paddingTop: 12,
    paddingBottom: 12

  },
  listItemWrap:
  {borderBottomWidth: 1,
    borderColor: "#e2e0e1",
    flexDirection: 'row',
    alignItems: 'center'
    },
  recentlyAddedText: {
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: 24,
    paddingTop: 24,
    
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end'
    // marginLeft: 241
  
  },
  addedAlbumBand: {
    color: '#e2e0e1'
  },
  addedAlbumWrap: {

  },
  addedMusicList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 11
  },
  addedAlbumImage: {
    width: 159, 
    height: 159, 
    borderRadius: 4
  }
  
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
});
