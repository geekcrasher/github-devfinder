import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useGitHubUser } from "@/context/GithubUserContext";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const Searchbar = () => {

  const { setSearchUser } = useGitHubUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    }
  })

  const onSubmit = (value: z.infer<typeof formSchema>): void => {
    setSearchUser(value?.username)
    form.reset()
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white dark:bg-[#1e2a47] shadow-lg rounded-lg p-2">
          <div className="flex justify-around items-center gap-2 w-full h-10">
            <Search color="#0079ff" className="ml-2 sm:ml-6 h-6 w-6" />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Search GitHub username..."
                      className="bg-transparent h-10 border-0 text-sm xl:text-[0.95rem] text-slate-700 dark:text-[#f5f7ff] placeholder:text-slate-400 dark:placeholder:text-slate-300"
                      autoComplete="off"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#0079ff] hover:bg-[#0077ffe3]">Search</Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default Searchbar;