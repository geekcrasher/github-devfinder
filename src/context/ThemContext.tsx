import React, { createContext, useContext, useState, useEffect } from 'react'

type ThemContextProviderProps = {
  children: React.ReactNode
}

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme,
  darkMode: boolean,
  handleChangeTheme: () => void
}

const ThemContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
  return useContext(ThemContext) as ThemeContextType
}

export const ThemContextProvider = ({ children }: ThemContextProviderProps) => {

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
    <ThemContext.Provider value={{ theme, darkMode, handleChangeTheme }}>
      {children}
    </ThemContext.Provider>
  )
}
