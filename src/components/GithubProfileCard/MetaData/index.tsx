import { useGitHubUser } from "@/context/GithubUserContext";
import { Building2, Link, MapPin, Twitter } from "lucide-react";

const MetaData = () => {

  const { gitHubUser } = useGitHubUser()

  return (
    <>
      <article className="flex gap-12">
        <section className="space-y-4">
          <section className="flex items-center gap-4">
            <MapPin size={20} strokeWidth={3} />
            <span className="text-gray-300 text-[0.8rem]">{gitHubUser?.location ?? 'Not Available'}</span>
          </section>
          <section className="flex items-center gap-4">
            <Link size={20} strokeWidth={3} />
            <span className="text-gray-300 text-[0.8rem]">{gitHubUser?.blog ?? 'Not Available'}</span>
          </section>
        </section>
        <section className="space-y-4">
          <section className="flex items-center gap-4">
            <Twitter size={20} strokeWidth={3} className="text-gray-400" />
            <span className="text-gray-300 text-[0.8rem]">{gitHubUser?.twitter_username ?? 'Not Available'}</span>
          </section>
          <section className="flex items-center gap-4">
            <Building2 size={20} strokeWidth={3} />
            <span className="text-gray-300 text-[0.8rem]">{gitHubUser?.company ?? 'Not Available'}</span>
          </section>
        </section>
      </article>
    </>
  );
}

export default MetaData;