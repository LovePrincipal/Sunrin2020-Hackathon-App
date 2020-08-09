import ApolloClient from "apollo-boost";
import { API_HOST } from 'react-native-dotenv'

const client = new ApolloClient({
    uri: process.env.API_HOST
});

export default client;