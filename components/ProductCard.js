import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES, images, CARD } from "../constants";

const ProductCard = ({ navigation, title, data }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <Text style={{ ...CARD.title, paddingLeft: SIZES.padding * 2 }}>
          {title}
        </Text>
      </View>

      {data.map((item) => (
        <View
          key={item.id}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: SIZES.width,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{ width: "100%" }}
            onPress={() => navigation.navigate("RestaurantSingle")}
          >
            <View style={{ position: "relative" }}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: 185,
                  borderRadius: 12,
                }}
              />
              <ImageBackground
                style={{ ...CARD.large.offBadge }}
                source={images.badge}
                resizeMode="contain"
              >
                <Text style={{ ...CARD.small.title, color: COLORS.white }}>
                  {item.off} OFF
                </Text>
              </ImageBackground>

              <View style={{ ...CARD.large.timeBadge }}>
                <Text style={{ ...CARD.small.title }}>{item.time} mins</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ ...CARD.large.titleRatingWrap }}>
            <View>
              <Text
                style={{
                  ...CARD.large.title,
                  marginBottom: SIZES.padding * 0.3,
                }}
              >
                {item.name}
              </Text>
              <Text style={{ ...CARD.large.description }}>{item.location}</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <View style={{ ...CARD.large.ratingBox }}>
                <AntDesign
                  name="star"
                  size={12}
                  color={COLORS.white}
                  style={{ marginRight: SIZES.base * 0.2 }}
                />
                <Text style={{ ...CARD.large.ratingBoxText }}>
                  {item.rating}
                </Text>
              </View>
              <Text style={{ ...CARD.large.description }}>Free Delivery</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: SIZES.base * 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProductCard;
