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
    title: 'Browse',
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
      <View >
        <FontAwesome name="apple"/>
        <Text>Hello</Text>
        <View style={styles.searchBox}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          <TextInput placeholder="Artist Search"
                    onChangeText={this.handleChange}
                    onSubmitEditing={this.handleSearch}
                    value={this.state.artist}
                    blurOnSubmit={true}
                  />
        </View>
        <ScrollView>{this.resultsArr()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: 'gray',
    width: 150,
    height: 40,
    borderRadius: 5 
  }
})


