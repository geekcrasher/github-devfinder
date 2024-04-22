import { useGitHubUser } from "@/context/GithubUserContext";
import InfoPanel from "./InfoPanel";

const GithubStats = () => {

  const { gitHubUser } = useGitHubUser()

  return (
    <>
      <article className="flex justify-around p-2 rounded-lg bg-[#f6f8ff] dark:bg-[#141c2f]">
        <InfoPanel title="Repos" metrics={gitHubUser?.public_repos} />
        <InfoPanel title="Followers" metrics={gitHubUser?.followers} />
        <InfoPanel title="Following" metrics={gitHubUser?.following} />
      </article>
    </>
  );
}

export default GithubStats;