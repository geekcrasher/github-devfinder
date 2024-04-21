import { useGitHubUser } from "@/context/GithubUserContext";

const GithubStats = () => {

  const { gitHubUser } = useGitHubUser()

  return (
    <>
      <article className="flex justify-around p-2 rounded-lg bg-[#141c2f]">
        <section>
          <p className="text-[0.8rem] text-gray-400">Repos</p>
          <h2 className="text-2xl font-semibold">{gitHubUser?.public_repos ?? 0}</h2>
        </section>
        <section>
          <p className="text-[0.8rem] text-gray-400">Followers</p>
          <h2 className="text-2xl font-semibold">{gitHubUser?.followers ?? 0}</h2>
        </section>
        <section>
          <p className="text-[0.8rem] text-gray-400">Following</p>
          <h2 className="text-2xl font-semibold">{gitHubUser?.following ?? 0}</h2>
        </section>
      </article>
    </>
  );
}

export default GithubStats;