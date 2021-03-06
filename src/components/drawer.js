/* @flow */

import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as COLOR from "../config/colors";

export default class DrawerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeSelected: true,
      profileSelected: false,
      settingsSelected: false
    };
  } // constructor

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.PRIMARY,
          paddingTop: 40
        }}
      >
        <View style={{ marginVertical: 32, paddingHorizontal: 20 }}>
          <Image
            style={{ height: 45, width: 161 }}
            source={require("../assets/img/logo.png")}
          />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: COLOR.CARD
          }}
        >
          <TouchableOpacity
            style={{ marginBottom: 24 }}
            onPress={() => {
              this.setState({
                homeSelected: true,
                profileSelected: false,
                settingsSelected: false
              });
              navigation.navigate("HomeItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row",
                backgroundColor: this.state.homeSelected
                  ? COLOR.TINT_DARK
                  : null
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="home"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 24 }}
            onPress={() => {
              this.setState({
                homeSelected: false,
                profileSelected: true,
                settingsSelected: false
              });

              navigation.navigate("ProfileItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row",
                backgroundColor: this.state.profileSelected
                  ? COLOR.TINT_DARK
                  : null
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="account"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 24 }}
            onPress={() => {
              this.setState({
                homeSelected: false,
                profileSelected: false,
                settingsSelected: true
              });

              navigation.navigate("SettingsItem");
            }}
          >
            <View
              style={{
                padding: 16,
                flexDirection: "row",
                backgroundColor: this.state.settingsSelected
                  ? COLOR.TINT_DARK
                  : null
              }}
            >
              <Icon
                style={{ marginRight: 24 }}
                name="settings"
                size={21}
                color={COLOR.PRIMARY_TEXT}
              />
              <Text style={{ fontSize: 14, color: COLOR.PRIMARY_TEXT }}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  } // render
} // DrawerContainer
