import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComment(post_id: $post_id, text: $text, username: $username) {
      created_at
      id
      post_id
      text
      username
    }
  }
`;
export const ADD_VOTE = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $upvote: Boolean!) {
    insertVote(post_id: $post_id, username: $username, upvote: $upvote) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`;

// call this mutation from frontend with useMutation
export const ADD_POST = gql`
  mutation MyMutation(
    # GraphQL argument
    # ! means non-nullable / required
    $body: String!
    $image: String!
    $subreddit_id: ID!
    $title: String!
    $username: String!
  ) {
    # execute graphql query that we had.
    insertPost(
      body: $body
      image: $image
      subreddit_id: $subreddit_id
      title: $title
      username: $username
    ) {
      # what is returned
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`;

export const ADD_SUBREDDIT = gql`
  mutation MyMutation($topic: String!) {
    # call the mutation defined in service.
    insertSubreddit(topic: $topic) {
      # returned data.
      id
      topic
      created_at
    }
  }
`;
