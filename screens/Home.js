import React, { useState } from "react";
import {  
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
    SafeAreaView,
  } from 'react-native-safe-area-context';

import { COLORS, FONTS, images, SIZES, HEADINGSTYLE } from "../constants";
import { Slider, ProductCard, Foods, Restaurants, SearchModal, AdsWrapper, Filters, FilterModal } from "../components";

const DATA = [
  {
    id: "1",
    image: images.restaurant1,
    name: "Cafe Brichor’s",
    location: "4140 Parker Rd. Allentown",
    categories: [
      { name: "Chinese" },
      { name: "American" },
      { name: "Deshi food" },
    ],
    off: "20%",
    rating: "4.3",
    reviews: "200+",
    time: "25",
    price: "Free",
  },
  {
    id: "2",
    image: images.restaurant2,
    name: "McDonald's",
    location: "4140 Parker Rd. Allentown",
    categories: [{ name: "Chinese" }, { name: "American" }],
    off: "10%",
    rating: "4.3",
    reviews: "200+",
    time: "20",
    price: "Free",
  },
  {
    id: "3",
    image: images.restaurant3,
    name: "Cafe Brichor’s",
    location: "4140 Parker Rd. Allentown",
    categories: [{ name: "Chinese" }, { name: "American" }],
    off: "5%",
    rating: "4.3",
    reviews: "200+",
    time: "30",
    price: "Free",
  },
  {
    id: "4",
    image: images.product4,
    name: "Cafe Brichor’s",
    location: "4140 Parker Rd. Allentown",
    categories: [{ name: "Chinese" }, { name: "American" }],
    off: "25%",
    rating: "4.3",
    reviews: "200+",
    time: "45",
    price: "Free",
  },
  {
    id: "5",
    image: images.product5,
    name: "Cafe Brichor’s",
    location: "4140 Parker Rd. Allentown",
    categories: [{ name: "Chinese" }, { name: "American" }],
    off: "10%",
    rating: "4.3",
    reviews: "200+",
    time: "25",
    price: "Free",
  },
  {
    id: "6",
    image: images.product6,
    name: "Cafe Brichor’s",
    location: "4140 Parker Rd. Allentown",
    categories: [{ name: "Chinese" }, { name: "American" }],
    off: "30%",
    rating: "4.3",
    reviews: "200+",
    time: "35",
    price: "Free",
  },
];

const Home = ({navigation}) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>        
      <ScrollView>
        <View
          style={{
            paddingHorizontal: SIZES.padding * 2,   
            paddingVertical: SIZES.padding,         
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              color: COLORS.blue,
              ...FONTS.body5,
              letterSpacing: 1,
              fontFamily: "Medium",
            }}
          >
            Delivery to
          </Text>

          <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
          >            
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => {setModalVisible(true);}}>
              <Text style={{ ...HEADINGSTYLE.primary }}>California</Text>
              <Feather name="chevron-down" size={16} color="black" style={{marginTop: 5, marginLeft: 5}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={images.user} resizeMode="contain" style={{height: 40, width: 40, marginTop: -25}}/>
            </TouchableOpacity>          
          </View>          
        </View> 

        <SearchModal modalVisible = {modalVisible} setModalVisible = {setModalVisible} />   
        
        {/* Filters */}
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: SIZES.padding*2}}>
          <Filters/>  
          <TouchableOpacity onPress={() => {setFilterModalVisible(true);}}><Text><AntDesign name="filter" size={24} color={COLORS.primary} /></Text></TouchableOpacity>           
        </View>
        <FilterModal filterModalVisible = {filterModalVisible} setFilterModalVisible = {setFilterModalVisible}/>
        

        {/* ads  */}
        <AdsWrapper/>

        <Foods navigation={navigation} />
        
        <ProductCard data={DATA} title='Most Popular Restaurant' navigation={navigation}/>

        <Slider navigation={navigation}/>

        <View>
          
        </View>        
        

        <View
          style={{
            paddingTop: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
          }}
        >
          <Restaurants title='New Restaurants' navigation={navigation} />
        </View>        
      </ScrollView>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
