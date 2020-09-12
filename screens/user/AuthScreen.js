import React from "react";
import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AuthScreen = props => {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={["#ffedff", "#ffe3ff"]} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id='email'
              label='E-Mail'
              keyboardType='email-address'
              required
              minLength={5}
              autoCapitalize='none'
              errorMessage='please enter a valid password.'
              onInputChange={() => {}}
              initialValue=''
            />
            <Input
              id='password'
              label='password'
              keyboardType='default'
              required
              email
              autoCapitalize='none'
              errorMessage='please enter a valid email address.'
              onInputChange={() => {}}
              initialValue=''
            />
          </ScrollView>
          <View style={styles.ButtonContainer}>
            <Button title='Login' color={Colors.primary} onPress={() => {}} />
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              title='Switch to Sign Up'
              color={Colors.accent}
              onPress={() => {}}
            />
          </View>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

AuthScreen.options = {
  headerTitle: "Authenticate"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  authContainer: {
    padding: 20,
    width: "80%",
    maxWidth: 400,
    maxHeight: 400
  },
  ButtonContainer: {
    marginTop: 10
  }
});

export default AuthScreen;
