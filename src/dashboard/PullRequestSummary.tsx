import React from "react";

interface Repo {
  name: string;
  url: string;
}

export interface PullRequest {
  repo: Repo;
  author: string;
  title: string;
  url: string;
}

export const PullRequestSummary: React.FC<PullRequest> = (
  props: PullRequest
) => (
  <>
    <a href={props.repo.url}>{props.repo.name}</a>: [{props.author}]{" "}
    <a href={props.url}>{props.title}</a>
  </>
);
