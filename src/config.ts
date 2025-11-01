import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://shusite.xyz/", // your site url
  title: "Shu's Blog",
  slogan: "Alles zum Thema Computer und IT",
  description: " ",
  social: {
    github: "https://github.com/shu440", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/timon-b%C3%B6hm-506bb937a/", // leave empty if you don't want to show the linkedin
    email: "", // leave empty if you don't want to show the email
    rss: false, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
