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

  const date = new Date(gitHubUser?.created_at)

  const formatedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <section className="w-full h-full bg-[#1e2a47] rounded-lg p-8">
        <section className="flex gap-10">
          <Avatar className="w-28 h-28">
            <AvatarImage src={`${gitHubUser?.avatar_url}`} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <section className="w-full space-y-8">
            <article className=" w-auto space-y-8">
              <section className="flex justify-between">
                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold">{gitHubUser?.name}</h1>
                  <p className="text-[#0079ff]">@{gitHubUser?.login}</p>
                </div>
                <p className="mt-2 text-[0.825rem] text-slate-300">Joined {formatedDate}</p>
              </section>
              <blockquote className="text-sm text-gray-400">{gitHubUser?.bio ?? <span>This profile has no bio </span>}</blockquote>
            </article>
            <GithubStats />
            <MetaData />
          </section>
        </section>
      </section>
    </>
  );
}

export default GithubProfileCard;