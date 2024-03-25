import React from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
export default function YoChatSpecific( { params }: {
  params: { username: string; chat: string }
} ) {
 
  return (
    <section>
        <div className="hidden lg:flex flex-col min-h-screen h-screen">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
                <MessageCircleIcon className="h-6 w-6" />
                <span className="sr-only">Home</span>
            </Link>
            <div className="w-full flex-1">
                <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-semibold">Jane Doe</span>
                    <span className="text-sm text-gray-500">Online</span>
                </div>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button
                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                    size="icon"
                    variant="ghost"
                >
                    <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                    }}
                    width="32"
                    />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center">
                <h1 className="font-semibold text-lg md:text-2xl">Chat with {params.chat}</h1>
            </div>
            <div className="border shadow-sm rounded-lg">
                <div className="p-4">
                <div className="flex items-start gap-4">
                    <Avatar>
                    <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                    <span className="font-semibold">John Doe</span>
                    <span className="text-sm text-gray-500">Hello Jane!</span>
                    </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                    <Avatar>
                    <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                    <span className="font-semibold">Jane Doe</span>
                    <span className="text-sm text-gray-500">Hi John!</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="mt-auto">
                <form className="flex items-center gap-4">
                <Input className="flex-1" placeholder="Type a message..." />
                <Button variant="outline">Send</Button>
                </form>
            </div>
            </main>
        </div>
        {/* mobile */}
        <div className="flex lg:hidden flex-col fixed inset-0 overflow-y-auto min-h-screen h-screen bg-background">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <Link className="lg:hidden" href={`/yo/${params.username}/chat`}>
                    <MessageCircleIcon className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                </Link>
                <div className="w-full flex-1">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="font-semibold">Jane Doe</span>
                            <span className="text-sm text-gray-500">Online</span>
                        </div>
                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                            size="icon"
                            variant="ghost"
                        >
                            <img
                                alt="Avatar"
                                className="rounded-full"
                                height="32"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="flex items-center">
                    <h1 className="font-semibold text-lg md:text-2xl">Chat with {params.chat}</h1>
                </div>
                <div className="border shadow-sm rounded-lg">
                    <div className="p-4">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="font-semibold">John Doe</span>
                                <span className="text-sm text-gray-500">Hello Jane!</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mt-4">
                            <Avatar>
                                <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="font-semibold">Jane Doe</span>
                                <span className="text-sm text-gray-500">Hi John!</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-auto">
                    <form className="flex items-center gap-4">
                        <Input className="flex-1" placeholder="Type a message..." />
                        <Button variant="outline">Send</Button>
                    </form>
                </div>
            </main>
        </div>

        {/* <div className='lg:hidden'>
             <Drawer>
                <DrawerTrigger>Open</DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div> */}
        

    </section>
    
  );
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
  