


import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import MainScreen from "./src/MainScreen";

const navigator = createStackNavigator({
    Main: MainScreen,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "Read a Story",
    },
  }
);
export default createAppContainer(navigator);