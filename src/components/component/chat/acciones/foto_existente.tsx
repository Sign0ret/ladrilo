'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { AspectRatio } from "@/components/ui/aspect-ratio"

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Xzhcp9mLTpW
 */

type Props = {
  fotos: {
    url: string;
    description: string;
  }[],
  elegida: string;
};

export function Foto_existente({ fotos, elegida }: Props) {
    return (
        // <div className="grid gap-4 ">
            <Carousel>
                <CarouselContent>
                    {fotos.map((foto, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card >
                                <CardContent>
                                {/* <AspectRatio ratio={5/4} className='flex justify-center items-center h-screen' > */}
                                <AspectRatio ratio={5/4} className='flex justify-center items-center' >
                                    <img
                                        src={foto.url}
                                        alt="Photo by Drew Beamer"
                                        // fill
                                        className="h-auto max-w-full rounded-lg"
                                    />
                                </AspectRatio>
                                {/* <span className="text-4xl font-semibold">{foto.url}</span> */}
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            

      
    )
}