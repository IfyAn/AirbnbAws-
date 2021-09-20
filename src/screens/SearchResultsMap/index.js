// import React, {useState, useEffect, useRef} from "react";
// import { View, FlatList, useWindowDimensions } from "react-native";
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import CustomMarker from "../../components/CustomMarker";
// import PostCarouselItem from "../../components/PostCarouselItem";

// import { API, graphqlOperation } from 'aws-amplify';
// import { listPosts } from '../../graphql/queries';

// const SearchResultsMaps = (props) => {

//   const { posts } = props;

//   const [selectedPlaceId, setSelectedPlaceId] = useState(null);

//   const flatlist = useRef();
//   const map = useRef();

//   const viewConfig = useRef({itemVisiblePercentThreshold: 70})
//   const onViewChanged = useRef(({viewableItems}) => {
//     if (viewableItems.length > 0) {
//       const selectedPlace = viewableItems[0].item;
//       setSelectedPlaceId(selectedPlace.id)
//     }
//   })

//   const width = useWindowDimensions().width;

//   useEffect(() => {
//     if (!selectedPlaceId || !flatlist) {
//       return;
//     }
//     const index = posts.findIndex(place => place.id === selectedPlaceId)
//     flatlist.current.scrollToIndex({index})

//     const selectedPlace = posts[index];
//     const region = {
//       latitude: selectedPlace.latitude,
//       longitude: selectedPlace.longitude,
//       latitudeDelta: 0.8,
//       longitudeDelta: 0.8,
//     }
//     map.current.animateToRegion(region);
//   }, [selectedPlaceId])

//   return (
//     <View style={{width: '100%', height: '100%'}}>
//       <MapView
//         ref={map}
//         style={{width: '100%', height: '100%'}}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={{
//           latitude: 28.3279822,
//           longitude: -16.5124847,
//           latitudeDelta: 0.8,
//           longitudeDelta: 0.8,
//         }}
//       >
//         {posts.map(place => (
//           <CustomMarker
//             coordinate={{ latitude: place.latitude, longitude: place.longitude }}
//             price={place.newPrice}
//             isSelected={place.id === selectedPlaceId}
//             onPress={() => setSelectedPlaceId(place.id)}
//           />)
//         )}
//       </MapView>

//       <View style={{position: 'absolute', bottom: 10}}>
//         <FlatList
//           ref={flatlist}
//           data={posts}
//           renderItem={({item}) => <PostCarouselItem post={item} />}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           snapToInterval={width - 60}
//           snapToAlignment={"center"}
//           decelerationRate={"fast"}
//           viewabilityConfig={viewConfig.current}
//           onViewableItemsChanged={onViewChanged.current}
//         />
//       </View>
//     </View>
//   );
// }

// export default SearchResultsMaps;
import React, {useState, useEffect, useRef} from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from "../../components/CustomMarker";
import places from '../../../assets/data/feed'
import PostCarouselItem from "../../components/PostCarouselItem";

const SearchResultsMaps = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  
  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70})
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  })


  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({index})

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current.animateToRegion(region);
  }, [selectedPlaceId])
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
      ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
          // latitude: 6.457060,
          // longitude: 3.212420,
          // latitudeDelta: 0.1,
          // longitudeDelta: 0.1,
        }}>
         {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />)
        )}
        </MapView>
        <View style={{position: 'absolute', bottom: 10}}>
         <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
}

export default SearchResultsMaps;