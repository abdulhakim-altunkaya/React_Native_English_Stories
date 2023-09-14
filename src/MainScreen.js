import { View, Text, Button, TextInput, FlatList, 
  TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlossyButton from './GlossyButton';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
//if you initililize firebse app aaat aany place in your app,
//then you dont need to import the file, getFirestore will handle it.
import {FIREBASE_DB} from "../firebaseConfig";
import { AntDesign } from '@expo/vector-icons'; 


const MainScreen = () => {
  const [stories, setStories] = useState([]); 
  let [num, setNum] = useState("");
  let [storyDoc, setStoryDoc] = useState("");
  let [titleDoc, setTitleDoc] = useState("");
  let [word1Doc, setWord1Doc] = useState("");
  let [word2Doc, setWord2Doc] = useState("");
  let [word3Doc, setWord3Doc] = useState("");
  let [displayIcon, setDisplayIcon] = useState(false);

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
    setDisplayIcon(true);
    setWord1Doc(stories[randomNum].word1);
    setWord2Doc(stories[randomNum].word2);
    setWord3Doc(stories[randomNum].word3);
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
        {
          displayIcon === true ?
            <View style={styles.iconDiv}>
              <AntDesign name="API" size={42} color="black" />
            </View>
          :
            <></>
        }
        <View style={styles.wordsArea}>
          <Text style={styles.wordTitle}>{word1Doc.split(":")[0]}</Text>
          <Text>{word1Doc.split(":")[1]}</Text>
        </View>
        <View style={styles.wordsArea}>
          <Text style={styles.wordTitle}>{word2Doc.split(":")[0]}</Text>
          <Text>{word2Doc.split(":")[1]}</Text>
        </View>
        <View style={styles.wordsArea}>
          <Text style={styles.wordTitle}>{word3Doc.split(":")[0]}</Text>
          <Text>{word3Doc.split(":")[1]}</Text>
        </View> 
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
  iconDiv: {
    margin: "auto",
    width: "20%",
    marginBottom: 8,
    marginTop: 10,
  },
  wordsArea: {
    marginBottom: 7,
    display: "flex",
    flexDirection: "row",
  },
  wordTitle: {
    fontWeight: "bold",
  }
});

export default MainScreen;

