import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const GlossyButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.buttonContainer}>
    <View style={styles.gradientBackground}>
      <View style={styles.glossOverlay} />
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: 'hidden',
    borderRadius: 31,
    
  },
  gradientBackground: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#FF6B6B',
    borderWidth: 1,
    borderColor: '#FFA154',
  },
  glossOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 1,
  },
});

export default GlossyButton;
