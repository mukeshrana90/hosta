import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#010F07",
  secondary: "#868686",

  // colors
  black: "#1E1F20",
  black50: "#9999A7",
  black70: "#707084",
  white: "#FFFFFF",
  blue: "#3654FF",
  orange: "#EF9920",
  pink: '#EB5757',

  lightGray: "#868686",
  lightGray1: "#cececf",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: "#898C95",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 13,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 30,
  h1: 25,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 25,
  body2: 17,
  body3: 16,
  body4: 14,
  body5: 12,

  labelXS: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55 },
  h1: { fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontSize: SIZES.body1, lineHeight: 31 },
  body2: { fontSize: SIZES.body2, lineHeight: 25 },
  body3: { fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontSize: SIZES.body5, lineHeight: 22 },

  labelXS: { fontSize: 12, lineHeight: 14 },
  labelXSM: { fontSize: 12, lineHeight: 14, fontFamily: "Medium" },

  labelS: { fontSize: 14, lineHeight: 16 },
  labelSM: { fontSize: 14, lineHeight: 16, fontFamily: "Medium" },

  labelM: { fontSize: 16, lineHeight: 20 },
  labelMM: { fontSize: 16, lineHeight: 20, fontFamily: "Medium" },

  labelL: { fontSize: 18, lineHeight: 24 },
  labelLM: { fontSize: 18, lineHeight: 24, fontFamily: "Medium" },
};

export const BUTTON = {
  primary: {
    padding: SIZES.padding,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
};
export const BUTTONTEXT = {
  primary: {
    fontFamily: "Medium",
    color: COLORS.white,
    textTransform: "uppercase",
    ...FONTS.labelSM
  },
};

export const INPUT = {
  primary: {
    height: 54,
    marginBottom: SIZES.padding * 1.5,
    borderWidth: 1,
    borderColor: "#F3F2F2",
    borderStyle: "solid",
    borderRadius: 6,
    backgroundColor: "#FBFBFB",
    paddingHorizontal: SIZES.padding * 2,
  },
};

export const HEADINGSTYLE = {
  primary: {
    color: COLORS.primary,
    ...FONTS.body1,
    fontFamily: "Regular",
  },
  secondary: {
    color: COLORS.primary,
    ...FONTS.h3,
    fontFamily: "Regular",
  },
};

export const CARD = {
  title: {
    color: COLORS.primary,
    ...FONTS.labelMM,
  },
  small: {
    title: {
      color: COLORS.primary,
      ...FONTS.labelXSM,
    },
  },
  large: {
    title: {
      color: COLORS.primary,
      ...FONTS.labelSM,
    },
    description: {
      color: COLORS.black50,
      ...FONTS.labelXSM,
    },
    offBadge: {
      position: "absolute",
      top: 16,
      left: 0,
      height: 24,
      width: 74,
      justifyContent: "center",
      alignItems: "center",
    },
    timeBadge: {
      backgroundColor: COLORS.white,
      padding: 6,
      position: "absolute",
      bottom: 16,
      left: 16,
      borderRadius: 6,
    },
    
    titleRatingWrap: {
      width: '100%',      
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: SIZES.padding,
      
    },
    ratingWrap: {      
      flexDirection: 'row',
      justifyContent: 'center'            
    },
    ratingBox: {
      backgroundColor: COLORS.pink,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: SIZES.padding * .2,
      paddingHorizontal: SIZES.padding * .4,
      borderRadius: 4,
      marginBottom: SIZES.padding *.3,
    },
    ratingBoxText: {
      ...FONTS.labeXSM,
      color: COLORS.white
    }
  }, 
  menu: {
    title: {
      color: COLORS.primary,
      ...FONTS.labelMM,
    },
    description: {
      color: COLORS.black50,
      ...FONTS.labelXSM,
    },
    price: {
      color: COLORS.blue,
      ...FONTS.labelSM,
    },
  } 
  
};

const appTheme = {
  COLORS,
  SIZES,
  FONTS,
  BUTTON,
  BUTTONTEXT,
  INPUT,
  HEADINGSTYLE,
  CARD,
};

export default appTheme;
