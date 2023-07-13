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
import { COLORS, FONTS, SIZES, images, icons, CARD } from "../constants";

const MenuItem = ({ menus }) => {
  function renderAddToCart() {
    return (
      <View
        style={{
          flexDirection: "row",
          width: 110,
          height: 30,
          left: 5,
          bottom: -15,
          backgroundColor: COLORS.white,
          justifyContent: "space-between",
          alignItems: 'center',
          position: 'absolute',
          borderRadius: SIZES.base,
          borderWidth: 1,
          borderColor: COLORS.lightGray3,
          paddingHorizontal: SIZES.padding
        }}
      >
        <View>
          <Text><AntDesign name="plus" size={16} color={COLORS.blue}/></Text>
        </View>
        <View>
          <Text style={{...FONTS.labelXSM}}>Add</Text>
        </View>
        <View>
          <Text><AntDesign name="minus" size={16} color={COLORS.blue}/></Text>
        </View>
      </View>
    );
  }
  return (
    <>
      {menus.map((item) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: SIZES.padding*3,
            }}
          >
            <View style={{ position: "relative" }}>
              <Image
                source={item.image}
                style={{
                  height: 110,
                  width: 120,
                  borderRadius: SIZES.base,
                  marginRight: SIZES.padding * 1.5,
                }}
              />
              {renderAddToCart()}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ ...CARD.menu.title }}>{item.name}</Text>
              <Text
                style={{
                  ...CARD.menu.description,
                  paddingVertical: SIZES.padding * 0.5,
                }}
              >
                {item.ingredients}
              </Text>
              <Text style={{ ...CARD.menu.price }}>{item.price}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({});

export default MenuItem;
