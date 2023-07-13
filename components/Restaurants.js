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
    name: "Daylight Coffee",
    address: "Colarodo, San Francisco",
  },
  {
    id: "2",
    image: images.product2,
    name: "Mario Italiano",
    address: "Colarodo, San Francisco",
  },
  {
    id: "3",
    image: images.product3,
    name: "Mayfield Bakery & Cafe",
    address: "Colarodo, San Francisco",
  },
];

const Restaurant = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.row,
          { justifyContent: "space-between" },
        ]}
      >
        <Text style={{ ...CARD.title, paddingLeft: SIZES.padding * 2 }}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AllRestaurants")}>
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
              width: 250,
              paddingVertical: SIZES.padding,
              marginRight: SIZES.base,
            }}
          >
            <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate("RestaurantSingle")}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: 160,
                  borderRadius: 6,
                }}
              />
              <Text
                style={{
                  ...CARD.large.title,
                  paddingTop: SIZES.base,
                  marginVertical: SIZES.base * 0.5                
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  ...CARD.large.description,
                }}
              >
                {item.address}
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

export default Restaurant;
