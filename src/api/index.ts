import axios from "axios"

export const githubUserData = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })

    return response?.data
  } catch (error) {
    console.log(error)
    throw error
  }
}