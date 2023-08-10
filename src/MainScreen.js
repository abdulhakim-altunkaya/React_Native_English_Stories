import { View, Text, Button, TextInput, FlatList, 
  TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlossyButton from './GlossyButton';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
//if you initililize firebse app aaat aany place in your app,
//then you dont need to import the file, getFirestore will handle it.
import {FIREBASE_DB} from "../firebaseConfig";


const MainScreen = () => {
  const [stories, setStories] = useState([]); 

  useEffect(() => {
    const fetchDocs = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "allstories"));
      const storiesArray = [];
      //here I m opening an storyid field for ech doc
      querySnapshot.forEach(doc  => {
        storiesArray.push({...doc.data(), storyId: doc.id, });
      });
      setStories(storiesArray);
    }
    fetchDocs();
  }, [])
  
  let[num, setNum] = useState("");
  const getRandomNum = () => {
    setNum(Math.floor(Math.random() * stories.length));
  }



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GlossyButton
        title="Bring a Story"
        onPress={getRandomNum}
      />
      <View>
        <Text>{num}</Text>
      </View>
    </View>
  )
}

export default MainScreen
