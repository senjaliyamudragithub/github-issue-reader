import { gql } from "@apollo/client";

export const REPOSITORY_INFO = gql`
  query SearchRepo {
    repository(name: "react", owner: "facebook") {
      id
      name
      createdAt
      description
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
    }
  }
`;
