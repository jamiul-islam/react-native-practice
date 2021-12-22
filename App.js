import * as React from "react";
import { Button, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./app/components/Screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};
function Tweets({ navigation }) {
  return (
    <Screen style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tweet</Text>
      <Button
        title="Click"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
      {/* <Link /> */}
    </Screen>
  );
}
function TweetDetails({ route }) {
  return (
    <Screen style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
}
function AccountNavigator() {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweet" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{
          title: "Tweet Details",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "tomato",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        activeBackgroundColor: "tomato",
        inactiveTintColor: "black",
        inactiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
