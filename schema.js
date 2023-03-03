const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        offers(limit: Int, sort: Sort): [Offer!]!
    }

    type Offer {
        id: String!
        name: String!
        imageUrl: String!
        dateAdded: String!
        description: String
        value: Float!
        currency: String!
        visitedCount: Int!
    }
    
    enum SortBy {
        NAME
        DATE_ADDED
        PRICE
    }
    
    enum OrderBy {
        ASC
        DESC
    }
    
    input Sort {
        by: SortBy!
        order: OrderBy!
    }

    type Mutation {
        markVisited(offerId: String!): Offer
    }
`;

module.exports = typeDefs;
