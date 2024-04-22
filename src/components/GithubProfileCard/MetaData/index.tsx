import { useGitHubUser } from "@/context/GithubUserContext";
import { Building2, Link, MapPin, Twitter } from "lucide-react";
import Info from "./Info";

const MetaData = () => {

  const { gitHubUser } = useGitHubUser()

  return (
    <>
      <article className="sm:flex gap-12">
        <section className="space-y-4">
          <Info detail={gitHubUser?.location}>
            <MapPin size={20} strokeWidth={3} className="text-[#3D6B9B] dark:text-[#f5f7ff]" />
          </Info>
          <Info detail={gitHubUser?.blog}>
            <Link size={20} strokeWidth={3} className="text-[#3D6B9B] dark:text-[#f5f7ff]" />
          </Info>
        </section>
        <section className="mt-4 sm:mt-0 space-y-4">
          <Info detail={gitHubUser?.twitter_username}>
            <Twitter size={20} strokeWidth={3} className="text-gray-400" />
          </Info>
          <Info detail={gitHubUser?.company}>
            <Building2 size={20} strokeWidth={3} className="text-[#3D6B9B] dark:text-[#f5f7ff]" />
          </Info>
        </section>
      </article>
    </>
  );
}

export default MetaData;