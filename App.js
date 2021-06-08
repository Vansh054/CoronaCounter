import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Header, Icon, Badge } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Global from "./screens/Global";
import Country from "./screens/Country";
import India from "./screens/India";
import About from "./screens/About";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const BottomNavigator = createMaterialBottomTabNavigator(
  {
    Global: {
      screen: Global,
      navigationOptions: {
        title: "",
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/global.jpg")}
            style={{ width: 35, height: 35, marginTop: -6 }}
          ></Image>
        ),
      },
    },
    Country: {
      screen: Country,
      navigationOptions: {
        title: "",
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/country.png")}
            style={{ width: 50, height: 50, marginTop: -16 }}
          ></Image>
        ),
      },
    },
    India: {
      screen: India,
      navigationOptions: {
        title: "",
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/indiaflag.png")}
            style={{ width: 40, height: 40, marginTop: -9.5 }}
          ></Image>
        ),
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        title: "",
        tabBarVisible: true,
        
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/about.png")}
            style={{ width: 40, height: 40, marginTop: -9.5 }}
          ></Image>
        ),
      },
    },
  } 
);

const AppContainer = createAppContainer(BottomNavigator);

const styling = StyleSheet.create({});
