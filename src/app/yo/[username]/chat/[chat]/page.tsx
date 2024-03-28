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
import { TextIcon, MessageCircleIcon, PencilIcon, XIcon } from '@/components/icons';
export default function YoChatSpecific( { params }: {
  params: { username: string; chat: string }
} ) {
  const [openTasks, setOpenTasks] = useState<boolean>(false);
  const [upInput, setUpInput] = useState<boolean>(false);
  const messages = [
    {
      username: "adolfo",
      text: "Sure, I'd be happy to help.Sure, I'd be happy to help. Could you please provide your order number? Sure, I'd be happy to help. Could you please provide your order number?",
      avatarSrc: "/placeholder-user.jpg",
      avatarFallback: "JD",
      hour: "10",
      minute: "15"
    },
    {
      username: "User",
      text: "I need help with my order.",
      avatarSrc: "/placeholder-user.jpg",
      avatarFallback: "U",
      hour: "10",
      minute: "20"
    },
    {
      username: "John Doe",
      text: "Sure, I'd be happy to help.Sure, I'd be happy to help. Could you please provide your order number? Sure, I'd be happy to help. Could you please provide your order number?",
      avatarSrc: "/placeholder-user.jpg",
      avatarFallback: "JD",
      hour: "10",
      minute: "25"
    },
    {
        username: "adolfo",
        text: "Hi there! How can I assist you today?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "15"
      },
      {
        username: "User",
        text: "I need help with my order.",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "U",
        hour: "10",
        minute: "20"
      },
      {
        username: "John Doe",
        text: "Sure, I'd be happy to help. Could you please provide your order number?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "25"
      },
      {
        username: "adolfo",
        text: "Hi there! How can I assist you today?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "15"
      },
      {
        username: "User",
        text: "I need help with my order.",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "U",
        hour: "10",
        minute: "20"
      },
      {
        username: "John Doe",
        text: "Sure, I'd be happy to help. Could you please provide your order number?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "25"
      },
      {
        username: "adolfo",
        text: "Hi there! How can I assist you today?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "15"
      },
      {
        username: "User",
        text: "I need help with my order.",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "U",
        hour: "10",
        minute: "20"
      },
      {
        username: "John Doe",
        text: "Sure, I'd be happy to help. Could you please provide your order number?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "25"
      },
      {
        username: "adolfo",
        text: "Hi there! How can I assist you today?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "15"
      },
      {
        username: "User",
        text: "I need help with my order.",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "U",
        hour: "10",
        minute: "20"
      },
      {
        username: "John Doe",
        text: "Sure, I'd be happy to help. Could you please provide your order number?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "25"
      },
      {
        username: "adolfo",
        text: "Hi there! How can I assist you today?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "15"
      },
      {
        username: "User",
        text: "I need help with my order.",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "U",
        hour: "10",
        minute: "20"
      },
      {
        username: "John Doe",
        text: "Sure, I'd be happy to help. Could you please provide your order number?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "25"
      },
      {
        username: "adolfo",
        text: "Hi there! How can I assist you today?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "15"
      },
      {
        username: "User",
        text: "I need help with my order.",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "U",
        hour: "10",
        minute: "20"
      },
      {
        username: "John Doe",
        text: "Sure, I'd be happy to help. Could you please provide your order number?",
        avatarSrc: "/placeholder-user.jpg",
        avatarFallback: "JD",
        hour: "10",
        minute: "25"
      },
  ];
  return (
    <section className='z-50'>
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
            <Button className="hidden lg:flex ml-2 h-8 w-8" size="icon" variant="outline" onClick={() => setUpInput(!upInput)}>
                <PencilIcon className="h-4 w-4"/>
                <span className="sr-only">Move up</span>
            </Button>
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
                <main className="flex flex-1 flex-col gap-4 p-4 pr-0 mr-0 md:p-6  md:pr-0 max-h-full overflow-y-hidden">
                    <section className='flex flex-row overflow-y-hidden'>
                        <div className="w-4/5 p-4 overflow-y-auto no-scrollbar">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex items-end ${message.username === params.username ? 'justify-end' : ''} space-x-2 space-y-2`}>
                                {message.username !== params.username && (
                                    <Avatar className="w-8 h-8">
                                    <AvatarImage alt={message.username} src={message.avatarSrc} />
                                    <AvatarFallback>{message.avatarFallback}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`max-w-[460px] px-4 my-2 py-2 rounded-${message.username === params.username ? 'l' : 'r'}-lg rounded-t-lg ${message.username === params.username ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                    <div>
                                    <span className="text-gray-500 mr-1">{message.hour}:{message.minute}</span>
                                    {message.text}
                                    </div>
                                    {message.username !== params.username && (
                                    <div className={`absolute bottom-0 left-0 ml-3 w-0 h-0 ${message.username === params.username ? 'border-x-8 border-x-transparent border-t-8 border-t-blue-500' : 'border-x-8 border-x-transparent border-t-8 border-t-gray-200 dark:border-t-gray-700'}`} />
                                    )}
                                </div>
                                {message.username === params.username && (
                                    <Avatar className="w-8 h-8">
                                    <AvatarImage alt={message.username} src={message.avatarSrc} />
                                    <AvatarFallback>{message.avatarFallback}</AvatarFallback>
                                    </Avatar>
                                )}
                                </div>
                            ))}
                        </div>
                        <section className='w-[280px] border ml-auto'>
                            <Tasks_bar />
                        </section>
                    </section>
                      <div className={`mt-auto pr-6 ${upInput ? 'mb-20' : 'mb-0'}`}>
                          <form className="flex items-center gap-4">
                          <Input className="flex-1" placeholder="Type a message..." />
                          <Button variant="outline">Send</Button>
                          </form>
                      </div>
                    </main>
                    
                </>
                    
            ) : (
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 max-h-full overflow-y-hidden">
                     <div className='p-4 overflow-y-auto no-scrollbar'>
                        {messages.map((message, index) => (
                            <div key={index} className={`flex items-end ${message.username === params.username ? 'justify-end' : ''} space-x-2 space-y-2 `}>
                            {message.username !== params.username && (
                                <Avatar className="w-8 h-8">
                                <AvatarImage alt={message.username} src={message.avatarSrc} />
                                <AvatarFallback>{message.avatarFallback}</AvatarFallback>
                                </Avatar>
                            )}
                            <div className={`px-4 max-w-[600px] my-2 py-2 rounded-${message.username === params.username ? 'l' : 'r'}-lg rounded-t-lg ${message.username === params.username ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'} `}>
                                <div>
                                <span className="text-gray-500 mr-1">{message.hour}:{message.minute}</span>
                                {message.text}
                                </div>
                                {message.username !== params.username && (
                                <div className={`absolute bottom-0 left-0 ml-3 w-0 h-0 ${message.username === params.username ? 'border-x-8 border-x-transparent border-t-8 border-t-blue-500' : 'border-x-8 border-x-transparent border-t-8 border-t-gray-200 dark:border-t-gray-700'}`} />
                                )}
                            </div>
                            {message.username === params.username && (
                                <Avatar className="w-8 h-8">
                                <AvatarImage alt={message.username} src={message.avatarSrc} />
                                <AvatarFallback>{message.avatarFallback}</AvatarFallback>
                                </Avatar>
                            )}
                            </div>
                        ))}
                        {/* <div className="py-20 relative flex flex-grow flex-col px-12 justify-end">
                            <div
                                className="ml-auto rounded-lg rounded-tr-none my-1 p-2 text-sm bg-green-300 flex flex-col relative speech-bubble-right">
                                <p>Do you still have that car from gone in 60 seconds? Can I borrow it please.</p>
                                <p className="text-gray-600 text-xs text-right leading-none">8:00 AM</p>
                            </div>
                            <div className="mr-auto rounded-lg rounded-tl-none my-1 p-2 text-sm bg-white flex flex-col relative speech-bubble-left">
                                <p>Yeah dude for sure</p>
                                <p className="text-gray-600 text-xs text-right leading-none">8:45 AM</p>
                            </div>
                            <div
                                className="ml-auto rounded-lg rounded-tr-none my-1 p-2 text-sm bg-green-300 flex flex-col relative speech-bubble-right">
                                <p>Dude WTF was up with that plane you were on!!!?</p>
                                <p className="text-gray-600 text-xs text-right leading-none">8:00 AM</p>
                            </div>
                            <div className="mr-auto rounded-lg rounded-tl-none my-1 p-2 text-sm bg-white flex flex-col relative speech-bubble-left">
                                <p>LOL I Know right </p>
                                <p className="text-gray-600 text-xs text-right leading-none">8:45 AM</p>
                            </div>
                            <div
                                className="ml-auto rounded-lg rounded-tr-none my-1 p-2 text-sm bg-green-300 flex flex-col relative speech-bubble-right">
                                <p >Hey man what should we do this weekend?</p>
                                <p className="text-gray-600 text-xs text-right leading-none">8:00 AM</p>
                            </div>
                            <div className="mr-auto rounded-lg rounded-tl-none my-1 p-2 text-sm bg-white flex flex-col relative speech-bubble-left">
                                <p>Steal the declaration of independence?...</p>
                                <p className="text-gray-600 text-xs text-right leading-none">8:45 AM</p>
                            </div>
                        </div> */}
                      </div>
                    <div className={`mt-auto ${upInput ? 'mb-20' : 'mb-0'}`}>
                        <form className="flex items-center gap-4">
                        <Input className="flex-1" placeholder="Type a message..." />
                        <Button variant="outline">Send</Button>
                        </form>
                    </div>
                    </main>
            )}
            
        </div>
        {/* mobile */}
        <div className="flex lg:hidden flex-col fixed inset-0 overflow-y-auto min-h-screen h-screen bg-background z-40">
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
            <Button className="flex lg:hidden ml-2 h-8 w-8" size="icon" variant="outline" onClick={() => setUpInput(!upInput)}>
                <PencilIcon className="h-4 w-4"/>
                <span className="sr-only">Move up</span>
            </Button>
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
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 max-h-full overflow-y-hidden">
                     <div className='p-4 overflow-y-auto no-scrollbar'>
                        {messages.map((message, index) => (
                                <div key={index} className={`flex items-end ${message.username === params.username ? 'justify-end' : ''} space-x-2 space-y-2`}>
                                {message.username !== params.username && (
                                    <Avatar className="w-8 h-8">
                                    <AvatarImage alt={message.username} src={message.avatarSrc} />
                                    <AvatarFallback>{message.avatarFallback}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`max-w-[280px] px-4 py-2 my-2 rounded-${message.username === params.username ? 'l' : 'r'}-lg rounded-t-lg ${message.username === params.username ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                    <div>
                                    <span className="text-gray-500 mr-1">{message.hour}:{message.minute}</span>
                                    {message.text}
                                    </div>
                                    {message.username !== params.username && (
                                    <div className={`absolute bottom-0 left-0 ml-3 w-0 h-0 ${message.username === params.username ? 'border-x-8 border-x-transparent border-t-8 border-t-blue-500' : 'border-x-8 border-x-transparent border-t-8 border-t-gray-200 dark:border-t-gray-700'}`} />
                                    )}
                                </div>
                                {message.username === params.username && (
                                    <Avatar className="w-8 h-8">
                                    <AvatarImage alt={message.username} src={message.avatarSrc} />
                                    <AvatarFallback>{message.avatarFallback}</AvatarFallback>
                                    </Avatar>
                                )}
                                </div>
                            ))}
                      </div>
                    <div className={`mt-auto ${upInput ? 'mb-20' : 'mb-0'}`}>
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