import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { images, COLORS, SIZES, FONTS, BUTTON, BUTTONTEXT } from "../constants";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-as",
    image: images.onbording1,
    title: "All your favorites",
    description:
      "Order from the best local restaurants with easy, on-demand delivery.",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-qwueyqieuy",
    image: images.onbording2,
    title: "Free delivery offers",
    description:
      "Free delivery for new customers via Apple Pay and others payment methods.",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-jasdhjakd",
    image: images.onbording3,
    title: "Choose your food",
    description:
      "Easily find your type of food craving and you’ll get delivery in wide range.",
  },
];

const Onbording = ({ navigation }) => {
  const [completed, setCompleted] = React.useState(false);
  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === DATA.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={12}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {DATA.map((item) => (
          <View
            key={item.id}
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: SIZES.width,
              height: SIZES.height,
              padding: SIZES.radius,
              paddingBottom: 80,
            }}
          >
            <Image
              source={item.image}
              resizeMode="contain"
              style={{
                width: "100%",
                height: 400,
              }}
            />
            <View style={{ paddingHorizontal: SIZES.base *0.5, width: "100%" }}>
              <Text
                style={{
                  fontFamily: "Bold",
                  paddingTop: SIZES.padding * 1.6,
                  paddingBottom: SIZES.padding * 0.5,
                  color: COLORS.primary,
                  ...FONTS.body1,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontFamily: "Regular",
                  color: COLORS.secondary,
                  ...FONTS.body2,
                  textAlign: "center",
                }}
              >
                {item.description}
              </Text>
              <TouchableOpacity
                style={{
                  ...BUTTON.primary,
                  marginTop: SIZES.padding * 2,
                }}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={{ ...BUTTONTEXT.primary }}>GET STARTED</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 30,
          width: "100%",
          left: 0,
        }}
      >
        {DATA.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={[styles.dot, { opacity: opacity }]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>{renderContent()}</View>
      <View>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.base,
  },
});

export default Onbording;
