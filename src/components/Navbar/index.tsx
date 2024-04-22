import { Button } from "@/components/ui/button"
import { Moon, SunMedium } from "lucide-react"
import { useTheme } from "@/context/ThemContext";

const Navbar = () => {

  const { darkMode, handleChangeTheme } = useTheme()

  return (
    <>
      <nav className="flex items-center justify-between">
        <>
          <h2 className="font-bold text-2xl text-slate-900 dark:text-white">devfinder</h2>
        </>
        <Button
          className="flex items-center justify-center gap-2 p-0 font-space-mono font-medium dark:text-[#f5f7ff] dark:bg-transparent bg-transparent"
          onClick={handleChangeTheme}
        >
          <span className="text-[0.8rem] text-[#697c9a] dark:text-white">{darkMode ? "LIGHT" : "DARK"}</span>
          {darkMode ?
            <SunMedium className="text-[#697c9a] dark:text-white" /> :
            <Moon className="text-[#697c9a] dark:text-white" />
          }
        </Button>
      </nav>
    </>
  );
}

export default Navbar;