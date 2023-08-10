import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import MainScreen from "./src/MainScreen";
import AllStoriesScreen from "./src/AllStoriesScreen";

const navigator = createStackNavigator({
    Main: MainScreen,
    All: AllStoriesScreen,
  },
  {
    initialRouteName: "All",
    defaultNavigationOptions: {
      title: "Read a Story",
    },
  }
);
export default createAppContainer(navigator);