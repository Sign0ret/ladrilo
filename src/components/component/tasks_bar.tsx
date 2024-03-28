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
import { TextIcon } from '../icons';

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
      case 'productos':
      content = <Tareas_sidebar />;
      break;
    case 'pagos':
      content = <Fotos_sidebar />;
      break;
    case 'acciones':
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
                <ToggleGroupItem value="acciones">A</ToggleGroupItem>
                <ToggleGroupItem value="fotos">F</ToggleGroupItem>
                <ToggleGroupItem value="documentos">D</ToggleGroupItem>
                <ToggleGroupItem value="productos">P</ToggleGroupItem>
                <ToggleGroupItem value="pagos">$</ToggleGroupItem>
              </ToggleGroup>

            </CardTitle>
            {/* <CardDescription></CardDescription> */}
        </CardHeader>
          {content}
        
    </Card>
  )
}