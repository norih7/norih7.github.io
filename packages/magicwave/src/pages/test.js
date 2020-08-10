import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
    query MyPokemonQuery {
        allPokemon {
            nodes {
                name
                type
                id
            }
        }
    }
`;

const IndexPage = ({ data }) => {
    console.log(data);

    return <div></div>;
};

export default IndexPage;
