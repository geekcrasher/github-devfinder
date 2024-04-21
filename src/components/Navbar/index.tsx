import { Button } from "@/components/ui/button"
import { Moon, Sun, SunMedium } from "lucide-react"
import { useState } from "react";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <nav className="border flex items-center justify-between">
        <section>
          <h2 className="font-bold text-2xl">devfinder</h2>
        </section>
        <Button className="flex items-center justify-center gap-2  font-space-mono font-medium" onClick={() => setDarkMode(!darkMode)}>
          <span className="text-[0.8rem]">{darkMode ? "LIGHT" : "DARK"}</span>
          {darkMode ? <SunMedium /> : <Moon />}
        </Button>
      </nav>
    </>
  );
}

export default Navbar;