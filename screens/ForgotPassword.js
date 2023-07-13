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

import {
  BUTTON,
  COLORS,
  FONTS,
  SIZES,
  BUTTONTEXT,
  INPUT,
  HEADINGSTYLE,
} from "../constants";

const ForgotPassword = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <View>
          <Text style={{ ...HEADINGSTYLE.primary }}>Forgot Password?</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: SIZES.padding * 2 }}>
        <View>{renderHeader()}</View>
        <Text style={{ ...FONTS.largeTitle, fontFamily: "Medium" }}>
          Forgot Your Password
        </Text>
        
          <Text
            style={{
              ...FONTS.body2,
              fontFamily: "Regular",
              color: COLORS.secondary,
            }}
          >
            Enter your email address and we will send you a reset instructions.            
          </Text>
        
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
              <TouchableOpacity
                style={{
                  ...BUTTON.primary,
                }}
                // onPress={handleSubmit}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={{ ...BUTTONTEXT.primary }}>Reset password</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{ textAlign: "center", marginTop: SIZES.padding2 * 1.5 }}
              >
                <Text
                  style={{
                    color: COLORS.secondary,
                    ...FONTS.body3,
                    fontFamily: "Regular",
                  }}
                >
                  Already have an account? Login here.
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

export default ForgotPassword;
