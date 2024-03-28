'use client'
import React from 'react';
import { useState } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
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
  
import { Tasks_bar } from '@/components/component/tasks_bar';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Progress } from "@/components/ui/progress"
import { TextIcon, MessageCircleIcon, PencilIcon, XIcon, UploadIcon, FileIcon} from '@/components/icons';
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Props = {
    params: {
      username: string;
      chat: string;
    };
  };

export default function YoChatSpecific({ params }: Props) {
  const [openTasks, setOpenTasks] = useState<boolean>(false);
  const [upInput, setUpInput] = useState<boolean>(false);
  const personas = [
    { value: 'mikejones', label: 'mikejones' },
    { value: 'Person 2', label: 'Person 2' },
    { value: 'Person 3', label: 'Person 3' }
  ];
  const status = [
    { value: 0, label: 'Asignada' },
    { value: 25, label: 'Haciendo' },
    { value: 50, label: 'Hecha' },
    { value: 75, label: 'Revisada' },
    { value: 100, label: 'Archivada' }
  ];
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
            <main className="flex flex-1 flex-col gap-4 p-4 pr-0 mr-0 md:p-6  md:pr-0 max-h-full overflow-y-hidden">
            {openTasks ? (
                <>
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
                            <Tasks_bar params={params} />
                        </section>
                    </section>
                </>
                    
            ) : (
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
                      </div>
            )}
            <div className={`mt-auto pr-6 ${upInput ? 'mb-20' : 'mb-0'}`}>
                        
                <form className="flex items-center gap-4">
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <PencilIcon className="h-4 w-4 ml-4"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='flex flex-col ml-14 mb-2'>
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {/* Foto/video nuevo */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    Foto/Video
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen overflow-y-auto'>
                                <DialogHeader>
                                <DialogTitle>Subir fotos</DialogTitle>
                                <DialogDescription>
                                    <div className="space-y-2">
                                    <div key="1" className="border-dashed border-2 rounded-md p-6 w-full max-w-md mx-auto relative">
                                        <Button className="absolute top-2 right-2" variant="ghost">
                                            <XIcon className="h-4 w-4" />
                                        </Button>
                                        <div className="flex flex-col items-center space-y-4">
                                            <UploadIcon className="h-8 w-8 text-gray-400" />
                                            <p className="text-gray-500 dark:text-gray-400">Drag & drop your files here, or</p>
                                            <Label className="cursor-pointer" htmlFor="file-upload">
                                            <Button variant="outline">Browse</Button>
                                            </Label>
                                            <Input className="sr-only" id="file-upload" multiple type="file" />
                                        </div>
                                        <div className="mt-6 border-t pt-6">
                                            <h3 className="text-lg font-semibold">Selected Files:</h3>
                                            <div className="mt-4 space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                <img
                                                    alt="file1"
                                                    className="object-cover rounded-full hover:scale-150 transition-transform duration-200"
                                                    height={24}
                                                    src="/placeholder.svg"
                                                    style={{
                                                    aspectRatio: "24/24",
                                                    objectFit: "cover",
                                                    }}
                                                    width={24}
                                                />
                                                <span className="font-medium">file1.jpg</span>
                                                <span className="text-sm text-gray-500 ml-2">(1.2 MB)</span>
                                                </div>
                                                <Button size="sm" variant="ghost">
                                                Remove
                                                </Button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                <img
                                                    alt="file2"
                                                    className="object-cover rounded-full"
                                                    height={24}
                                                    src="/placeholder.svg"
                                                    style={{
                                                    aspectRatio: "24/24",
                                                    objectFit: "cover",
                                                    }}
                                                    width={24}
                                                />
                                                <span className="font-medium">file2.png</span>
                                                <span className="text-sm text-gray-500 ml-2">(2.5 MB)</span>
                                                </div>
                                                <Button size="sm" variant="ghost">
                                                Remove
                                                </Button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                <FileIcon className="h-6 w-6 text-gray-400" />
                                                <span className="font-medium">file3.pdf</span>
                                                <span className="text-sm text-gray-500 ml-2">(500 KB)</span>
                                                </div>
                                                <Button size="sm" variant="ghost">
                                                Remove
                                                </Button>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Button>Submit Files</Button>
                                        </div>
                                        </div>
                                    </div>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/* Documento nuevo */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    Documento
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen overflow-y-auto'>
                                <DialogHeader>
                                <DialogTitle>Nueva Tarea</DialogTitle>
                                <DialogDescription>
                                    <div className="space-y-2">
                                        {/* <h4 className="font-medium leading-none">Edit Task</h4> */}
                                        <div className="grid gap-2">
                                        <div className="space-y-1">
                                        <Label htmlFor="person-assigned">Persona asignada</Label>
                                        <Select defaultValue={params.chat}>
                                            <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select person" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {personas.map((item, index) => (
                                                    <SelectItem key={`${index}-persona`} value={item.value}>{item.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="task-description">Descripción</Label>
                                        <Textarea
                                            className="h-32"
                                            defaultValue="This is a placeholder task description. It's meant to give you an idea of how this component will look with your actual task description."
                                            id="task-description"
                                        />
                                        </div>
                                        <div className="space-y-1">
                                        <Label className="flex justify-between items-center w-full" htmlFor="task-status">
                                            Progreso
                                            <Progress className="w-1/2" value={44} />
                                        </Label>
                                        <Select defaultValue='0'>
                                            <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                                <SelectContent>
                                                    {status.map(item => (
                                                        <SelectItem key={item.value} value={item.value.toString()}>{item.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                        </Select>
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="delivery-date">Fecha límite</Label>
                                        <Input className="w-full" id="delivery-date" type="date" />
                                        </div>
                                        <Button className="w-full">Asignar tarea</Button>
                                    </div>
                                    </div>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/* Pago nuevo */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    Pago
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen overflow-y-auto'>
                                <DialogHeader>
                                <DialogTitle>Nueva Tarea</DialogTitle>
                                <DialogDescription>
                                    <div className="space-y-2">
                                        {/* <h4 className="font-medium leading-none">Edit Task</h4> */}
                                        <div className="grid gap-2">
                                        <div className="space-y-1">
                                        <Label htmlFor="person-assigned">Persona asignada</Label>
                                        <Select defaultValue={params.chat}>
                                            <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select person" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {personas.map((item, index) => (
                                                    <SelectItem key={`${index}-persona`} value={item.value}>{item.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="task-description">Descripción</Label>
                                        <Textarea
                                            className="h-32"
                                            defaultValue="This is a placeholder task description. It's meant to give you an idea of how this component will look with your actual task description."
                                            id="task-description"
                                        />
                                        </div>
                                        <div className="space-y-1">
                                        <Label className="flex justify-between items-center w-full" htmlFor="task-status">
                                            Progreso
                                            <Progress className="w-1/2" value={44} />
                                        </Label>
                                        <Select defaultValue='0'>
                                            <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                                <SelectContent>
                                                    {status.map(item => (
                                                        <SelectItem key={item.value} value={item.value.toString()}>{item.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                        </Select>
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="delivery-date">Fecha límite</Label>
                                        <Input className="w-full" id="delivery-date" type="date" />
                                        </div>
                                        <Button className="w-full">Asignar tarea</Button>
                                    </div>
                                    </div>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/* Producto nuevo */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    Producto
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen overflow-y-auto'>
                                <DialogHeader>
                                <DialogTitle>Nueva Tarea</DialogTitle>
                                <DialogDescription>
                                    <div className="space-y-2">
                                        {/* <h4 className="font-medium leading-none">Edit Task</h4> */}
                                        <div className="grid gap-2">
                                        <div className="space-y-1">
                                        <Label htmlFor="person-assigned">Persona asignada</Label>
                                        <Select defaultValue={params.chat}>
                                            <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select person" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {personas.map((item, index) => (
                                                    <SelectItem key={`${index}-persona`} value={item.value}>{item.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="task-description">Descripción</Label>
                                        <Textarea
                                            className="h-32"
                                            defaultValue="This is a placeholder task description. It's meant to give you an idea of how this component will look with your actual task description."
                                            id="task-description"
                                        />
                                        </div>
                                        <div className="space-y-1">
                                        <Label className="flex justify-between items-center w-full" htmlFor="task-status">
                                            Progreso
                                            <Progress className="w-1/2" value={44} />
                                        </Label>
                                        <Select defaultValue='0'>
                                            <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                                <SelectContent>
                                                    {status.map(item => (
                                                        <SelectItem key={item.value} value={item.value.toString()}>{item.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                        </Select>
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="delivery-date">Fecha límite</Label>
                                        <Input className="w-full" id="delivery-date" type="date" />
                                        </div>
                                        <Button className="w-full">Asignar tarea</Button>
                                    </div>
                                    </div>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/* tarea nueva */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    Tarea
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen overflow-y-auto'>
                                <DialogHeader>
                                <DialogTitle>Nueva Tarea</DialogTitle>
                                <DialogDescription>
                                    <div className="space-y-2">
                                        {/* <h4 className="font-medium leading-none">Edit Task</h4> */}
                                        <div className="grid gap-2">
                                        <div className="space-y-1">
                                        <Label htmlFor="person-assigned">Persona asignada</Label>
                                        <Select defaultValue={params.chat}>
                                            <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select person" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {personas.map((item, index) => (
                                                    <SelectItem key={`${index}-persona`} value={item.value}>{item.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="task-description">Descripción</Label>
                                        <Textarea
                                            className="h-32"
                                            defaultValue="This is a placeholder task description. It's meant to give you an idea of how this component will look with your actual task description."
                                            id="task-description"
                                        />
                                        </div>
                                        <div className="space-y-1">
                                        <Label className="flex justify-between items-center w-full" htmlFor="task-status">
                                            Progreso
                                            <Progress className="w-1/2" value={44} />
                                        </Label>
                                        <Select defaultValue='0'>
                                            <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                                <SelectContent>
                                                    {status.map(item => (
                                                        <SelectItem key={item.value} value={item.value.toString()}>{item.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                        </Select>
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="delivery-date">Fecha límite</Label>
                                        <Input className="w-full" id="delivery-date" type="date" />
                                        </div>
                                        <Button className="w-full">Asignar tarea</Button>
                                    </div>
                                    </div>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </DropdownMenuContent>
                    </DropdownMenu>
                <Input className="flex-1" placeholder="Type a message..." />
                <Button variant="outline">Send</Button>
                </form>
            </div>
            </main>
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
                    <Tasks_bar params={params} />
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
                            <DropdownMenu>
                            <DropdownMenuTrigger>
                                <PencilIcon className="h-4 w-4"/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='flex flex-col ml-2 mb-2 items-start'>
                                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {/* Nueva Foto o Video Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Foto/Video
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
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
                                {/* Nuevo Documento Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Documento
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
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
                                {/* Nuevo Pago Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Pago
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
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
                                {/* Nuevo Producto Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Producto
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
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
                                {/* Nueva Tarea Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Tarea
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
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
                            </DropdownMenuContent>
                            </DropdownMenu>
                            <Input className="flex-1" placeholder="Type a message..." />
                            <Button variant="outline">Send</Button>
                        </form>
                    </div>
                    </main>
        </div>
    </section>
  );
}