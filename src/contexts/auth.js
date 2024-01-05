import React, { createContext, useState } from "react";

import api from "../services/api";
import { useNavigation } from '@react-navigation/native'

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [ loadingAuth, setLoadingAuth ] = useState(false);

  const navigation = useNavigation();

  async function signUp(nome, email, password){
    setLoadingAuth(true);

    try{
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: password,
      })

      setLoadingAuth(false);
      navigation.goBack();

    }catch(err){
      console.log("ERRO AO CADASTRAR", err)
      setLoadingAuth(false)
    }
  }
  
  return(
    <AuthContext.Provider value={{ user, signUp, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;