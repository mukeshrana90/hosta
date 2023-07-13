import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  COLORS,
  SIZES,
  HEADINGSTYLE,
  images,
  FONTS,
  CARD
} from "../constants";

const DATA = [
  {
    id: "1",
    image: images.product4,
    name: "Burgers (120)",
  },
  {
    id: "2",
    image: images.product2,
    name: "Pizza (187)",
  },
  {
    id: "3",
    image: images.product3,
    name: "Soups (123)",
  },
  {
    id: "4",
    image: images.product1,
    name: "Sandwich (130)",
  },
  {
    id: "5",
    image: images.product4,
    name: "Burgers (120)",
  },
  {
    id: "6",
    image: images.product2,
    name: "Pizza (187)",
  },
  {
    id: "7",
    image: images.product3,
    name: "Soups (123)",
  },
  {
    id: "8",
    image: images.product1,
    name: "Sandwich (130)",
  },
  {
    id: "9",
    image: images.product3,
    name: "Soups (123)",
  },
  {
    id: "10",
    image: images.product1,
    name: "Sandwich (130)",
  },
  {
    id: "11",
    image: images.product4,
    name: "Burgers (120)",
  },
  {
    id: "12",
    image: images.product2,
    name: "Pizza (187)",
  },
  {
    id: "13",
    image: images.product3,
    name: "Soups (123)",
  },
];

const AllFood = ({navigation}) => {
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
           All Foods
          </Text>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>{renderHeader()}</View>
      <ScrollView>        
        <View style={{ paddingHorizontal: SIZES.padding * 2 }}>          
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",   
              marginHorizontal: -10,                         
            }}
          >
            {DATA.map((category) => (
              <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
                style={{
                  width: '50%',                  
                  paddingHorizontal: SIZES.padding, 
                  paddingBottom: SIZES.padding*2,                 
                }}
                key={category.id}
              >
                <Image
                  source={category.image}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: 120,
                    borderRadius: 6,
                  }}
                />

                <Text style={[styles.name, { ...CARD.large.title }]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
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
  name: {
    color: COLORS.black,
    paddingTop: SIZES.padding,
    textAlign: "center",
  },
  header: {
    height: 50,
    padding: SIZES.base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AllFood;
