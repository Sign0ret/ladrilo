'use client'
import React, { useState } from 'react';

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Xzhcp9mLTpW
 */
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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

import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

type Props = {
  params: {
    username: string;
    chat: string;
  };
};

export function Pagos_sidebar({ params }: Props) {
  // Tasks
  const [clickedTask, setClickedTask] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setClickedTask(index === clickedTask ? null : index);
  };
  const tasks = [
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'yellow-500', description: 'This is a description of the task.' },
    { color: 'red-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'yellow-500', description: 'This is a description of the task.' },
    { color: 'red-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'yellow-500', description: 'This is a description of the task.' },
    { color: 'red-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'yellow-500', description: 'This is a description of the task.' },
    { color: 'red-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'yellow-500', description: 'This is a description of the task.' },
    { color: 'red-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'yellow-500', description: 'This is a description of the task.' },
    { color: 'red-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'yellow-500', description: 'This is a description of the task.' },
    { color: 'red-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
    { color: 'yellow-500', description: 'This is a description of the task.' },
    { color: 'red-500', description: 'This is a description of the task.' },
    { color: 'green-500', description: 'This is a description of the task.' },
  ];
  return (
    <section>
        <CardContent>
            <div key="1" className="flex flex-col h-full w-64">
                <ScrollArea className="flex-1 py-2">
                <div className="px-4 space-y-4">
                {tasks.map((task, index) => (
                    <div
                    key={index}
                    className={`flex items-start gap-2 p-2 ${
                        clickedTask === index ? 'bg-gray-300' : 'hover:bg-gray-200'
                    }`}
                    onClick={() => handleClick(index)}
                    >
                    <span className={`flex h-2 w-2 rounded-full bg-${task.color}`} />
                    <input
                        type="text" 
                        className="text-sm text-gray-500 dark:text-gray-400 outline-none border-none"
                        value={task.description}
                        readOnly
                    />
                    </div>
                ))}
                </div>
                </ScrollArea>
                
            </div>
        </CardContent>
        {/* footer normal */}
        <CardFooter className='hidden lg:flex sticky bottom-0 z-10 bg-background pt-2'>
            <Dialog>
                <DialogTrigger>
                    <Button className="w-full" size="sm">
                        Nueva Tarea
                    </Button>
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
                            {/* <Select defaultValue={params.chat}>
                                <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select person" />
                                </SelectTrigger>
                                <SelectContent>
                                    {personas.map((item, index) => (
                                        <SelectItem key={`${index}-persona`} value={item.value}>{item.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select> */}
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
                            {/* <Select defaultValue='0'>
                                <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                    <SelectContent>
                                        {status.map(item => (
                                            <SelectItem key={item.value} value={item.value.toString()}>{item.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                            </Select> */}
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
        </CardFooter>
        {/* footer mobil */}
        <CardFooter className='flex lg:hidden sticky bottom-0 z-10 bg-background pt-2'>
          <Drawer>
            <DrawerTrigger>
              <Button className="w-full" size="sm">
                Nueva Tarea
              </Button>
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
        </CardFooter>
    </section>
    
  )
}