'use client'
import React, { useState } from 'react';

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Xzhcp9mLTpW
 */
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tareas_sidebar } from './chat/tareas_sidebar';
import { Documentos_sidebar } from './chat/documentos_sidebar';
import { Fotos_sidebar } from './chat/fotos_sidebar';

export function Tasks_bar() {
  // Options
  const [value, setValue] = React.useState('tareas');
  // Fotos

  // Documentos

  // otros

  // Switch
  let content;
  switch (value) {
    case 'tareas':
      content = <Tareas_sidebar />;
      break;
    case 'fotos':
      content = <Fotos_sidebar />;
      break;
    case 'documentos':
      content = <Documentos_sidebar />;
      break;
    default:
      content = <Tareas_sidebar />;
      break;
  }
  return (
    <Card className="border-none shadow-none min-w-full max-h-full min-h-full overflow-y-auto no-scrollbar">
        <CardHeader className='sticky top-0 z-10 bg-inherit'>
            <CardTitle>
              <ToggleGroup
                type="single" 
                value={value}
                onValueChange={(value) => {
                  if (value) setValue(value);
                }}
              >
                <ToggleGroupItem value="tareas"><TextIcon className="h-4 w-4" /></ToggleGroupItem>
                <ToggleGroupItem value="fotos">F</ToggleGroupItem>
                <ToggleGroupItem value="documentos">D</ToggleGroupItem>
              </ToggleGroup>

            </CardTitle>
            {/* <CardDescription></CardDescription> */}
        </CardHeader>
        {content}
    </Card>
  )
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
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

