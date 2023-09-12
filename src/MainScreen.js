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
  let [num, setNum] = useState("");
  let [storyDoc, setStoryDoc] = useState("");
  let [titleDoc, setTitleDoc] = useState("");
  let [word1Doc, setWord1Doc] = useState("");
  let [word2Doc, setWord2Doc] = useState("");
  let [word3Doc, setWord3Doc] = useState("");

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
  
  const getRandomNum = () => {
    let randomNum = Math.floor(Math.random() * stories.length);
    setTitleDoc(stories[randomNum].title);
    setStoryDoc(stories[randomNum].text);
  }



  return (
    <View style={styles.mainDiv} >
      <GlossyButton
        title="Bring a Story"
        onPress={getRandomNum}
      />
      <View>
        <Text style={styles.title}>
          {titleDoc}
        </Text>
        <Text>{storyDoc}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 15,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: 16,
  }
});

export default MainScreen
