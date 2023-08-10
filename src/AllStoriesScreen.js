import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

//if you initililize firebse app aaat aany place in your app,
//then you dont need to import the file, getFirestore will handle it.
import {FIREBASE_DB} from "../firebaseConfig";

const AllStoriesScreen = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'allstories'));

      const storiesArray = [];
      querySnapshot.forEach(doc => { 
        storiesArray.push({...doc.data(), id: doc.id, });
      });

      setStories(storiesArray);
    };

    fetchStories();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default AllStoriesScreen;
