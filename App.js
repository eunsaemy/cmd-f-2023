import useNavigation from "@react-navigation/native";
import Icon from "react-native-ionicons";
import HomeScreen from "./screens/HomeScreen";
import HomeTitle from "./components/HomeTitle";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUp1Screen from "./screens/SignUp1Screen";
import SignUp2Screen from "./screens/SignUp2Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

function EmptyScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();

function Home({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 14 },
        tabBarActiveTintColor: "#F57C00",
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <HomeTitle {...props} />,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={
                  focused
                    ? require("./assets/home-active-48.png")
                    : require("./assets/home-inactive.png")
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Browse"
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={
                  focused
                    ? require("./assets/browse-active-48.png")
                    : require("./assets/browse-inactive-48.png")
                }
              />
            );
          },
        }}
        component={EmptyScreen}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={
                  focused
                    ? require("./assets/cart-active-48.png")
                    : require("./assets/cart-inactive-48.png")
                }
              />
            );
          },
        }}
        component={EmptyScreen}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={
                  focused
                    ? require("./assets/home-active-48.png")
                    : require("./assets/profile-inactive-48.png")
                }
              />
            );
          },
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Karla-Bold": require("./assets/fonts/Karla-Bold.ttf"),
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          style={styles.text}
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp1"
          style={styles.text}
          component={SignUp1Screen}
        />
        <Stack.Screen
          styles="style.text"
          name="SignUp2"
          component={SignUp2Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Karla-Regular",
  },
});
