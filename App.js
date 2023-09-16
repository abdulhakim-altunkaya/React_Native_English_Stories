import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import './firebaseConfig';
import MainScreen from "./src/MainScreen";
import AllStoriesScreen from "./src/AllStoriesScreen";

const navigator = createStackNavigator({
    Main: MainScreen,
    All: AllStoriesScreen,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "WELCOME TO WEIRD STORIES",
    },
  }
);
export default createAppContainer(navigator);