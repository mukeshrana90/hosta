import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES, images, CARD } from "../constants";
import { ProductCard } from "../components";

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
  {
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
    id: "11",
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
    id: "12",
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

const AllRestaurants = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 10,
          }}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={{ ...FONTS.body3, fontFamily: "Medium" }}>
            Most Popular Restaurant
          </Text>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>     
    <View style={{ paddingTop: Platform.OS === 'android' ? SIZES.padding * 2 : 0 , position: 'relative', zIndex: 10}}>{renderHeader()}</View>
      <ScrollView  style={{ flex: 1, position: "relative", zIndex: 1 }}>        
        <View style={{marginTop: -30}}>
          <ProductCard data={DATA} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",    
    paddingTop: Platform.OS ==='android' ? SIZES.padding * 2 : 0,
  },
  header: {
    height: 50,
    padding: SIZES.base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AllRestaurants;
