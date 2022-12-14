import {Text, View, StyleSheet} from "react-native";
import React from "react";


export default function Header({name}) {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>delicious meal!</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold"
  }
}); 