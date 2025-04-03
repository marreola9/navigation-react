import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Planets from "./Planets";
import Films from "./Films";
import SpaceshipsTab from "./Spaceships";

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
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Spaceships" component={SpaceshipsTab} />
        </Tab.Navigator>
      )}

      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Spaceships" component={SpaceshipsTab} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
