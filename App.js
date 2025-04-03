import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Details from "./Details";
import { Button } from "react-native-web";

//we are going to create a stack navigation
const Stack = createStackNavigator();

// add options to the Details screen to accept a route
// Header right which is a function that returns a button on the upper right hand part
// of the screen (upper portion is known as the header)
// return a button with the text of Buy and create a route parameter called stock that equal 0

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            headerRight: () => {
              return (
                <Button
                  title="Buy"
                  onPress={() => {}}
                  disabled={route.params.stock === 0}
                />
              );
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
