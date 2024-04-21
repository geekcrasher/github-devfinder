import React, { createContext, useState, useEffect, useContext } from "react";
import { githubUserData } from "@/api";

type GitHubUserContextProviderProps = {
  children: React.ReactNode
}

type GitHubUserContextType = {
  gitHubUser: null,
  setSearchUser: React.Dispatch<React.SetStateAction<string>>
}

const GitHubUserContext = createContext<GitHubUserContextType | null>(null)

export const useGitHubUser = () => {
  return useContext(GitHubUserContext) as GitHubUserContextType
}

export const GithubUserProvider = ({ children }: GitHubUserContextProviderProps) => {

  const [gitHubUser, setGitHubUser] = useState(null)
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
