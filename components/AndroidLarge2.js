import React, { useState, useCallback } from "react";
import { View, StyleSheet, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import AndroidLarge from "./AndroidLarge";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const AndroidLarge2 = ({ onClose }) => {
  const [
    home3HomeHouseRoofShelteIconVisible,
    setHome3HomeHouseRoofShelteIconVisible,
  ] = useState(false);

  const openHome3HomeHouseRoofShelteIcon = useCallback(() => {
    setHome3HomeHouseRoofShelteIconVisible(true);
  }, []);

  const closeHome3HomeHouseRoofShelteIcon = useCallback(() => {
    setHome3HomeHouseRoofShelteIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.androidLarge2, styles.envelopeIconLayout]}>
        <Image
          style={styles.unnamed1Icon}
          contentFit="cover"
          source={require("../assets/unnamed-1.png")}
        />
        <LinearGradient
          style={styles.androidLarge2Child}
          locations={[0, 1]}
          colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
        />
        <Pressable
          style={styles.home3HomeHouseRoofShelte}
          onPress={openHome3HomeHouseRoofShelteIcon}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home3homehouseroofshelter2.png")}
          />
        </Pressable>
        <Image
          style={[styles.startupShopRocketLaunchStIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/startupshoprocketlaunchstartup1.png")}
        />
        <Image
          style={[styles.emergencyExitIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/emergencyexit2.png")}
        />
        <LinearGradient
          style={[styles.androidLarge2Item, styles.androidLayout]}
          locations={[0, 1]}
          colors={["#161515", "rgba(22, 21, 21, 0)"]}
        />
        <LinearGradient
          style={[styles.androidLarge2Inner, styles.androidLayout]}
          locations={[0, 1]}
          colors={["#161515", "rgba(22, 21, 21, 0)"]}
        />
        <Image
          style={[styles.envelopeIcon, styles.envelopeIconLayout]}
          contentFit="cover"
          source={require("../assets/envelope.png")}
        />
        <Image
          style={[styles.instagramIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/instagram.png")}
        />
        <Image
          style={[styles.googleMediaGoogleSocialIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/googlemediagooglesocial.png")}
        />
        <Text style={[styles.bo, styles.boTypo]}>BİO</Text>
        <Text style={[styles.contact, styles.boTypo]}>CONTACT</Text>
        <Image
          style={[styles.startupShopRocketLaunchStIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/startupshoprocketlaunchstartup2.png")}
        />
        <Text style={styles.merhabaBenEmirhan}>
          Merhaba Ben Emirhan 20 Yaşındayım yaklaşık 2 senedir yazılım işiyle
          uğraşıyorum, React Native dili ile mobil uygulama geliştirme alanında
          çalışmalar yapıyorum. Benimle iş birşiği yapmak isterseniz aşağıdan
          bana ulaşmayı unutmayın!
        </Text>
        <Image
          style={[styles.megaphone2BullhornLoudMegIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/megaphone2bullhornloudmegaphonesharespeakertransmit.png")}
        />
        <Text style={styles.emirhanekincii2006gmailcom}>
          emirhanekincii2006@gmail.com
        </Text>
        <Text style={[styles.emirhanekincii, styles.emirhanekinciiTypo]}>
          @1emirhanekincii
        </Text>
        <Text style={[styles.githubcomemirs01, styles.emirhanekinciiTypo]}>
          github.com/emirs01
        </Text>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={home3HomeHouseRoofShelteIconVisible}
      >
        <View style={styles.home3HomeHouseRoofShelteIconOverlay}>
          <Pressable
            style={styles.home3HomeHouseRoofShelteIconBg}
            onPress={closeHome3HomeHouseRoofShelteIcon}
          />
          <AndroidLarge onClose={closeHome3HomeHouseRoofShelteIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  envelopeIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  androidLayout: {
    height: 195,
    width: 314,
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  boTypo: {
    height: 12,
    width: 135,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  iconPosition: {
    left: 30,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  emirhanekinciiTypo: {
    width: 151,
    fontSize: FontSize.size_xs,
    height: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  unnamed1Icon: {
    top: 83,
    left: 115,
    borderRadius: Border.br_43xl,
    width: 126,
    height: 130,
    position: "absolute",
  },
  androidLarge2Child: {
    top: 748,
    left: -13,
    borderRadius: Border.br_31xl,
    width: 399,
    height: 56,
    backgroundColor: "transparent",
    position: "absolute",
  },
  home3HomeHouseRoofShelteIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  home3HomeHouseRoofShelteIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  home3HomeHouseRoofShelte: {
    left: 40,
    top: 759,
    width: 30,
    height: 30,
    position: "absolute",
  },
  startupShopRocketLaunchStIcon: {
    top: 764,
    left: 174,
  },
  emergencyExitIcon: {
    top: 763,
    left: 300,
  },
  androidLarge2Item: {
    top: 246,
    left: 22,
  },
  androidLarge2Inner: {
    top: 474,
    left: 21,
  },
  envelopeIcon: {
    height: "3%",
    width: "6.67%",
    top: "66.25%",
    right: "85.83%",
    bottom: "30.75%",
    left: "7.5%",
    position: "absolute",
  },
  instagramIcon: {
    top: 564,
    left: 27,
  },
  googleMediaGoogleSocialIcon: {
    top: 602,
    left: 26,
  },
  bo: {
    top: 257,
    left: 70,
  },
  contact: {
    top: 485,
    left: 64,
  },
  startupShopRocketLaunchStIcon1: {
    top: 263,
  },
  merhabaBenEmirhan: {
    top: 308,
    left: 33,
    fontSize: FontSize.size_mini,
    width: 303,
    height: 119,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  megaphone2BullhornLoudMegIcon: {
    top: 491,
  },
  emirhanekincii2006gmailcom: {
    top: 536,
    width: 175,
    textDecoration: "underline",
    fontSize: FontSize.size_xs,
    left: 56,
    height: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  emirhanekincii: {
    top: 570,
    left: 56,
    width: 151,
  },
  githubcomemirs01: {
    top: 604,
    left: 55,
    textDecoration: "underline",
  },
  androidLarge2: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
  },
});

export default AndroidLarge2;
