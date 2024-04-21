import { GithubUserProvider } from "@/context/GithubUserContext";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar"
import GithubProfileCard from "@/components/GithubProfileCard";

const Home = () => {
  return (
    <GithubUserProvider>
      <section className="w-[45rem] h-[32rem] font-space-mono text-[#f5f7ff] max-md:w-full flex flex-col gap-6 m-4 ">
        <Navbar />
        <Searchbar />
        <GithubProfileCard />
      </section>
    </GithubUserProvider>
  );
}

export default Home;