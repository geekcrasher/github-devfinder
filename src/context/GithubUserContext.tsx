import React, { createContext, useState, useEffect, useContext } from "react";
import { githubUserData } from "@/api";

type GitHubUserContextProviderProps = {
  children: React.ReactNode
}

type GitHubUserContextType<T> = {
  gitHubUser: T,
  setSearchUser: React.Dispatch<React.SetStateAction<string>>
}

const GitHubUserContext = createContext<GitHubUserContextType<unknown> | null>(null)

export const useGitHubUser = <T,>() => {
  return useContext(GitHubUserContext) as GitHubUserContextType<T>
}

export const GithubUserProvider = ({ children }: GitHubUserContextProviderProps) => {

  const [gitHubUser, setGitHubUser] = useState<unknown | null>(null)
  const [searchUser, setSearchUser] = useState("octocat")

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await githubUserData(searchUser)
        setGitHubUser(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGitHubUser()
  }, [searchUser])

  return (
    <GitHubUserContext.Provider value={{ gitHubUser, setSearchUser }}>
      {children}
    </GitHubUserContext.Provider>
  );
}
