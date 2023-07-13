import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Login, Signup, Onbording } from "./screens";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/Inter-Regular.ttf"),
    Medium: require("./assets/fonts/Inter-Medium.ttf"),
    Bold: require("./assets/fonts/Inter-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Signup"}
        >
          <Stack.Screen name="Onbording" component={Onbording} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} />            */}

          {/* <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Search" component={Tabs} />
          <Stack.Screen name="Orders" component={Tabs} />
          <Stack.Screen name="Profile" component={Tabs} />
          <Stack.Screen name="Checkout" component={Checkout} />      
          <Stack.Screen name="AllFood" component={AllFood} />  
          <Stack.Screen name="RestaurantSingle" component={RestaurantSingle} />                   
          <Stack.Screen name="AllRestaurants" component={AllRestaurants} />                    */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
