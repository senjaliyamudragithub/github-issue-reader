import { gql } from "@apollo/client";
export const REPOSITORY_ISSUE_LIST = gql`
  query SearchRepo($after: String, $state: [IssueState!]) {
    repository(name: "react", owner: "facebook") {
      id
      openedCount: issues(states: [OPEN]) {
        totalCount
      }
      closedCount: issues(states: [CLOSED]) {
        totalCount
      }
      total: issues {
        totalCount
      }
      issues(
        after: $after
        first: 10
        filterBy: { states: $state }
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
        edges {
          cursor
          node {
            comments {
              totalCount
            }
            author {
              avatarUrl(size: 10)
              ... on User {
                id
                name
                databaseId
              }
            }
            createdAt
            title
            state
            updatedAt
            id
            number
          }
        }
      }
    }
  }
`;
