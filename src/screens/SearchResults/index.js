import React, { useEffect, useState } from "react";
import { View, FlatList, PointPropType } from "react-native";
import Post from '../../components/Post';
//import feed from '../../../assets/data/feed';
import { listPosts } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify'
import {useNavigation, useRoute} from '@react-navigation/native';

const SearchResultsScreen = (props) => {
  const { guests, viewport }=props
  const [posts, setPosts] = useState([])
  const route=useRoute()
  useEffect(() => {
    const fetchPosts=async()=>{
      try {
        const postsResult=await API.graphql(
          graphqlOperation(listPosts, {
            filter:{
              and: {
                maxGuests:{
                  ge:guests
                },
                latitude: {
                  between: [
                    viewport.southwest.latitude,
                    viewport.northeast.latitude,
                  ],
                },
                longitude: {
                  between: [
                    viewport.southwest.longitude,
                    viewport.northeast.longitude,
                  ],
                },
              }
            }
          })
        )
       setPosts(postsResult.data.listPosts.items)
      } catch (e) {
        console.log(e)
      }
    }
    fetchPosts()
  }, [])
  //const { posts } = props;

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;