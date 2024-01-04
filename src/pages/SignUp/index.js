import React from 'react';
import { Platform } from 'react-native';
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignUp(){
  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
          <Input 
            placeholder="Seu nome"
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Email"
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Senha"
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}