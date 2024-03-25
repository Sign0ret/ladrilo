'use client'
import React from 'react';
import { useState } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Tasks_bar } from '@/components/component/tasks_bar';
export default function YoChatSpecific( { params }: {
  params: { username: string; chat: string }
} ) {
  const [openTasks, setOpenTasks] = useState<boolean>(false);
  return (
    <section>
        <div className="hidden lg:flex flex-col min-h-screen h-screen">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
                <MessageCircleIcon className="h-6 w-6" />
                <span className="sr-only">Home</span>
            </Link>

            <div className="w-full flex-1">
                <Sheet>
                    <SheetTrigger>
                    <div className="flex items-center gap-4">

                        <Avatar>
                            <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="font-semibold">{params.chat}</span>
                            <span className="text-sm text-gray-500 mr-auto">Online</span>
                        </div>
                        </div>
                        {/* <PencilIcon className="h-4 w-4" /> */}
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetDescription>
                            <p>ajustes</p>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            {openTasks ? (
                <Button className="hidden lg:flex ml-2 h-8 w-8" size="icon" variant="outline" onClick={() => setOpenTasks(false)}>
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">Hide tasksbar</span>
                </Button>
            ) : (
                <Button className="hidden lg:flex ml-2 h-8 w-8" size="icon" variant="outline" onClick={() => setOpenTasks(true)}>
                    <TextIcon className="h-4 w-4" />
                    <span className="sr-only">open tasks</span>
                </Button>
            )}
            </header>
            {openTasks ? (
                <>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <section className='flex flex-row '>
                        <div className="w-4/5">
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
                        <section className='w-1/5'>
                            <Tasks_bar />
                        </section>
                    </section>
                        <div className="mt-auto">
                            <form className="flex items-center gap-4">
                            <Input className="flex-1" placeholder="Type a message..." />
                            <Button variant="outline">Send</Button>
                            </form>
                        </div>
                    </main>
                    
                </>
                    
            ) : (
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="">
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
            )}
            
        </div>
        {/* mobile */}
        <div className="flex lg:hidden flex-col fixed inset-0 overflow-y-auto min-h-screen h-screen bg-background">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <Link className="lg:hidden" href={`/yo/${params.username}/chat`}>
                    <MessageCircleIcon className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                </Link>
                <div className="w-full flex-1">
                <Sheet>
                    <SheetTrigger>
                    <div className="flex items-center gap-4">

                        <Avatar>
                            <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="font-semibold">{params.chat}</span>
                            <span className="text-sm text-gray-500 mr-auto">Online</span>
                        </div>
                        </div>
                        {/* <PencilIcon className="h-4 w-4" /> */}
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetDescription>
                            <p>ajustes</p>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <Sheet>
                <SheetTrigger>
                    {/* <Button className="hidden lg:flex ml-2 h-8 w-8" size="icon" variant="outline"> */}
                        <TextIcon className="h-4 w-4" />
                        <span className="sr-only">open tasks</span>
                    {/* </Button> */}
                </SheetTrigger>
                <SheetContent>
                    <Tasks_bar />
                    {/* <SheetHeader>
                    <SheetDescription>
                        <p>ajustes</p>
                    </SheetDescription>
                    </SheetHeader> */}
                </SheetContent>
            </Sheet>
            
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="">
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
  

function PencilIcon({ className, ...rest }: IconProps) {
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }

  function TextIcon({ className, ...rest }: IconProps) {
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
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
      </svg>
    )
  }

  function XIcon({ className, ...rest }: IconProps) {
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }