import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Formik } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  COLORS,
  FONTS,
  SIZES,
  HEADINGSTYLE,
  INPUT,
  images,
} from "../constants";

const CATEGORIES = [
  {
    id: "1",
    image: images.product4,
    name: "Fast Food",
  },
  {
    id: "2",
    image: images.product1,
    name: "Breakfast & Brunch",
  },
  {
    id: "3",
    image: images.product2,
    name: "Mexican",
  },
  {
    id: "4",
    image: images.product3,
    name: "Bakery",
  },
  {
    id: "5",
    image: images.product1,
    name: "Deserts",
  },
  {
    id: "6",
    image: images.product4,
    name: "Burgers",
  },
];

const Search = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: SIZES.padding * 2,
            marginTop: SIZES.padding2 * 1.5,
          }}
        >          
          <Text style={{ ...HEADINGSTYLE.primary }}>Search</Text>
        </View>

        <View
          style={{
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
          }}
        >
          <Formik
            initialValues={{ search: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  onChangeText={handleChange("search")}
                  onBlur={handleBlur("search")}
                  value={values.search}
                  placeholder="Search on Foodie"
                  style={{
                    ...INPUT.primary,
                    ...FONTS.body2,
                    fontFamily: "Regular",
                  }}
                />
              </View>
            )}
          </Formik>
        </View>

        <View style={{ paddingHorizontal: SIZES.padding * 2 }}>
          <Text
            style={{ ...HEADINGSTYLE.secondary, paddingBottom: SIZES.padding }}
          >
            Top Categories
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",       
              justifyContent: "space-between"       
            }}
          >
            {CATEGORIES.map((category) => (
              <View
                style={{                  
                  width: "48%",
                  height: 160,                  
                  marginBottom: "4%",                                                   
                }}
                key={category.id}
              >
                <ImageBackground
                  source={category.image}
                  resizeMode="cover"
                  style={{
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "center",
                    overflow: "hidden",
                    borderRadius: 10,
                    position: "relative",
                  }}
                >
                  <View style={styles.overlay}></View>
                  <Text
                    style={[
                      styles.name,
                      { ...FONTS.body3, fontFamily: "Medium" },
                    ]}
                  >
                    {category.name}
                  </Text>
                </ImageBackground>
              </View>
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
  formWrap: {
    padding: SIZES.padding * 2,
    marginTop: SIZES.padding,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    zIndex: 1,
  },
  name: {
    position: "relative",
    zIndex: 100,
    color: COLORS.white,
    paddingHorizontal: SIZES.base,
    textAlign: "center"
  },
});

export default Search;
