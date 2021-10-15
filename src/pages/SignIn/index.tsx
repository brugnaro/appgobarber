import React, { useCallback, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from "../../components/Input";
import Button from "../../components/Button";

import logoImg from "../../assets/Logo.png";

import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  Title,
  ForgotPassword,
  ForgotPasswordText,
} from "./styles";

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        enabled
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Faça seu logon</Title>
            </View>
            
            <Form onSubmit={handleSignIn} ref={formRef}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address" 
                name="email" 
                icon="mail"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
                placeholder="E-mail"
                returnKeyType="next"
              />
              <Input
                ref={passwordInputRef}
                name="password" 
                icon="lock"
                onSubmitEditing={() => { formRef.current?.submitForm(); }}
                placeholder="Senha"
                returnKeyType="send"
                secureTextEntry
              />
            </Form>
            <Button onPress={() => { formRef.current?.submitForm(); }}>Entrar</Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate("SignUp")}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma Conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
