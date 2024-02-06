const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge from "./components/AndroidLarge";
import AndroidLarge1 from "./screens/AndroidLarge1";
import AndroidLarge2 from "./components/AndroidLarge2";
import AndroidLarge3 from "./screens/AndroidLarge3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

// 
//   Created BY emirs 
// 
//!  İnstagram 
//   @1emirhanekinci 
// 
//!  Github 
//   emirs01 
//

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Itim-Regular": require("./assets/fonts/Itim-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge"
              component={AndroidLarge}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;




