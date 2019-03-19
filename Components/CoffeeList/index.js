import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

// Store
import coffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Coffee List",
      headerLeft: null,
      headerRight: (
        <Button transparent onPress={() => navigation.navigate("Cart")}>
          <Icon type="FontAwesome5" name="opencart" style={{ fontSize: 30 }} />
        </Button>
      )
    };
  };

  render() {
    const coffeeshops = coffeeStore.coffeeshops;
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeShop => (
        <CoffeeItem
          coffeeShop={coffeeShop}
          key={coffeeShop.id}
          navigation={this.props.navigation}
        />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}
export default observer(CoffeeList);
