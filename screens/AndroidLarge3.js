import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge3}>
      <Image
        style={styles.unnamed1Icon}
        contentFit="cover"
        source={require("../assets/unnamed-1.png")}
      />
      <LinearGradient
        style={[styles.androidLarge3Child, styles.pressableBg]}
        locations={[0, 1]}
        colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
      />
      <Pressable
        style={styles.home3HomeHouseRoofShelte}
        onPress={() => navigation.navigate("AndroidLarge")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/home3homehouseroofshelter2.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.startupShopRocketLaunchSt,
          styles.emergencyExitIconLayout,
        ]}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/startupshoprocketlaunchstartup3.png")}
        />
      </Pressable>
      <Image
        style={[styles.emergencyExitIcon, styles.emergencyExitIconLayout]}
        contentFit="cover"
        source={require("../assets/emergencyexit3.png")}
      />
      <LinearGradient
        style={[styles.androidLarge3Item, styles.androidLayout]}
        locations={[0, 1]}
        colors={["#161515", "rgba(22, 21, 21, 0)"]}
      />
      <LinearGradient
        style={[styles.androidLarge3Inner, styles.androidLayout]}
        locations={[0, 1]}
        colors={["#161515", "rgba(22, 21, 21, 0)"]}
      />
      <Image
        style={styles.envelopeIcon}
        contentFit="cover"
        source={require("../assets/envelope1.png")}
      />
      <Image
        style={[styles.instagramIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/instagram1.png")}
      />
      <Image
        style={[styles.googleMediaGoogleSocialIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/googlemediagooglesocial1.png")}
      />
      <Text style={[styles.bo, styles.boTypo]}>BİO</Text>
      <Text style={[styles.contact, styles.boTypo]}>CONTACT</Text>
      <Image
        style={[styles.startupShopRocketLaunchStIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/startupshoprocketlaunchstartup4.png")}
      />
      <Text style={styles.merhabaBenEmirhan}>
        Merhaba Ben Emirhan 20 Yaşındayım yaklaşık 2 senedir yazılım işiyle
        uğraşıyorum, React Native dili ile mobil uygulama geliştirme alanında
        çalışmalar yapıyorum. Benimle iş birşiği yapmak isterseniz aşağıdan bana
        ulaşmayı unutmayın!
      </Text>
      <Image
        style={[styles.megaphone2BullhornLoudMegIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/megaphone2bullhornloudmegaphonesharespeakertransmit1.png")}
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
      <View style={styles.rectangleView} />
      <Text style={styles.ikmakStedneEmn}>ÇIKMAK İSTEDİĞİNE EMİN MİSİN?</Text>
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
      />
      <LinearGradient
        style={[styles.wrapper, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#5200ff", "rgba(0, 224, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("AndroidLarge2")}
        />
      </LinearGradient>
      <Text style={[styles.hayir, styles.evetTypo]}>HAYIR</Text>
      <Text style={[styles.evet, styles.evetTypo]}>EVET</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  emergencyExitIconLayout: {
    width: 25,
    height: 25,
    position: "absolute",
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
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_11xl,
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
  wrapperLayout: {
    height: 43,
    width: 150,
    top: 467,
    position: "absolute",
  },
  evetTypo: {
    width: 135,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_11xl,
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
  androidLarge3Child: {
    top: 748,
    left: -13,
    width: 399,
    height: 56,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  home3HomeHouseRoofShelte: {
    left: 40,
    top: 759,
    width: 30,
    height: 30,
    position: "absolute",
  },
  startupShopRocketLaunchSt: {
    left: 174,
    top: 764,
    height: 25,
  },
  emergencyExitIcon: {
    top: 763,
    left: 300,
    height: 25,
    overflow: "hidden",
  },
  androidLarge3Item: {
    top: 246,
    left: 22,
  },
  androidLarge3Inner: {
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
  startupShopRocketLaunchStIcon: {
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
  rectangleView: {
    top: 325,
    left: 1,
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
    top: 349,
    left: "50%",
    textAlign: "center",
    height: 161,
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_11xl,
    width: 314,
    position: "absolute",
  },
  rectangleLineargradient: {
    left: 11,
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
  },
  pressable: {
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
  },
  wrapper: {
    left: 187,
  },
  hayir: {
    top: 468,
    left: 219,
    height: 23,
  },
  evet: {
    top: 469,
    left: 49,
    height: 25,
  },
  androidLarge3: {
    backgroundColor: "#030303",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default AndroidLarge3;
