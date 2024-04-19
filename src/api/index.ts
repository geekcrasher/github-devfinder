import axios from "axios"

const githubToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN

export const githubUser = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${githubToken}`
      }
    })

    return response?.data
  } catch (error) {
    console.log(error)
    throw error
  }
}