import ApolloClient from "apollo-boost";
// import {API_HOST} from 'react-native-dotenv'

const client = new ApolloClient({
    uri: 'http://localhost:7777/graphql'
});

export default client;