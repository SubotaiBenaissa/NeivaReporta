import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../../screens/WelcomeScreen";
import LogInScreen from "../../screens/LogInScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import RestoreScreen from "../../screens/RestoreScreen";
import UserView from "../../screens/UserView";
import UserEditScreen from "../../screens/UserEditScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
  },
  LogIn: {
    screen: LogInScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  Restore: {
    screen: RestoreScreen,
  },
  User: {
    screen: UserView,
  },
  UserEdit: {
    screen: UserEditScreen,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(HomeStack);
