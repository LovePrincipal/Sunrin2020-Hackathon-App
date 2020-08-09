import 'react-native-gesture-handler';
import React from 'react';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import Client from './src/ApolloClient';
import Router from './src/Router/';

const App: React.FC = () => {
  return (
    <ApolloProvider client={Client as unknown as ApolloClient<any>}>
      <Router />
    </ApolloProvider>
  )
}

export default App;