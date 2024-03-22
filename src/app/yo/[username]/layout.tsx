import { ModeToggle } from "@/components/component/mode_toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UsernameLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="h-screen w-1/5 p-5">
        <aside>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>obras</AvatarFallback>
        </Avatar>

         <ModeToggle />
        </aside>
        {children}
      </section>
    )
  }