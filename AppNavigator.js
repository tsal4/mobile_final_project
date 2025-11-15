import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Favorites Screen Component
import Favorites from "./screens/myFavoriteResources";
import WelcomeScreen from "./screens/WelcomeScreen";
import FoodNearby from "./screens/FoodNearby";
import LocationPermission from "./screens/LocationPermission";
import FilterResults from "./screens/FilterResults";
import ResourceDetails from "./screens/ResourceDetails";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="FoodNearby" component={FoodNearby} />
        <Stack.Screen name="ResourceDetails" component={ResourceDetails} options={{ headerShown: false }} />
        <Stack.Screen name="LocationPermission" component={LocationPermission} options={{ headerShown: false }} />
        <Stack.Screen name="FilterResults" component={FilterResults} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}