type Comments = {
  created_at: string;
  id: string;
  post_id: number;
  text: string;
  username: string;
};

type Post = {
  body: string;
  created_at: string;
  id: number;
  image: string;
  subreddit_id: number;
  title: string;
  username: string;
  vote: Vote[];
  comments: Comments[];
  subreddit: Subreddit[];
};

type Subreddit = {
  created_at: string;
  id: number;
  topic: string;
};

type Vote = {
  created_at: string;
  id: number;
  post_id: number;
  upvote: boolean;
  username: string;
};
