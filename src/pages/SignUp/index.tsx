import React, { useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import Input from "../../components/Input";
import Button from "../../components/Button";

import logoImg from "../../assets/Logo.png";

import {
  BackToSignIn,
  BackToSignInText,
  Container,
  Title,
} from "./styles";

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

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
              <Title>Cria sua conta</Title>
            </View>
            <Form onSubmit={(data) => { console.log(data)} } ref={formRef}>
              <Input onSubmitEditing={() => { emailInputRef.current?.focus() }} autoCapitalize="words" name="name" icon="user" placeholder="Nome" returnKeyType="next" />
              <Input onSubmitEditing={() => { passwordInputRef.current?.focus() }} ref={emailInputRef} autoCapitalize="none" autoCorrect={false} keyboardType="email-address" name="email" icon="mail" placeholder="E-mail" returnKeyType="next" />
              <Input ref={passwordInputRef} name="password" icon="lock" placeholder="Senha" secureTextEntry textContentType="newPassword" returnKeyType="send" onSubmitEditing={() => formRef.current?.submitForm()} />
            </Form>
            <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
