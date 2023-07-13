import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { images, COLORS, SIZES, CARD, FONTS } from "../constants";

const DATA = [
  {
    id: "1",
    image: images.restaurant1,
    name: "Cafe Brichor’s",
    categories: [
      { name: "Chinese" },
      { name: "American" },
      { name: "Deshi food" },
    ],
    rating: "4.3",
    reviews: "200+",
    time: "25",
    price: "Free",
  },
  {
    id: "2",
    image: images.restaurant2,
    name: "McDonald's",
    categories: [{ name: "Chinese" }, { name: "American" }],
    rating: "4.3",
    reviews: "200+",
    time: "25",
    price: "Free",
  },
  {
    id: "3",
    image: images.restaurant3,
    name: "Cafe Brichor’s",
    categories: [{ name: "Chinese" }, { name: "American" }],
    rating: "4.3",
    reviews: "200+",
    time: "25",
    price: "Free",
  },
];

const Slider = ( props ) => {
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
        scrollEventThrottle={16}
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
              width: SIZES.width,
              paddingHorizontal: SIZES.padding * 2,
            }}
          >
            <TouchableOpacity style={{ width: "100%" }} activeOpacity={1}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: 170,
                  borderRadius: 12,
                }}
              />

              <Text
                style={{
                  paddingTop: SIZES.padding,
                  width: "100%",
                  ...CARD.large.title,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
            {/* Categories */}
            <View
              style={[
                styles.row,
                { width: "100%", marginVertical: SIZES.base * 0.5 },
              ]}
            >
              <Text
                style={{
                  ...CARD.large.description,
                }}
              >
                $$
              </Text>
              {item.categories.map((category, index) => {
                return (
                  <View
                    key={index}
                    style={{ alignItems: "center", flexDirection: "row" }}
                  >
                    <View
                      style={{
                        height: 4,
                        width: 4,
                        borderRadius: 2,
                        backgroundColor: COLORS.lightGray,
                        marginLeft: SIZES.base,
                      }}
                    ></View>
                    <Text
                      style={{
                        ...CARD.large.description,
                        marginLeft: SIZES.base,
                      }}
                    >
                      {category.name}
                    </Text>
                  </View>
                );
              })}
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
          //width: "100%",
        }}
      >
        {DATA.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
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
      <View
        style={[
          styles.row,
          { justifyContent: "space-between", paddingVertical: 12 },
        ]}
      >
        <Text style={{ ...CARD.title, paddingLeft: SIZES.padding * 2 }}>
          Restaurants Around You
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("AllRestaurants")}>
          <Text
            style={{
              ...FONTS.labelXSM,
              color: COLORS.blue,
              paddingRight: SIZES.padding * 2,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ position: "relative", width: "100%" }}>
        <View>{renderContent()}</View>
        <View style={{ position: "absolute", top: 140, left: 32 }}>
          {renderDots()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    marginLeft: SIZES.base,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Slider;
