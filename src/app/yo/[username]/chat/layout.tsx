import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
export default function ChatLayout({
    children,
    params, // will be a page or nested layout
  }: {
    children: React.ReactNode,
    params: { username: string }
  }) {
    return (
      <section>
        <div className="grid max-h-full h-4/5 lg:min-h-screen w-full lg:grid-cols-[280px_1fr]  ">
        <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
                <Link className="flex items-center gap-2 font-semibold" href={`/yo/${params.username}/chat`}>
                <MessageCircleIcon className="h-6 w-6" />
                <span className="">JMO</span>
                </Link>
                <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                <BellIcon className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <div className="px-4 mb-4">
                    <Input placeholder="Search contacts..." />
                </div>
                {/* <nav className="grid items-start px-4 text-sm font-medium pb-20 lg:pb-0">
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/mikejones`}
                >
                    <Avatar>
                    <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                    <div>Mike Jones</div>
                    <div className="text-xs text-gray-400">"Let's meet tomorrow at..."</div>
                    </div>
                    <Badge className="ml-auto">2</Badge>
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/janedoe`}
                >
                    <Avatar>
                    <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    Jane Doe
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/mikejones`}
                >
                    <Avatar>
                    <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    Mike Jones
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/johndoe`}
                >
                    <Avatar>
                    <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    John Doe
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/janedoe`}
                >
                    <Avatar>
                    <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    Jane Doe
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/mikejones`}
                >
                    <Avatar>
                    <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    Mike Jones
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/johndoe`}
                >
                    <Avatar>
                    <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    John Doe
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/janedoe`}
                >
                    <Avatar>
                    <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    Jane Doe
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/mikejones`}
                >
                    <Avatar>
                    <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    Mike Jones
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/johndoe`}
                >
                    <Avatar>
                    <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    John Doe
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/janedoe`}
                >
                    <Avatar>
                    <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    Jane Doe
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={`/yo/${params.username}/chat/mikejones`}
                >
                    <Avatar>
                    <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    Mike Jones
                </Link>
                </nav> */}
                <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/JohnDoe`}
              >
                <Avatar>
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div>John Doe</div>
                  <div className="text-xs text-gray-400">Hey, hows it going?...</div>
                </div>
                <Badge className="ml-auto">3</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/JaneDoe`}
              >
                <Avatar>
                  <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div>Jane Doe</div>
                  <div className="text-xs text-gray-400">Can you send me the file?...</div>
                </div>
                <Badge className="ml-auto">5</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/mikejones`}
              >
                <Avatar>
                  <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div>Mike Jones</div>
                  <div className="text-xs text-gray-400">Lets meet tomorrow at...</div>
                </div>
                <Badge className="ml-auto">2</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/JohnDoe`}
              >
                <Avatar>
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div>John Doe</div>
                  <div className="text-xs text-gray-400">Hey, hows it going?...</div>
                </div>
                <Badge className="ml-auto">3</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/JaneDoe`}
              >
                <Avatar>
                  <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div>Jane Doe</div>
                  <div className="text-xs text-gray-400">Can you send me the file?...</div>
                </div>
                <Badge className="ml-auto">5</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/mikejones`}
              >
                <Avatar>
                  <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div>Mike Jones</div>
                  <div className="text-xs text-gray-400">Lets meet tomorrow at...</div>
                </div>
                <Badge className="ml-auto">2</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/JohnDoe`}
              >
                <Avatar>
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div>John Doe</div>
                  <div className="text-xs text-gray-400">Hey, hows it going?...</div>
                </div>
                <Badge className="ml-auto">3</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/JaneDoe`}
              >
                <Avatar>
                  <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div>Jane Doe</div>
                  <div className="text-xs text-gray-400">Can you send me the file?...</div>
                </div>
                <Badge className="ml-auto">5</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/mikejones`}
              >
                <Avatar>
                  <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div>Mike Jones</div>
                  <div className="text-xs text-gray-400">Lets meet tomorrow at...</div>
                </div>
                <Badge className="ml-auto">2</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/JohnDoe`}
              >
                <Avatar>
                  <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div>John Doe</div>
                  <div className="text-xs text-gray-400">Hey, hows it going?...</div>
                </div>
                <Badge className="ml-auto">3</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/JaneDoe`}
              >
                <Avatar>
                  <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div>Jane Doe</div>
                  <div className="text-xs text-gray-400">Can you send me the file?...</div>
                </div>
                <Badge className="ml-auto">5</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={`/yo/${params.username}/chat/mikejones`}
              >
                <Avatar>
                  <AvatarImage alt="@mikejones" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div>Mike Jones</div>
                  <div className="text-xs text-gray-400">Lets meet tomorrow at...</div>
                </div>
                <Badge className="ml-auto">2</Badge>
              </Link>
            </nav>
            </div>
            </div>
        </div>


        <section >
          {children}
        </section>
        </div>
        
      </section>
      
    )
  }  


  interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
  }
  function MessageCircleIcon({ className, ...rest }: IconProps) {
    return (
      <svg
        {...rest}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      </svg>
    )
  }
  
  
  function BellIcon({ className, ...rest }: IconProps) {
    return (
      <svg
        {...rest}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    )
  }
  