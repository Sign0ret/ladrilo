import React from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tarea_nueva } from './acciones/tarea_nueva';
import { Tarea_existente } from './acciones/tarea_existente';

type Props = {
  params: {
    username: string;
    chat: string;
  };
};

export function Productos_sidebar({ params }: Props) {
  const tasks = [
    { asignado: 'mikejones', mensaje: 60, descripcion: 'This is a description of the task.', fechaLimite: '', progreso: 0 },
    { asignado: 'mikejones', mensaje: 70, descripcion: 'This is a description of the task.', fechaLimite: '', progreso: 25 },
    { asignado: 'mikejones', mensaje: 80, descripcion: 'This is a description of the task.', fechaLimite: '', progreso: 50 },
  ];
  return (
    <section>
        <CardContent className='px-4 min-w-screen'>
            <div key="1" className="flex flex-col h-full w-full">
                <ScrollArea className="flex-1 py-2">
                <div className="hidden lg:grid px-2 space-y-4">
                  {/* mapeo de lo que se mapea */}
                    {tasks.map((task, index) => (
                      // Diálogo [Triger + Content]
                        <Dialog key={`${index}-task`}>
                        <DialogTrigger>
                          <div
                              className="w-full max-w-full min-w-full p-4 border rounded-lg hover:bg-gray-100 hover:shadow-xl shadow-gray-500/50 dark:hover:bg-gray-800 transition-colors duration-100 items-center"
                              style={{
                                borderBottom: "2px solid black",
                                transform: "perspective(1000px) rotateX(20deg)",
                              }}
                            >
                              <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                  <h3 className="font-medium text-lg">Task Title</h3>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {task.descripcion}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Progress value={44} />
                              </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className='max-h-screen overflow-y-auto'>
                          <DialogHeader>
                            <DialogTitle>Editar Tarea</DialogTitle>
                            <DialogDescription>
                              <Tarea_existente tarea={task} />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ))}
                </div>
                {/* mobile */}
                <div className="grid lg:hidden px-2 space-y-4">
                    {tasks.map((task, index) => (
                        <Drawer key={`${index}-task`}>
                        <DrawerTrigger>
                          <div
                              className="w-full max-w-full min-w-full p-4 border rounded-lg hover:bg-gray-100 hover:shadow-xl shadow-gray-500/50 dark:hover:bg-gray-800 transition-colors duration-100 items-center"
                              style={{
                                borderBottom: "2px solid black",
                                transform: "perspective(1000px) rotateX(20deg)",
                              }}
                            >
                              <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                  <h3 className="font-medium text-lg">Task Title</h3>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {task.descripcion}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Progress value={44} />
                              </div>
                            </div>
                        </DrawerTrigger>
                        <DrawerContent className='max-h-screen overflow-y-auto'>
                          <DrawerHeader>
                            <DrawerTitle>Editar Tarea</DrawerTitle>
                            <DrawerDescription>
                              <Tarea_existente tarea={task} />
                            </DrawerDescription>
                          </DrawerHeader>
                        </DrawerContent>
                      </Drawer>
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
                      <Tarea_nueva params={params} />
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
                <DrawerTitle>Nueva Tarea</DrawerTitle>
                <DrawerDescription>
                  <Tarea_nueva params={params} />
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button className="w-full">Asignar tarea</Button>
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