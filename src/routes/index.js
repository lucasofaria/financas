import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';

function Routes() {
  const signed = false;
  const loading = false;
  
  return (
    signed ? <View></View> : <AuthRoutes/> 
  );
}

export default Routes;