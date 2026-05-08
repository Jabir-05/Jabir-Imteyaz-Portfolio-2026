import { PortfolioPage } from "@/components/portfolio-page";
import { getGithubSnapshot } from "@/lib/github";

export default async function HomePage() {
  const github = await getGithubSnapshot();

  return <PortfolioPage github={github} />;
}
