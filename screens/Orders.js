import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  COLORS,
  FONTS,
  SIZES,
  HEADINGSTYLE,
  images,
  BUTTON,
  BUTTONTEXT,
} from "../constants";

const ORDERS = [
  {
    id: "1",
    image: images.product4,
    name: "McDonald's",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    price: "USD7.4",
  },
  {
    id: "2",
    image: images.product1,
    name: "Uncle Boy's",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    price: "USD7.4",
  },
  {
    id: "3",
    image: images.product2,
    name: "The Halal Guys",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    price: "USD7.4",
  },
];

const Orders = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: SIZES.padding * 2,
            marginTop: SIZES.padding2 * 1.5,
          }}
        >
          <Text style={{ ...HEADINGSTYLE.primary }}>Your Orders</Text>
        </View>

        <View
          style={{
            padding: SIZES.padding * 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: SIZES.padding,
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                ...FONTS.body4,
                fontFamily: "Medium",
                color: COLORS.secondary,
                letterSpacing: 1.5,
              }}
            >
              Upcoming orders
            </Text>
            <Text
              style={{
                textTransform: "uppercase",
                ...FONTS.body5,
                fontFamily: "Regular",
              }}
            >
              Clear all
            </Text>
          </View>

          {/* Orders List */}
          <View>
            {ORDERS.map((order) => {
              return (
                <TouchableOpacity                  
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: SIZES.padding * 1.5,
                  }}
                  key={order.id}
                >
                  <View>
                    <Image
                      source={order.image}
                      resizeMode="cover"
                      style={{
                        height: 100,
                        width: 100,
                        borderRadius: 6,
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, paddingLeft: SIZES.padding * 2 }}>
                    <Text
                      style={{
                        fontFamily: "Medium",
                        color: COLORS.primary,
                        width: "100%",
                        ...FONTS.body3,
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
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerFix}>
        <TouchableOpacity style={BUTTON.primary} onPress={() => navigation.navigate("Checkout")}>
          <Text style={BUTTONTEXT.primary}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footerFix: {
    position: 'absolute',
    bottom: SIZES.padding,
    left: SIZES.padding*2,
    right: SIZES.padding*2,
  }
});

export default Orders;
