import Home from "@/components/Home"
import { Toaster } from "./components/ui/sonner"

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f6f8ff] dark:bg-[#141c2f] p-4">
      <Home />
      <Toaster />
    </main>
  )
}

export default App
