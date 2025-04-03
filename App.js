import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Home from "./Home";
import News from "./News";
import SettingsTab from "./Settings";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// add options to the Details screen to accept a route
// Header right which is a function that returns a button on the upper right hand part
// of the screen (upper portion is known as the header)
// return a button with the text of Buy and create a route parameter called stock that equal 0

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Settings" component={SettingsTab} />
        </Tab.Navigator>
      )}

      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="News" component={News} />
          <Drawer.Screen name="Settings" component={SettingsTab} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
