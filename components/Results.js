import React from 'react';
import {
	Image,
	View
  } from 'react-native';


export default function Results(props) {
	return (
			
				
					
			<View>
				
                <Text>{props.song}</Text>
				
				<Text>{props.artist}</Text>
				
				<Image 
                source={props.albumArt} 
                style={{ width: 159, height: 159}}alt="Album Art Work"/>
            </View>
			
	)
}