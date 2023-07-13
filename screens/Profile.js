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
import {
  COLORS,
  FONTS,
  SIZES,
  BUTTONTEXT,
  BUTTON,
  HEADINGSTYLE,
} from "../constants";

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

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <View
          style={{
            paddingHorizontal: SIZES.padding * 2,            
            marginVertical: SIZES.padding2 * 1.5,
          }}
        >
          <Text style={{ ...HEADINGSTYLE.primary }}>Account Settings</Text>
          <Text
            style={{
              ...FONTS.body4,
              fontFamily: "Regular",
              color: COLORS.secondary,
              paddingTop: SIZES.base,
            }}
          >
            Update your settings like notifications, payments, profile edit etc.
          </Text>
        </View>
        <View
          style={{
            padding: SIZES.padding * 2,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginBottom: SIZES.padding * 2,
                paddingBottom: SIZES.padding * 2,
                borderBottomColor: COLORS.lightGray2,
                borderBottomWidth: 1,
              }}
            >
              <Feather name="user" size={24} color="black" />

              <View style={{ flex: 1, paddingHorizontal: SIZES.padding * 1.3 }}>
                <Text
                  style={{
                    fontFamily: "Medium",
                    color: COLORS.primary,
                    width: "100%",
                    ...FONTS.body4,
                  }}
                >
                  Profile Information
                </Text>

                <Text
                  style={{
                    ...FONTS.body4,
                    fontFamily: "Regular",
                    color: COLORS.secondary,
                  }}
                >
                  Change your account information
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
                  <Feather name="chevron-right" size={24} color="black" />
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginBottom: SIZES.padding * 2,
                paddingBottom: SIZES.padding * 2,
                borderBottomColor: COLORS.lightGray2,
                borderBottomWidth: 1,
              }}
            >
              <Feather name="lock" size={24} color="black" />

              <View style={{ flex: 1, paddingHorizontal: SIZES.padding * 1.3 }}>
                <Text
                  style={{
                    fontFamily: "Medium",
                    color: COLORS.primary,
                    width: "100%",
                    ...FONTS.body4,
                  }}
                >
                  Change Password
                </Text>

                <Text
                  style={{
                    ...FONTS.body4,
                    fontFamily: "Regular",
                    color: COLORS.secondary,
                  }}
                >
                  Change your password
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
                  <Feather name="chevron-right" size={24} color="black" />
                </Text>
              </View>
            </TouchableOpacity>
          

            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginBottom: SIZES.padding * 2,
                paddingBottom: SIZES.padding * 2,
                borderBottomColor: COLORS.lightGray2,
                borderBottomWidth: 1,
              }}
            >
              <Feather name="credit-card" size={24} color="black" />

              <View style={{ flex: 1, paddingHorizontal: SIZES.padding * 1.3 }}>
                <Text
                  style={{
                    fontFamily: "Medium",
                    color: COLORS.primary,
                    width: "100%",
                    ...FONTS.body4,
                  }}
                >
                  Payment Methods
                </Text>

                <Text
                  style={{
                    ...FONTS.body4,
                    fontFamily: "Regular",
                    color: COLORS.secondary,
                  }}
                >
                  Add your credit & debit cards
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
                  <Feather name="chevron-right" size={24} color="black" />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginBottom: SIZES.padding * 2,
                paddingBottom: SIZES.padding * 2,
                borderBottomColor: COLORS.lightGray2,
                borderBottomWidth: 1,
              }}
            >
              <Feather name="credit-card" size={24} color="black" />

              <View style={{ flex: 1, paddingHorizontal: SIZES.padding * 1.3 }}>
                <Text
                  style={{
                    fontFamily: "Medium",
                    color: COLORS.primary,
                    width: "100%",
                    ...FONTS.body4,
                  }}
                >
                  Logout
                </Text>

                <Text
                  style={{
                    ...FONTS.body4,
                    fontFamily: "Regular",
                    color: COLORS.secondary,
                  }}
                >
                  Login with another account
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
                  <Feather name="chevron-right" size={24} color="black" />
                </Text>
              </View>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: SIZES.base,
  },
  text: {
    fontFamily: "Regular",
  },
});

export default Profile;
