export const schema = gql`
  type Team {
    id: Int!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    entry: [Entry]!
    dog: [Match]!
    cat: [Match]!
  }

  type Query {
    teams: [Team!]! @requireAuth
    team(id: Int!): Team @requireAuth
  }

  input CreateTeamInput {
    name: String!
  }

  input UpdateTeamInput {
    name: String
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team! @requireAuth
    updateTeam(id: Int!, input: UpdateTeamInput!): Team! @requireAuth
    deleteTeam(id: Int!): Team! @requireAuth
  }
`
