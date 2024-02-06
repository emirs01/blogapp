import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AndroidLarge2 from "../components/AndroidLarge2";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AndroidLarge1 = () => {
  const [
    startupShopRocketLaunchStContainerVisible,
    setStartupShopRocketLaunchStContainerVisible,
  ] = useState(false);
  const navigation = useNavigation();

  const openStartupShopRocketLaunchStContainer = useCallback(() => {
    setStartupShopRocketLaunchStContainerVisible(true);
  }, []);

  const closeStartupShopRocketLaunchStContainer = useCallback(() => {
    setStartupShopRocketLaunchStContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.androidLarge4}>
        <Image
          style={styles.unnamed1Icon}
          contentFit="cover"
          source={require("../assets/unnamed-1.png")}
        />
        <LinearGradient
          style={[styles.androidLarge4Child, styles.androidLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        />
        <LinearGradient
          style={[styles.androidLarge4Item, styles.androidLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        />
        <LinearGradient
          style={[styles.androidLarge4Inner, styles.androidLayout1]}
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
          style={[styles.androidLarge4Child1, styles.rectangleViewLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(2, 0, 13, 0)"]}
        />
        <View
          style={[styles.androidLarge4Child2, styles.androidChildPosition1]}
        />
        <View
          style={[styles.androidLarge4Child3, styles.androidChildPosition]}
        />
        <LinearGradient
          style={[styles.androidLarge4Child4, styles.androidChildPosition1]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(2, 0, 13, 0)"]}
        />
        <LinearGradient
          style={[styles.androidLarge4Child5, styles.androidChildPosition]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(2, 0, 13, 0)"]}
        />
        <View style={styles.home3HomeHouseRoofShelte}>
          <Image
            style={styles.home3HomeHouseRoofShelteIcon}
            contentFit="cover"
            source={require("../assets/home3homehouseroofshelter1.png")}
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
            source={require("../assets/emergencyexit1.png")}
          />
        </View>
        <View style={styles.androidLarge4Child6} />
        <Text style={styles.ikmakStedneEmn}>ÇIKMAK İSTEDİĞİNE EMİN MİSİN?</Text>
        <LinearGradient
          style={[styles.androidLarge4Child7, styles.wrapperLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        />
        <LinearGradient
          style={[styles.wrapper, styles.wrapperLayout]}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        >
          <Pressable
            style={[styles.pressable, styles.androidLayout1]}
            onPress={() => navigation.navigate("AndroidLarge")}
          />
        </LinearGradient>
        <Text style={[styles.evet, styles.evetTypo]}>EVET</Text>
        <Text style={[styles.hayir, styles.evetTypo]}>HAYIR</Text>
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
  androidLayout1: {
    borderRadius: Border.br_31xl,
    backgroundColor: "transparent",
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
    top: 408,
    borderRadius: Border.br_xl,
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
  wrapperLayout: {
    height: 43,
    width: 150,
    top: 469,
    position: "absolute",
  },
  evetTypo: {
    top: 471,
    fontSize: FontSize.size_11xl,
    width: 135,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  unnamed1Icon: {
    top: 83,
    borderRadius: Border.br_43xl,
    width: 126,
    height: 130,
    left: 115,
    position: "absolute",
  },
  androidLarge4Child: {
    left: 12,
    backgroundColor: "transparent",
    height: 23,
    top: 243,
    width: 166,
  },
  androidLarge4Item: {
    left: 189,
    backgroundColor: "transparent",
    height: 23,
    top: 243,
    width: 166,
  },
  androidLarge4Inner: {
    top: 748,
    left: -13,
    width: 399,
    height: 56,
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: Border.br_31xl,
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
  androidLarge4Child1: {
    width: 135,
    height: 11,
    top: 408,
    left: 33,
    backgroundColor: "transparent",
  },
  androidLarge4Child2: {
    width: 300,
    backgroundColor: Color.colorGainsboro,
  },
  androidLarge4Child3: {
    width: 300,
    backgroundColor: Color.colorGainsboro,
    left: 34,
  },
  androidLarge4Child4: {
    width: 216,
    backgroundColor: "transparent",
  },
  androidLarge4Child5: {
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
    width: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    left: "50%",
  },
  androidLarge4Child6: {
    top: 323,
    left: 3,
    backgroundColor: Color.colorGray_100,
    width: 353,
    height: 232,
    borderRadius: Border.br_xl,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  ikmakStedneEmn: {
    marginLeft: -157,
    top: 345,
    textAlign: "center",
    width: 314,
    height: 161,
    fontSize: FontSize.size_11xl,
    left: "50%",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  androidLarge4Child7: {
    left: 18,
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
    borderRadius: Border.br_31xl,
  },
  wrapper: {
    left: 197,
  },
  evet: {
    left: 56,
    height: 25,
  },
  hayir: {
    marginLeft: 47,
    left: "50%",
    height: 23,
  },
  androidLarge4: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 800,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "100%",
  },
});

export default AndroidLarge1;
