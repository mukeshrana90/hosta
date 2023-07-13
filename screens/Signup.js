import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";
import {
  BUTTON,
  COLORS,
  FONTS,
  SIZES,
  BUTTONTEXT,
  INPUT,
  HEADINGSTYLE,
} from "../constants";

const Signup = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <View>
          <Text style={{ ...HEADINGSTYLE.primary }}>Sign Up</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: SIZES.padding * 2 }}>
        <View>{renderHeader()}</View>
        <Text style={{ ...FONTS.largeTitle, fontFamily: "Medium" }}>
          Create An Account
        </Text>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              ...FONTS.body2,
              fontFamily: "Regular",
              color: COLORS.secondary,
            }}
          >
            Enter your Name, Email and Password for sign up.
            <Text style={{ color: COLORS.blue }}> Already have account?</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formWrap}>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder="Full Name"
                style={{
                  ...INPUT.primary,
                  ...FONTS.body2,
                  fontFamily: "Regular",
                }}
              />
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email address"
                style={{
                  ...INPUT.primary,
                  ...FONTS.body2,
                  fontFamily: "Regular",
                }}
              />
              <TextInput
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.passowrd}
                placeholder="Password"
                style={{
                  ...INPUT.primary,
                  ...FONTS.body2,
                  fontFamily: "Regular",
                }}
              />
              <TouchableOpacity
                style={{
                  ...BUTTON.primary,
                }}
                onPress={handleSubmit}
              >
                <Text style={{ ...BUTTONTEXT.primary }}>SIGN UP</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginTop: SIZES.padding2 * 1.5 }}
              >
                <Text
                  style={{
                    color: COLORS.secondary,
                    ...FONTS.body3,
                    fontFamily: "Regular",
                    textAlign: "center",
                  }}
                >
                  By Signing up you agree to our Terms Conditions & Privacy
                  Policy.
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
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
});

export default Signup;
