import { portfolioData, type ProjectItem } from "@/lib/portfolio-data";

type GithubProfile = {
  avatar_url: string;
  bio: string | null;
  followers: number;
  public_repos: number;
};

type GithubRepo = {
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  description: string | null;
  fork: boolean;
};

type RecentRepo = {
  name: string;
  htmlUrl: string;
  description: string | null;
  updatedAt: string;
};

export type GithubSnapshot = {
  avatarUrl: string | null;
  bio: string | null;
  totals: {
    repos: number;
    followers: number;
    stars: number;
  };
  featuredRepos: ProjectItem[];
  recentRepos: RecentRepo[];
};

const GITHUB_API_BASE = "https://api.github.com";

async function fetchGithub<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function mergeFeaturedProject(
  project: ProjectItem,
  repo: GithubRepo | undefined,
): ProjectItem {
  return {
    ...project,
    language: repo?.language ?? null,
    stars: typeof repo?.stargazers_count === "number" ? repo.stargazers_count : undefined,
  };
}

export async function getGithubSnapshot(): Promise<GithubSnapshot | null> {
  const [profile, repos] = await Promise.all([
    fetchGithub<GithubProfile>(`/users/${portfolioData.githubUsername}`),
    fetchGithub<GithubRepo[]>(
      `/users/${portfolioData.githubUsername}/repos?per_page=100&sort=updated`,
    ),
  ]);

  if (!profile || !repos) {
    return null;
  }

  const nonForkRepos = repos.filter((repo) => !repo.fork);
  const repoMap = new Map(nonForkRepos.map((repo) => [repo.name, repo]));

  return {
    avatarUrl: profile.avatar_url,
    bio: profile.bio,
    totals: {
      repos: profile.public_repos,
      followers: profile.followers,
      stars: nonForkRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    },
    featuredRepos: portfolioData.projects.map((project) =>
      mergeFeaturedProject(project, repoMap.get(project.repoName)),
    ),
    recentRepos: nonForkRepos.slice(0, 4).map((repo) => ({
      name: repo.name,
      htmlUrl: repo.html_url,
      description: repo.description,
      updatedAt: repo.updated_at,
    })),
  };
}
