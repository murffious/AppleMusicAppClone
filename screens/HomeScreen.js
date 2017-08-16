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
  
   state = { isReady: false,}
 
  
  static navigationOptions = {
    header: null,
  };
  // componentWillMount() {
  //    Font.loadAsync({
  //       'Roboto': require('../assets/fonts/Roboto/Roboto-Regular.ttf')
  //    })
  // }
  componentWillMount() {
    (async() => {
      await Font.loadAsync({
        'Roboto': require('../assets/fonts/Roboto/Roboto-Black.ttf')
      });
      this.setState({ isReady: true});

    })();
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
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
        </View>
        <View style={styles.listItemWrap}>
        <Text style={styles.listStyle}>Albums</Text>
        </View>
        <View style={styles.listItemWrap}>
        <Text style={styles.listStyle}>Songs</Text>
        </View>
        <View style={styles.listItemWrap}>
        <Text style={styles.listStyle}>Downloaded Music</Text>
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
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/61bAK8eKupL.jpg'}}/>
            <Text>Live 2012</Text>
            <Text style={styles.addedAlbumBand}>Coldplay</Text>
          </View>
          <View style={styles.addedAlbumWrap}>
            <Image 
              style={styles.addedAlbumImage}
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/61bAK8eKupL.jpg'}}/>
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
    paddingLeft: 10,
    paddingRight: 10
    
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
    marginLeft: 241
  
  },
  addedAlbumBand: {
    color: '#e2e0e1'
  },
  addedAlbumWrap: {

  },
  addedMusicList: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  addedAlbumImage: {
    width: 140, 
    height: 140, 
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
