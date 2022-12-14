import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryItem from './src/components/CategoryItems';
//import commonCategories from './src/common/categories'
import  Header  from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
    const commonCategories = [
  {
    name: "Burger",
    imageUrl: require("./src/assets/images/burger.png")
  },{
    name: "Pizza",
    imageUrl: require("./src/assets/images/pizza.png")
  },{
    name: "Dessert",
    imageUrl: require("./src/assets/images/cake.png")
  },{
    name: "Drinks",
    imageUrl: require("./src/assets/images/smoothies.png")
  },{
    name: "Steaks",
    imageUrl: require("./src/assets/images/steak.png")
  },{
    name: "Pasta",
    imageUrl: require("./src/assets/images/pasta.png")
  },
  ];

  return (
    <View style={styles.container}>
      <Header/>
      <Search/>
      <FlatList
       data={commonCategories}
       renderItem={({item}) =>{
        return <CategoryItem  name={item.name} imageUrl={item.imageUrl}/>
       }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
