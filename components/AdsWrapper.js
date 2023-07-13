import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import {SIZES, images } from "../constants";

const DATA = [
  {
    id: "1",
    image: images.ads,    
  },
  {
    id: "2",
    image: images.ads2,   
  },
  {
    id: "3",
    image: images.ads,    
  },
];

const AdsWrapper = () => {
  return (
    <View style={styles.container}>      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{width: SIZES.padding * 2}}></View>
        {DATA.map((item) => (
          <View
            key={item.id}
            style={{
              alignItems: "center",
              width: 250,
              paddingVertical: SIZES.padding,
              marginRight: SIZES.base,
            }}
          >

            <TouchableOpacity style={{ width: "100%" }}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: 110,                  
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",        
  },
});

export default AdsWrapper;
