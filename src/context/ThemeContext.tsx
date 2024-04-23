import React, { createContext, useContext, useState, useEffect } from 'react'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme,
  darkMode: boolean,
  handleChangeTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
  return useContext(ThemeContext) as ThemeContextType
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {

  const [darkMode, setDarkMode] = useState(true)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleChangeTheme = (): void => {
    setDarkMode(!darkMode)
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, darkMode, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
