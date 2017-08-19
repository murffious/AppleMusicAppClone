import React, {Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Button
} from 'react-native';
// import Results from '../components/Results'
import axios from 'axios'
import { FontAwesome, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants, Audio } from 'expo';

export default class BrowseScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      artist: '',
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.resultsArr = this.resultsArr.bind(this)
    // this.playMusicClip = this.playMusicClip.bind(this)
  }
  static navigationOptions = {
    header: null,
  };

  handleSearch(e){
    
    // if(e.nativeEvent.key == "Return"){
    //   console.log(e.nativeEvent.key)
	    axios({
		    method: 'get',
		    url: `https://itunes.apple.com/search?term=${this.state.artist}`
	    }).then(res => {
		    console.log(res.data.results)
		    this.setState({results: res.data.results})
	    }).catch( err => console.log(err) );
    // }
  }

  handleChange(text) {
    this.setState({artist: text})
    console.log(this.state.artist)
  }
  // playMusicClip() {}
  componentDidMount(){
	  axios({
		  method: 'get',
		  url: `https://itunes.apple.com/search?term=${this.state.artist}`
	  }).then(res => {
      console.log(res)
	    this.setState({results: res.data.results})
	  }).catch( err => console.log(err) );
 
 
 }
  resultsArr ()  {
    return this.state.results.map((e, i) => {
    return (
              <View style={styles.songList} key={i}>
                <View>
                <Image source={{uri: e.artworkUrl60}}
               style={{ width: 60, height: 60}}/>
               </View>
                 <View style={styles.songDetailsWrap}>
                   <Text style={styles.songTitle}>{e.trackName}</Text>
                    <Text style={styles.subTitle}>{e.artistName}</Text>
                   <Text style={styles.subTitle}>{e.collectionName}</Text>
                 </View>
                <View style={styles.button}>
                <TouchableOpacity onPress={async () => {
            const source = {
              uri: e.previewUrl 
                        };
              
                        try {
                          await Audio.setIsEnabledAsync(true);
                          const sound = new Audio.Sound();
                          await sound.loadAsync(source);
                          await sound.playAsync(); 
                        } catch(error) {
                          console.error(error);
                         }
                      }}>
                  <MaterialCommunityIcons
                   name='shopping-music'
                   size={25}
                 />
                 </TouchableOpacity>
                 </View>
               </View>
    )
  })
}
  render() {
    
    return (
      <View style={styles.browseWrap}>
       <View style={styles.musicHeader}>
         <FontAwesome style={{color: 'white'}} size={25} name="apple"/><Text style={{color: 'white', fontFamily: 'Roboto', fontSize: 24}}>MUSIC</Text><Text style={{color: 'white', fontSize: 20}}>Get all the music you want.</Text>
        </View>
      <View >
        <View style={styles.bodyWrap}>
        <View style={styles.browseHeaderStyleWrap}>
          <Text style={styles.browseHeaderStyle}>
          Browse
         </Text>
        </View>
        <View style={styles.searchWrap}>
        <View style={styles.searchBox}>
          <Ionicons style={styles.searchIcon} name="ios-search" size={25} color="#606060"/>
          <TextInput placeholder="Artist Search"
                    onChangeText={this.handleChange}
                    onSubmitEditing={this.handleSearch}
                    value={this.state.artist}
                    blurOnSubmit={true}
                    style={styles.artistSearch}
                  />
            </View>
          </View>
        
        <View style={styles.songsHeadWrap}><Text style={styles.songsHead}>Songs</Text></View>
        <ScrollView>{this.resultsArr()}</ScrollView>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
 
 browseWrap: {
  backgroundColor: "#fff",
  flex: 1
 }, 
 searchWrap: {
  alignItems: 'center',
  
},
  searchBox: {
    backgroundColor: '#E8E8E8',
    width: 349,
    height: 45,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicHeader: {
    flexDirection: 'row',
    justifyContent: "space-around",
    height: 79,
    backgroundColor: 'blue',
    paddingTop: 50
  },
  browseHeaderStyleWrap: {
    borderBottomWidth: 1,
    borderColor: "#e2e0e1",
    marginBottom: 10,
  },
  browseHeaderStyle: {
    marginTop: 56,
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: '900',
    paddingBottom: 8,
    
  },
  bodyWrap: {
    paddingLeft: 12,
    paddingRight: 12
  },
  songsHead: {
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: 23,
    paddingBottom: 8,
    paddingTop: 8,
  },
  songsHeadWrap: {
    borderBottomWidth: 1,
    borderColor: "#e2e0e1",
  },
  searchIcon: {
    paddingLeft: 4,
    paddingRight: 7
  },
  artistSearch: {
    fontSize: 20
  },
  songList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#e2e0e1",
  },
  button: {
  //   width: 14,
  //   height: 14,
  //   borderRadius: 7,
  //   borderWidth: 1,
  //   borderColor: "#e2e0e1",
  //  justifyContent: 'flex-end',
  //  flex: 1,
   flex: 1,
   alignItems: 'flex-end'
  },
  songDetailsWrap: {
    paddingLeft: 8,
    justifyContent: 'space-between'
  },
  songTitle: {
    fontFamily: 'Roboto',
  },
  subTitle: {
   color: '#686868'
  }
})


