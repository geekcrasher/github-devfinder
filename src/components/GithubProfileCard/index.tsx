import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { useGitHubUser } from "@/context/GithubUserContext";
import GithubStats from "./GithubStats";
import MetaData from "./MetaData";


const GithubProfileCard = () => {

  const { gitHubUser } = useGitHubUser()

  const date = gitHubUser ? new Date(gitHubUser.created_at) : null;

  const formatedDate = date ? date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }) : null;

  return (
    <>
      <section className="w-full h-fit bg-white dark:bg-[#1e2a47] shadow-md rounded-lg p-8">
        <a href={`${gitHubUser?.html_url}`} target="_blank">
          <section className="flex gap-10">
            <Avatar className="w-24 h-24 sm:w-28 sm:h-28">
              <AvatarImage src={`${gitHubUser?.avatar_url}`} />
              <AvatarFallback>GH</AvatarFallback>
            </Avatar>
            <section className="w-full space-y-8">
              <article className=" w-auto space-y-8">
                <section className="md:flex md:justify-between">
                  <div className="space-y-2">
                    <h1 className="text-xl text-slate-900 dark:text-[#f5f7ff] sm:text-2xl font-semibold">{gitHubUser?.name}</h1>
                    <p className="text- text-[#0079ff]">@{gitHubUser?.login}</p>
                  </div>
                  <p className="mt-4 md:mt-2 text-[0.8rem] text-gray-400 dark:text-slate-300">Joined {formatedDate}</p>
                </section>
              </article>
            </section>
          </section>
          <section className="flex flex-col md:ml-[9.5rem] space-y-8 mt-6 md:-mt-4">
            <blockquote className="text-sm text-gray-400">{gitHubUser?.bio ?? <span>This profile has no bio </span>}</blockquote>
            <GithubStats />
            <MetaData />
          </section>
        </a>
      </section>
    </>
  );
}

export default GithubProfileCard;