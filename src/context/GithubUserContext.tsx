import React, { createContext, useState, useEffect, useContext } from "react";
import { githubUserData } from "@/api";
import { toast } from "sonner"

type GitHubUserContextProviderProps = {
  children: React.ReactNode
}

type GithubUser = {
  login: string,
  name: string,
  avatar_url?: string,
  bio?: string,
  created_at: string,
  public_repos?: number,
  followers?: number,
  following?: number,
  location?: string,
  company?: string,
  twitter_username?: string,
  blog?: string
}

type GitHubUserContextType = {
  gitHubUser: GithubUser,
  setSearchUser: React.Dispatch<React.SetStateAction<string>>
}

const GitHubUserContext = createContext<GitHubUserContextType | null>(null)

export const useGitHubUser = () => {
  return useContext(GitHubUserContext) as GitHubUserContextType
}

export const GithubUserProvider = ({ children }: GitHubUserContextProviderProps) => {

  const [gitHubUser, setGitHubUser] = useState<GithubUser | null>(null)
  const [searchUser, setSearchUser] = useState("octocat")

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await githubUserData(searchUser)
        setGitHubUser(response)
      } catch (error) {
        console.log(error)
        toast("Github user not found", {
          action: {
            label: "Try again",
            onClick: () => console.log("Try again"),
          },
        })
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
