import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar"
import { GithubUserProvider } from "@/context/GithubUserContext";

const Home = () => {
  return (
    <GithubUserProvider>
      <section className="w-[50rem] h-[30rem] font-space-mono text-[#f5f7ff] max-md:w-full flex flex-col gap-4 border m-4 ">
        <Navbar />
        <Searchbar />
      </section>
    </GithubUserProvider>
  );
}

export default Home;