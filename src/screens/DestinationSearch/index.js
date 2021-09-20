import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from "./SuggestionRow";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder='Where are you going?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guests')
          }}
          query={{
            key: 'AIzaSyDFnSlKwJC3PaZ3V7vDR0uKE0TEl28BOts',
            language: 'en',
            types: '(cities)',
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      
      {/* <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', { viewport: details.geometry.viewport });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyDFnSlKwJC3PaZ3V7vDR0uKE0TEl28BOts',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      /> */}
      
    </View>
  );
};

export default DestinationSearchScreen;