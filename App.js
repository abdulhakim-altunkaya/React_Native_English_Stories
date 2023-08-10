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
      title: "Read a Story",
    },
  }
);
export default createAppContainer(navigator);