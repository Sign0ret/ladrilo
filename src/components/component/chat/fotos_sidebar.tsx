'use client'
import React, { useState } from 'react';
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
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
  
import { ScrollArea } from "@/components/ui/scroll-area"
import { Foto_existente } from './acciones/foto_existente';
import { Foto_nueva } from './acciones/foto_nueva';

type Props = {
  params: {
    username: string;
    chat: string;
  };
};

export function Fotos_sidebar({ params }: Props) {
  // Tasks
  const images = [
    { url: '/next.svg', description: 'This is a description of the task.' },
    { url: '/vercel.svg', description: 'This is a description of the task.' },    
    { url: '/login_white.jpg', description: 'This is a description of the task.' },    
    { url: '/login_white.jpg', description: 'This is a description of the task.' },
    { url: '/celscreen.jpg', description: 'This is a description of the task.' },        
  ];
  return (
    <section>
        <CardContent className='px-2'>
            <div key="1" className="flex flex-col h-full w-64">
                <ScrollArea className="flex-1 py-2">
                <div className="px-4 space-y-4">
                    {images.map((image, index) => (
                        <Dialog key={`${index}-foto`}>
                        <AspectRatio ratio={5/4} className="bg-muted">
                        <DialogTrigger> 
                        <Image
                                src={image.url}
                                alt="Photo by Drew Beamer"
                                fill
                                className="rounded-md object-cover"
                            />
                        </DialogTrigger>
                        </AspectRatio>
                        <DialogContent>
                            <DialogHeader>
                            {/* <DialogTitle>Imagen {index}</DialogTitle> */}
                            <DialogDescription>
                              <Foto_existente fotos={images} elegida={image.url}/>
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                        </Dialog>
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
                        Subir Media
                    </Button>
                </DialogTrigger>
                <DialogContent className='max-h-screen overflow-y-auto'>
                  <DialogHeader>
                  <DialogTitle>Subir fotos</DialogTitle>
                  <DialogDescription>
                      <Foto_nueva params={params} />
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
            <DrawerContent className='max-h-screen overflow-y-auto'>
                  <DrawerHeader>
                  <DrawerTitle>Subir fotos</DrawerTitle>
                  <DrawerDescription>
                    <Foto_nueva params={params} />
                  </DrawerDescription>
                  </DrawerHeader>
              </DrawerContent>
          </Drawer>
        </CardFooter>
    </section>
  )
}