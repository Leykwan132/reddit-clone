import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS_BY_TOPIC } from "../graphql/queries";
import { GET_QUERY } from "../graphql/queries";
import Post from "./Post";

type Props = {
  topic?: string;
};
const Feed = ({ topic }: Props) => {
  const { loading, error, data } = useQuery(GET_QUERY);

  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic;
  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};

export default Feed;
