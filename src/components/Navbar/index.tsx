import { Button } from "@/components/ui/button"
import { Sun, SunMedium } from "lucide-react"

const Navbar = () => {
  return (
    <>
      <nav className="border flex items-center justify-between">
        <section>
          <h2 className="font-bold text-2xl">devFinder</h2>
        </section>
        <Button className="font-space-mono font-medium gap-3">
          <span className="text-[0.78rem]">LIGHT</span>
          <SunMedium />
        </Button>
      </nav>
    </>
  );
}

export default Navbar;