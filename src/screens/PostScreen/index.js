import React from "react"; 
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import DetailedPost from '../../components/DetailedPost'
import places from '../../../assets/data/feed'


const PostScreen=(props)=>{
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);
  return (
    <View styl={{backgroundColor:'white'}}>
      <DetailedPost post={post}/>
    </View>
  )
}

export default PostScreen
// import React from 'react';
// import {View, Text, Image, Pressable} from 'react-native';
// import styles from './styles.js';
// import { useNavigation } from '@react-navigation/native';

// const days = 7;

// const Post = (props) => {

//   const post = props.post;

//   const navigation = useNavigation();

//   const goToPostPage = () => {
//     navigation.navigate('Post', {postId: post.id});
//   }

//   return (
//     <Pressable onPress={goToPostPage} style={styles.container}>
//       {/* Image  */}
//       <Image
//         style={styles.image}
//         source={{uri: post.image}}
//       />

//       {/* Bed & Bedroom  */}
//       <Text style={styles.bedrooms}>
//         {post.bed} bed {post.bedroom} bedroom
//       </Text>

//       {/* Type & Description */}
//       <Text style={styles.description} numberOfLines={2}>
//         {post.type}. {post.title}
//       </Text>

//       {/*  Old price & new price */}
//       <Text style={styles.prices}>
//         <Text style={styles.oldPrice}>${post.oldPrice}</Text>
//         <Text style={styles.price}>  ${post.newPrice} </Text>
//         / night
//       </Text>

//       {/*  Total price */}
//       <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
//     </Pressable>
//   );
// };

// export default Post;