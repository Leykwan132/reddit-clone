import { useQuery } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed.tsx";
import Header from "../components/Header.tsx";
import PostBox from "../components/PostBox.tsx";
import { GET_SUBREDDIT_WITH_LIMIT } from "../graphql/queries.ts";
import SubredditRow from "../components/SubredditRow.tsx";
export default function Home() {
  const { data } = useQuery(GET_SUBREDDIT_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });
  const subreddits = data?.getSubredditListLimit;
  return (
    <div className="max-w-5xl mx-auto my-7">
      <Head>
        <title>Reddit clone 2.0</title>
      </Head>
      {/* PostBox */}
      <PostBox />
      <div className="flex">
        <Feed />
        <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          <div>
            {subreddits?.map((subreddit, i) => (
              <SubredditRow
                key={subreddit.id}
                topic={subreddit.topic}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
