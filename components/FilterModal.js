import React from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";

import {  
  COLORS,
  FONTS,
  SIZES,
  BUTTONTEXT,
  INPUT,
  HEADINGSTYLE,
} from "../constants";

const FilterModal = ({filterModalVisible, setFilterModalVisible}) => {
  return (         
    <View style={styles.centeredView}>      
       <Modal
        animationType="slide"
        presentationStyle = "fullScreen"        
        visible={filterModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>          
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.closeButton} activeOpacity={1} onPress={() => { setFilterModalVisible(!filterModalVisible)}}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>

              <Text style={{ ...HEADINGSTYLE.primary, marginBottom: SIZES.base }}>Find restaurants near you </Text>  
              <Text style={{ ...FONTS.body2, fontFamily: "Regular", color: COLORS.secondary}}>
                Please enter your location or allow access to your location to find restaurants near you.
              </Text>  
              
              <TouchableOpacity style={[{...BUTTONTEXT.primary}, styles.locationBtn]}>
                <Feather name="navigation" size={24} color="#3654FF" />
                <Text style={[{...FONTS.h4}, styles.locationBtnText]}>Use current location</Text>
              </TouchableOpacity>
              
              <Formik>          
                <View style={{marginTop: SIZES.body2}}>
                  <TextInput                                
                    placeholder="Enter a new address"
                    style={{
                      ...INPUT.primary,
                      ...FONTS.body2,
                      fontFamily: "Regular",
                    }}
                  />                                
                </View>        
              </Formik>              
            </View>
          
        </View>
      </Modal>      
   
     
    </View>
  )   
};

export default FilterModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: '50%'              
  },
  filterRow: {
    paddingHorizontal: SIZES.padding *2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.padding,
  },  
  filterBtn: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding*1.2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.lightGray3,  
    marginRight: 8,
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