import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, FONTS, SIZES, BUTTONTEXT, BUTTON } from "../constants";

const ORDERS = [
  {
    id: "1",
    name: "Cookie Sandwich",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    price: "USD7.4",
    quantity: 1,
  },
  {
    id: "2",
    name: "Combo Burger",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    price: "USD7.4",
    quantity: 1,
  },
  {
    id: "3",
    name: "Oyster Dish",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    price: "USD7.4",
    quantity: 2,
  },
];

const Checkout = ({ navigation }) => {
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
          <Text style={{ ...FONTS.body3, fontFamily: "Medium" }}>Checkout</Text>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>{renderHeader()}</View>
      <ScrollView style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <View
          style={{
            padding: SIZES.padding * 2,
          }}
        >
          {/* Orders List */}
          <View>
            {ORDERS.map((order) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    marginBottom: SIZES.padding * 2,
                    paddingBottom: SIZES.padding * 2,
                    borderBottomColor: COLORS.lightGray2,
                    borderBottomWidth: 1,
                  }}
                  key={order.id}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: COLORS.lightGray1,
                      height: 24,
                      width: 24,
                      borderRadius: 6,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.blue,
                        fontFamily: "Medium",
                      }}
                    >
                      {order.quantity}
                    </Text>
                  </View>
                  <View
                    style={{ flex: 1, paddingHorizontal: SIZES.padding * 1.3 }}
                  >
                    <Text
                      style={{
                        fontFamily: "Medium",
                        color: COLORS.primary,
                        width: "100%",
                        ...FONTS.body4,
                      }}
                    >
                      {order.name}
                    </Text>

                    <Text
                      style={{
                        ...FONTS.body4,
                        fontFamily: "Regular",
                        color: COLORS.secondary,
                      }}
                    >
                      {order.description}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        ...FONTS.body5,
                        fontFamily: "Medium",
                        color: COLORS.blue,
                      }}
                    >
                      {order.price}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, {...FONTS.body3}]}>Subtotal</Text>
            <Text style={[styles.text, {...FONTS.body3}]}>$29.4</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, {...FONTS.body3}]}>Delivery</Text>
            <Text style={[styles.text, {...FONTS.body3}]}>$0</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, {...FONTS.body3, fontFamily: "Medium"}]}>
              Total <Text style={{color: COLORS.secondary}}>(incl. VAT)</Text>
            </Text>
            <Text style={[styles.text, {...FONTS.body3, fontFamily: "Medium"}]}>$29.4</Text>
          </View>
          <View style={{marginTop: SIZES.padding2 * 2}}>
            <TouchableOpacity 
               onPress={() => navigation.navigate("Home")}
              style={{ ...BUTTON.primary }}
            >
              <Text style={{ ...BUTTONTEXT.primary }}>Checkout ($29.4)</Text>
            </TouchableOpacity>
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
  header: {
    height: 50,
    padding: SIZES.base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: SIZES.base,
  }, 
});

export default Checkout;
