import { gql } from "apollo-boost";

export const Braiile = gql`
    query {
        translation {
            word
            audio
        }
    }   
`;