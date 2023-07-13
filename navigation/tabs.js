import React from "react";
import { View, Image } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Home, Search, Orders, Profile } from "../screens";

import { icons, COLORS, FONTS } from "../constants";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: "#ffffff",
          }}
        ></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        labelStyle: {
          ...FONTS.labelXSM
        },                
        activeTintColor: "#010F07",
        inactiveTintColor: '#9999A7',        
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <Feather name="home" size={20} color={COLORS.primary} /> : <Feather name="home" size={20} color={COLORS.black50} />          
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <Feather name="search" size={20} color={COLORS.primary} /> : <Feather name="search" size={20} color={COLORS.black50} />
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <Feather name="file-text" size={20} color={COLORS.primary} /> : <Feather name="file-text" size={20} color={COLORS.black50} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (            
            focused ? <Feather name="user" size={20} color={COLORS.primary} /> : <Feather name="user" size={20} color={COLORS.black50} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
