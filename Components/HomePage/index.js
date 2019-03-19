import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

import AppContainer from "../../Navigation";

class HomePage extends Component {
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}

export default HomePage;
