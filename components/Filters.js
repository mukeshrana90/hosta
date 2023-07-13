import React from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";

import {  
  COLORS,
  FONTS,
  SIZES,
  BUTTONTEXT,
  INPUT,
  HEADINGSTYLE,
} from "../constants";

const Filters = ({modalVisible, setModalVisible}) => {
  return (        
    <View style={styles.centeredView}>      
      <View style={styles.filterRow}>
        <TouchableOpacity style={[styles.filterBtn, styles.activebtn]}>
          <Text style={styles.activeBtnText}>Max Safety</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn}><AntDesign name="star" size={12} style={{marginRight: 4}} /><Text>Pro</Text></TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn}><Text>Fastest Delivery</Text></TouchableOpacity>        
      </View>
     
    </View>
  )   
};

export default Filters;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,              
  },
  filterRow: {    
    flexDirection: 'row',    
    alignItems: 'center',
    marginVertical: SIZES.padding,
  },  
  filterBtn: {
    paddingVertical: SIZES.padding*.5,
    paddingHorizontal: SIZES.padding,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.lightGray3,  
    marginRight: SIZES.base,
    borderRadius: 8,  
    flexDirection: 'row',
    alignItems: 'center' 
  },
  activebtn: {
    borderColor: COLORS.blue,
    backgroundColor: COLORS.blue,    
  },
  activeBtnText: {
    color: COLORS.white
  },
  modalView: {        
    padding: 24,  
    marginTop: 20      
  },
  closeButton: {
    marginBottom: 20
  },
  locationBtn: {
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    marginTop: 24,
  },
  locationBtnText: {
      color: COLORS.blue,
      paddingLeft: 8
  }
});