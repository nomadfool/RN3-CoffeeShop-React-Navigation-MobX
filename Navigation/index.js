import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";

import LoginScreen from "../Components/Login";
import CoffeeListScreen from "../Components/CoffeeList";
import CoffeeDetailScreen from "../Components/CoffeeDetail";
import CoffeeCartScreen from "../Components/CoffeeCart";

const myStack = createStackNavigator(
  {
    Login: LoginScreen,
    List: CoffeeListScreen,
    Details: CoffeeDetailScreen,
    Cart: CoffeeCartScreen
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(myStack);

export default AppContainer;
