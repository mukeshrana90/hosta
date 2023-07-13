import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
// import PagerView from "react-native-pager-view";
import { MenuItem, Restaurants } from "../components";
import { COLORS, SIZES, images, CARD } from "../constants";

const IMAGES = [
  {
    id: "11",
    image: images.restaurant1,
  },
  {
    id: "12",
    image: images.restaurant2,
  },
  {
    id: "13",
    image: images.restaurant3,
  },
];

const categories = [
  { name: "Chinese" },
  { name: "American" },
  { name: "Deshi food" },
];
const menus = [
  {
    id: "1",
    image: images.product4,
    name: "Veg Burger",
    ingredients: "Shortbread, chocolate & turtle cookies.",
    price: "$10.15",
  },
  {
    id: "2",
    image: images.product2,
    name: "Sandwich",
    ingredients: "Shortbread, chocolate & turtle cookies.",
    price: "$20.15",
  },
  {
    id: "3",
    image: images.product1,
    name: "Grain pancakes",
    ingredients: "Shortbread, chocolate & turtle cookies.",
    price: "$15.50",
  },
  {
    id: "4",
    image: images.product4,
    name: "Egg Toast",
    ingredients: "Shortbread, chocolate & turtle cookies.",
    price: "$15.50",
  },
];

const RestaurantSingle = ({ navigation }) => {
  function renderHeader() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#fff",
          color: COLORS.primary,
          position: "absolute",
          zIndex: 1,
          width: 30,
          height: 30,
          marginLeft: SIZES.padding * 2,
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "center",
          top: 20,
        }}
      >
        <Feather name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
    );
  }

  function renderDots(item) {
    if (item != 0) {
      return (
        <View
          style={{
            height: 4,
            width: 4,
            borderRadius: 2,
            backgroundColor: COLORS.lightGray,
            marginRight: SIZES.base,
          }}
        ></View>
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {renderHeader()}
        <View style={styles.pagerWrap}>
          {/* <PagerView
            style={styles.viewPager}
            initialPage={0}
            scrollEnabled={true}
            showPageIndicator={true}
          >
            {IMAGES.map((item) => {
              return (
                <View style={styles.page} key={item.id}>
                  <Image
                    style={{ width: "100%", height: 280 }}
                    resizeMode="cover"
                    source={item.image}
                  />
                </View>
              );
            })}
          </PagerView> */}
          <View style={{ ...CARD.large.timeBadge }}>
            <Text style={{ ...CARD.small.title }}>25 mins</Text>
          </View>
        </View>

        <View
          style={{
            position: "relative",
            padding: SIZES.padding * 2,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ ...CARD.large.title }}>Mount view Restaurant</Text>
            <Text
              style={{
                ...CARD.large.description,
                paddingVertical: SIZES.padding * 0.5,
              }}
            >
              4140 Parker Rd. Allentown
            </Text>
            <View style={{ flexDirection: "row" }}>
              {categories.map((category, index) => {
                return (
                  <View
                    key={index}
                    style={{ alignItems: "center", flexDirection: "row" }}
                  >
                    {renderDots(index)}
                    <Text
                      style={{
                        ...CARD.large.description,
                        marginRight: SIZES.base,
                      }}
                    >
                      {category.name}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <View style={{ ...CARD.large.ratingBox }}>
              <AntDesign
                name="star"
                size={10}
                color={COLORS.white}
                style={{ marginRight: SIZES.base * 0.2 }}
              />
              <Text style={{ ...CARD.large.ratingBoxText }}>4.5</Text>
            </View>
            <Text style={{ ...CARD.large.description }}>Free Delivery</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: SIZES.padding * 2 }}>
          <Text style={{ ...CARD.title, paddingBottom: SIZES.padding }}>
            Most Popular
          </Text>
          <MenuItem menus={menus} />          
        </View>
        <Restaurants title='Similar Restaurants' navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pagerWrap: {
    height: 280,
    width: "100%",
    backgroundColor: COLORS.primary,
  },
  viewPager: {
    height: 280,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RestaurantSingle;
