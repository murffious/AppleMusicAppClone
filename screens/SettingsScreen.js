import React, {Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
// import Results from '../components/Results'
import axios from 'axios'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

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
              <View key={i}>
               <Text>{e.trackName}</Text>
               <Text>{e.artistName}</Text>
               <Image source={{uri: e.artworkUrl60}}
               style={{ width: 159, height: 159}}/>
               </View>
    )
  })
}
  render() {
    
    return (
      <View style={styles.browseWrap}>
       <View style={styles.musicHeader}>
         <FontAwesome style={{color: 'white'}} name="apple"/><Text style={{color: 'white'}}>MUSIC</Text><Text style={{color: 'white'}}>Get all the music you want.</Text>
        </View>
      <View >
        <View style={styles.bodyWrap}>
        <View>
          <Text style={styles.browseHeaderStyle}>
          Browse
         </Text>
        </View>
        <View style={styles.searchWrap}>
        <View style={styles.searchBox}>
          <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          <TextInput placeholder="Artist Search"
                    onChangeText={this.handleChange}
                    onSubmitEditing={this.handleSearch}
                    value={this.state.artist}
                    blurOnSubmit={true}
                  />
            </View>
          </View>
        
        <View><Text>Songs</Text></View>
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
    width: 150,
    height: 40,
    borderRadius: 5,

  },
  musicHeader: {
    flexDirection: 'row',
    justifyContent: "space-around",
    height: 79,
    backgroundColor: 'blue',
    paddingTop: 50
  },
  browseHeaderStyle: {
    marginTop: 56,
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: '900',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#e2e0e1",
  },
  bodyWrap: {
    paddingLeft: 12,
    paddingRight: 12
  }

})


