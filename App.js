import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Router from './src/navigation/Router';
//import 'react-native-gesture-handler';
import { withAuthenticator } from 'aws-amplify-react-native'
// import Post from './src/components/Post';
// import feed from './assets/data/feed';
// import SearchResultsScreen from './src/screens/SearchResults';
 //import DestinationSearchScreen from './src/screens/DestinationSearch';


//const post1 = feed[0];

const App=()=> {
  return (
    <>
      <Router />
    </>
  );
};

const styles = StyleSheet.create({

});

export default withAuthenticator(App)
