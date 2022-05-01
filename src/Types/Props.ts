export type profilList = {
  login?: string;
  id?: Number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: Boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: string;
  bio?: string;
  twitter_username?: string;
  public_repos?: Number;
  public_gists?: Number;
  followers?: Number;
  following?: Number;
  created_at?: string;
  updated_at?: string;
};

export type repoList = {
  full_name?: string;
  html_url?: string;
  stargazers_count?: number;
  watchers?: number;
  open_issues_count?: number;
  languages_url?: string;
};

export type userList = {
  email?: String;
  image?: String;
  name?: String;
};

export type sessionList = { expires?: string; user?: userList };

export type gitDataList = [object, object];
