import { gql } from "@apollo/client";

export const GET_VOTE_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      upvote
      created_at
      id
      post_id
      username
    }
  }
`;

export const GET_SUBREDDIT_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      created_at
      id
      topic
    }
  }
`;
export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_QUERY = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      subreddit_id
      title
      id
      image
      subreddit {
        created_at
        id
        topic
      }
      votes {
        upvote
        created_at
        id
        post_id
        username
      }
      comments {
        created_at
      }
    }
  }
`;

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      created_at
      subreddit_id
      id
      title
      image
      subreddit_id
      subreddit {
        created_at
        id
        topic
      }
      votes {
        upvote
        created_at
        id
        post_id
        username
      }
      comments {
        created_at
        id
        post_id
        text
        username
      }
    }
  }
`;

export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      body
      created_at
      subreddit_id
      id
      title
      image
      subreddit_id
      subreddit {
        created_at
        id
        topic
      }
      votes {
        upvote
        created_at
        id
        post_id
        username
      }
      comments {
        created_at
        id
        post_id
        text
        username
      }
    }
  }
`;
