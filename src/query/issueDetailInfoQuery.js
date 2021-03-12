import { gql } from "@apollo/client";

export const ISSUE_DETAIL_QUERY = gql`
  query IssueQuery($number: Int!) {
    repository(owner: "facebook", name: "react") {
      id
      issue(number: $number) {
        id
        number
        title
        author {
          ... on User {
            id
            name
          }
        }
        createdAt
        comments(first: 30) {
          totalCount
          edges {
            cursor
            node {
              id
              author {
                avatarUrl
                ... on User {
                  id
                  email
                  name
                }
              }
              body
              createdAt
            }
          }
        }

        state
        body
        url
      }
    }
  }
`;