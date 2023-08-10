import { View, Text, Button, TextInput, FlatList, 
  TouchableOpacity, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react';
import GlossyButton from './GlossyButton';
import {FIREBASE_DB} from "../res/firebaseConfig";

import { addDoc, collection, deleteDoc, updateDoc, onSnapshot, doc, query, getDocs } from 'firebase/firestore';



const MainScreen = () => {
  
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchDoc = async () => {
      const q = query(collection(FIREBASE_DB, "allstories"));
      const querySnapshot = await getDocs(q);
      const storiesArray = [];
      querySnapshot.forEach((doc) => {
        storiesArray.push({ firestoreId: doc.id, ...doc.data()});
      });
      setStories(storiesArray);
      console.log(stories);
    }
    fetchDoc();
  }, [])
  
  let[num, setNum] = useState("");
  const getRandomNum = () => {
    setNum(Math.floor(Math.random() * 21));

  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GlossyButton
        title="Bring a Story"
        onPress={getRandomNum}
      />
      <View>
        <Text></Text>
      </View>
    </View>
  )
}

export default MainScreen
