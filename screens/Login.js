import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput, SafeAreaView
} from "react-native";
import { Formik } from "formik";

import {
  BUTTON,
  COLORS,
  FONTS,
  SIZES,
  BUTTONTEXT,
  INPUT,
  HEADINGSTYLE,
} from "../constants";

const Login = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <View>
          <Text style={{ ...HEADINGSTYLE.primary }}>Sign In</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: SIZES.padding * 2 }}>
        <View>{renderHeader()}</View>
        <Text style={{ ...FONTS.largeTitle, fontFamily: "Medium" }}>
          Welcome to Foodie
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text
            style={{
              ...FONTS.body2,
              fontFamily: "Regular",
              color: COLORS.secondary,
            }}
          >
            Enter your Phone number or Email for sign in Or
            <Text
              style={{
                color: COLORS.blue,
                ...FONTS.body2,
                fontFamily: "Regular",
              }}
            >
              {" "}
              Create new account.
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formWrap}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
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
                // onPress={handleSubmit}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={{ ...BUTTONTEXT.primary }}>SIGN IN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
                style={{ textAlign: "center", marginTop: SIZES.padding2 * 1.5 }}
              >
                <Text
                  style={{
                    color: COLORS.secondary,
                    ...FONTS.body3,
                    fontFamily: "Regular",
                  }}
                >
                  Forgot Your Password?
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

export default Login;
