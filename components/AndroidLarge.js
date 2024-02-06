import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import AndroidLarge2 from "./AndroidLarge2";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AndroidLarge = ({ onClose }) => {
  const [
    startupShopRocketLaunchStContainerVisible,
    setStartupShopRocketLaunchStContainerVisible,
  ] = useState(false);

  const openStartupShopRocketLaunchStContainer = useCallback(() => {
    setStartupShopRocketLaunchStContainerVisible(true);
  }, []);

  const closeStartupShopRocketLaunchStContainer = useCallback(() => {
    setStartupShopRocketLaunchStContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.androidLarge1}>
        <Image
          style={styles.unnamed1Icon}
          contentFit="cover"
          source={require("../assets/unnamed-1.png")}
        />
        <LinearGradient
          style={[styles.androidLarge1Child, styles.androidLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        />
        <LinearGradient
          style={[styles.androidLarge1Item, styles.androidLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        />
        <LinearGradient
          style={styles.androidLarge1Inner}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.androidLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        />
        <Text style={[styles.softwareEngneer, styles.softwareTypo]}>
          SOFTWARE ENGİNEER
        </Text>
        <Text style={[styles.softwareEngneer1, styles.softwareTypo]}>
          SOFTWARE ENGİNEER
        </Text>
        <Text style={[styles.mobleAppDeveloper, styles.softwareTypo]}>
          MOBİLE APP DEVELOPER
        </Text>
        <Text style={[styles.mobleAppDeveloper1, styles.softwareTypo]}>
          MOBİLE APP DEVELOPER
        </Text>
        <Text style={[styles.reactNatveDeveloper, styles.reactTypo]}>
          REACT NATİVE DEVELOPER
        </Text>
        <Text style={[styles.reactNatveDeveloper1, styles.reactTypo]}>
          REACT NATİVE DEVELOPER
        </Text>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <LinearGradient
          style={[styles.androidLarge1Child1, styles.rectangleViewLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(2, 0, 13, 0)"]}
        />
        <View
          style={[styles.androidLarge1Child2, styles.androidChildPosition1]}
        />
        <View
          style={[styles.androidLarge1Child3, styles.androidChildPosition]}
        />
        <LinearGradient
          style={[styles.androidLarge1Child4, styles.androidChildPosition1]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(2, 0, 13, 0)"]}
        />
        <LinearGradient
          style={[styles.androidLarge1Child5, styles.androidChildPosition]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(2, 0, 13, 0)"]}
        />
        <View style={styles.home3HomeHouseRoofShelte}>
          <Image
            style={styles.home3HomeHouseRoofShelteIcon}
            contentFit="cover"
            source={require("../assets/home3homehouseroofshelter.png")}
          />
        </View>
        <Pressable
          style={[
            styles.startupShopRocketLaunchSt,
            styles.emergencyExitPosition,
          ]}
          onPress={openStartupShopRocketLaunchStContainer}
        >
          <Image
            style={styles.startupShopRocketLaunchStIcon}
            contentFit="cover"
            source={require("../assets/startupshoprocketlaunchstartup.png")}
          />
        </Pressable>
        <View style={[styles.emergencyExit, styles.emergencyExitPosition]}>
          <Image
            style={styles.emergencyExitIcon}
            contentFit="cover"
            source={require("../assets/emergencyexit.png")}
          />
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={startupShopRocketLaunchStContainerVisible}
      >
        <View style={styles.startupShopRocketLaunchStContainerOverlay}>
          <Pressable
            style={styles.startupShopRocketLaunchStContainerBg}
            onPress={closeStartupShopRocketLaunchStContainer}
          />
          <AndroidLarge2 onClose={closeStartupShopRocketLaunchStContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    width: 166,
    backgroundColor: "transparent",
    height: 23,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  softwareTypo: {
    height: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xs,
    width: 135,
    position: "absolute",
  },
  reactTypo: {
    width: 151,
    height: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xs,
    left: 115,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 11,
    borderRadius: Border.br_xl,
    top: 408,
    position: "absolute",
  },
  androidChildPosition1: {
    top: 457,
    height: 11,
    borderRadius: Border.br_xl,
    left: 34,
    position: "absolute",
  },
  androidChildPosition: {
    top: 506,
    height: 11,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  emergencyExitPosition: {
    height: 37,
    top: 762,
    padding: Padding.p_12xs,
    position: "absolute",
    overflow: "hidden",
  },
  unnamed1Icon: {
    top: 83,
    borderRadius: Border.br_43xl,
    width: 126,
    height: 130,
    left: 115,
    position: "absolute",
  },
  androidLarge1Child: {
    left: 12,
    backgroundColor: "transparent",
    height: 23,
    top: 243,
    width: 166,
  },
  androidLarge1Item: {
    left: 189,
    backgroundColor: "transparent",
    height: 23,
    top: 243,
    width: 166,
  },
  androidLarge1Inner: {
    top: 748,
    left: -13,
    width: 399,
    height: 56,
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 285,
    left: 106,
    backgroundColor: "transparent",
    height: 23,
  },
  softwareEngneer: {
    left: 33,
    top: 248,
    height: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xs,
  },
  softwareEngneer1: {
    top: 388,
    left: 123,
  },
  mobleAppDeveloper: {
    left: 204,
    top: 248,
    height: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xs,
  },
  mobleAppDeveloper1: {
    top: 439,
    left: 116,
  },
  reactNatveDeveloper: {
    top: 290,
  },
  reactNatveDeveloper1: {
    top: 488,
  },
  rectangleView: {
    width: 300,
    backgroundColor: Color.colorGainsboro,
    left: 34,
  },
  androidLarge1Child1: {
    width: 135,
    height: 11,
    borderRadius: Border.br_xl,
    top: 408,
    left: 33,
    backgroundColor: "transparent",
  },
  androidLarge1Child2: {
    width: 300,
    backgroundColor: Color.colorGainsboro,
  },
  androidLarge1Child3: {
    width: 300,
    backgroundColor: Color.colorGainsboro,
    left: 34,
  },
  androidLarge1Child4: {
    width: 216,
    backgroundColor: "transparent",
  },
  androidLarge1Child5: {
    width: 191,
    left: 33,
    backgroundColor: "transparent",
  },
  home3HomeHouseRoofShelteIcon: {
    width: 28,
    height: 28,
  },
  home3HomeHouseRoofShelte: {
    top: 760,
    left: 38,
    height: 44,
    padding: Padding.p_12xs,
    width: 77,
    position: "absolute",
    overflow: "hidden",
  },
  startupShopRocketLaunchStContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  startupShopRocketLaunchStContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  startupShopRocketLaunchStIcon: {
    width: 23,
    height: 23,
  },
  startupShopRocketLaunchSt: {
    left: 169,
    width: 77,
    top: 762,
  },
  emergencyExitIcon: {
    width: 22,
    height: 22,
  },
  emergencyExit: {
    marginLeft: 115,
    left: "50%",
    width: 60,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  androidLarge1: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default AndroidLarge;
