import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { useGitHubUser } from "@/context/GithubUserContext";


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
        <section className="flex items-center justify-center gap-8">
          <Avatar className="w-28 h-28">
            <AvatarImage src={`${gitHubUser?.avatar_url}`} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <section className="w-full">
            <article className=" w-auto space-y-8">
              <section className="flex justify-between">
                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold">{gitHubUser?.name}</h1>
                  <p className="text-[#0079ff]">@{gitHubUser?.login}</p>
                </div>
                <p className="mt-2 text-sm text-slate-300">Joined {formatedDate}</p>
              </section>
              <blockquote className="text-sm text-gray-400">{gitHubUser?.bio ?? <span>This profile has no bio </span>}</blockquote>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

export default GithubProfileCard;