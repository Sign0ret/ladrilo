'use client'
import { useState } from 'react';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
export default function ChatLayout({
    children,
    params, // will be a page or nested layout
  }: {
    children: React.ReactNode,
    params: { username: string }
  }) {
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const [open, setOpen] = useState<boolean>(true);
    const chatData = [
        { username: 'JohnDoe', name: 'John Doe', message: 'Hey, hows it going?...', badge: 3 },
        { username: 'JaneDoe', name: 'Jane Doe', message: 'Can you send me the file?...', badge: 5 },
        { username: 'mikejones', name: 'Mike Jones', message: 'Lets meet tomorrow at...', badge: 2 }
      ];
    return (
      <section>
        {open ? (
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
                    <Button className="hidden lg:flex ml-2 h-8 w-8" size="icon" variant="outline" onClick={() => setOpen(false)}>
                        <XIcon className="h-4 w-4" />
                        <span className="sr-only">Hide sidebar</span>
                    </Button>
    
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <div className="px-4 mb-4 flex items-center gap-2">
                        <Input placeholder="Search contacts..." />
                    </div>
                    <div className="px-4 mb-4 flex items-center gap-2 lg:max-w-[280px]">

                    <Select>
                        <SelectTrigger className='max-w-[150px] lg:max-w-[120px]'>
                            <SelectValue placeholder="filtrar casa" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>North America</SelectLabel>
                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                            <SelectLabel>Europe & Africa</SelectLabel>
                            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                            <SelectItem value="cet">Central European Time (CET)</SelectItem>
                            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                            <SelectItem value="west">
                                Western European Summer Time (WEST)
                            </SelectItem>
                            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                            <SelectLabel>Asia</SelectLabel>
                            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                            <SelectItem value="ist_indonesia">
                                Indonesia Central Standard Time (WITA)
                            </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                            <SelectLabel>Australia & Pacific</SelectLabel>
                            <SelectItem value="awst">
                                Australian Western Standard Time (AWST)
                            </SelectItem>
                            <SelectItem value="acst">
                                Australian Central Standard Time (ACST)
                            </SelectItem>
                            <SelectItem value="aest">
                                Australian Eastern Standard Time (AEST)
                            </SelectItem>
                            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                            <SelectLabel>South America</SelectLabel>
                            <SelectItem value="art">Argentina Time (ART)</SelectItem>
                            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className='max-w-[150px] lg:max-w-[120px]'>
                                <SelectValue placeholder="filtrar rol" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                    </div>
                    <nav className="grid items-start px-4 text-sm font-medium ">
                        {chatData.map((chat, index) => (
                            <Link
                            key={index}
                            className={`flex items-center gap-3 rounded-lg ${selectedChat === index ? 'bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50' : 'px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
                            href={`/yo/${params.username}/chat/${chat.username}`}
                            onClick={() => setSelectedChat(index)}
                            >
                            <Avatar className="z-0"> {/* Change z-[-20] to z-0 */}
                                <AvatarImage alt={`@${chat.username}`} src="/placeholder-avatar.jpg" />
                                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div>{chat.name}</div>
                                <div className="text-xs text-gray-400">{chat.message}</div>
                            </div>
                            <Badge className="ml-auto">{chat.badge}</Badge>
                            </Link>
                        ))}
                    </nav>
                </div>
                </div>
            </div>

            <section >
              {children}
            </section>
            </div>
        ) : (
            <section>
            <div className="hidden lg:grid max-h-full h-4/5 lg:min-h-screen w-full lg:grid-cols-[40px_1fr]  ">
                <div className="flex h-full max-h-screen flex-col gap-2 ">
                <div className="flex h-[60px] items-center border-b bg-gray-100/40 dark:bg-gray-800/40">
                    <Button className="ml-auto h-8 w-8" size="icon" variant="outline" onClick={() => setOpen(true)}>
                        <MessageCircleIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                </div>
            <section >
              {children}
            </section>
            </div>
            <div className="grid lg:hidden max-h-full h-4/5 lg:min-h-screen w-full lg:grid-cols-[280px_1fr]  ">
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
                        <Button className="hidden lg:flex ml-2 h-8 w-8" size="icon" variant="outline" onClick={() => setOpen(false)}>
                            <XIcon className="h-4 w-4" />
                            <span className="sr-only">Hide sidebar</span>
                        </Button>
        
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <div className="px-4 mb-4">
                            <Input placeholder="Search contacts..." />
                        </div>
                        
                        <nav className="grid items-start px-4 text-sm font-medium ">
                            {chatData.map((chat, index) => (
                                <Link
                                key={index}
                                className={`flex items-center gap-3 rounded-lg ${selectedChat === index ? 'bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50' : 'px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
                                href={`/yo/${params.username}/chat/${chat.username}`}
                                onClick={() => setSelectedChat(index)}
                                >
                                <Avatar className="z-0"> {/* Change z-[-20] to z-0 */}
                                    <AvatarImage alt={`@${chat.username}`} src="/placeholder-avatar.jpg" />
                                    <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div>{chat.name}</div>
                                    <div className="text-xs text-gray-400">{chat.message}</div>
                                </div>
                                <Badge className="ml-auto">{chat.badge}</Badge>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            <section >
              {children}
            </section>
            </div>
            </section>
        )}
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

  function HomeIcon({ className, ...rest }: IconProps) {
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  function PersonStandingIcon({ className, ...rest }: IconProps) {
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
        <circle cx="12" cy="5" r="1" />
        <path d="m9 20 3-6 3 6" />
        <path d="m6 8 6 2 6-2" />
        <path d="M12 10v4" />
      </svg>
    )
  }
  