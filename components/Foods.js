import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { COLORS, FONTS, SIZES, images, CARD } from "../constants";

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
    image: images.product2,
    name: "Pizza (187)",
  },
  {
    id: "6",
    image: images.product3,
    name: "Soups (123)",
  },
  {
    id: "7",
    image: images.product1,
    name: "Sandwich (130)",
  },
];

const Foods = ({navigation}) => {  
  return (
    <View style={styles.container}>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <Text style={{ ...CARD.title, paddingLeft: SIZES.padding * 2, }}>New Arrival</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AllFood")}>
          <Text
            style={{
              ...FONTS.labelXSM,              
              color: COLORS.blue,
              paddingRight: SIZES.padding * 2,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{width: SIZES.padding * 2}}></View>
        {DATA.map((item) => (
          <View
            key={item.id}
            style={{
              alignItems: "center",
              width: 100,
              paddingVertical: SIZES.padding,
              marginRight: SIZES.base,
            }}
          >
            <TouchableOpacity style={{ width: "100%" }} activeOpacity={1}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 6,
                }}
              />
              <Text
                style={{                  
                  paddingTop: SIZES.base,
                  color: COLORS.primary,
                  width: "100%",
                  ...CARD.small.title,
                  textAlign: "center",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",    
    marginTop: SIZES.padding,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Foods;
