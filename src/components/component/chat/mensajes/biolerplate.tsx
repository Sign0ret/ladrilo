'use client'

import React, { useState } from 'react';
import { Notadevoz_mensaje } from './notadevoz_mensaje';
import { Documento_mensaje } from './documento_mensaje';
import { Media_mensaje } from './media_mensaje';
import { Galeria_mensaje } from './galeria_mensaje';
import { Link_mensaje } from './link_mensaje';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tarea_mensaje } from './tarea_mensaje';
import { Producto_mensaje } from './producto_mensaje';
import { Pago_mensaje } from './pago_mensaje';

type Props = {
  mensaje: {
    remitente: string;
    tiempo: string;
    mensaje: string;
    bloque: number | null;
  },
  params: {
    username: string;
    chat: string;
  };
};

export function Boilerplate_mensaje({ mensaje, params }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isCurrentUser = mensaje.remitente === params.username;

  return (
    <div className={`flex items-start gap-2.5 ${isCurrentUser ? 'justify-end' : ''} py-2`}>
      {isCurrentUser ? null : (
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
      )}
      {isCurrentUser && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button id="dropdownMenuIconButton" onClick={toggleDropdown} className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>opciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Contestar</DropdownMenuItem>
            <DropdownMenuItem>Reenviar</DropdownMenuItem>
            <DropdownMenuItem>Copiar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      <div className={`flex flex-col w-full max-w-[320px] lg:max-w-[500px] leading-1.5 p-4 border-gray-200 bg-gray-100 ${isCurrentUser ? 'rounded-s-xl rounded-se-xl' : 'rounded-e-xl rounded-es-xl'} dark:bg-gray-700`}>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{mensaje.remitente}</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{mensaje.tiempo}</span>
        </div>
        {mensaje && (() => {
          switch (mensaje.bloque) {
            case 1:
              return <Notadevoz_mensaje />;
            case 2:
              return <Documento_mensaje />;
            case 3:
              return <Media_mensaje />;
            case 4:
              return <Galeria_mensaje />;
            case 5:
              return <Link_mensaje />;
            case 6:
              return <Tarea_mensaje />;
            case 7:
              return <Producto_mensaje />;
            case 8:
              return <Pago_mensaje />;
            default:
              return null;
          }
        })()}
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{mensaje.mensaje}</p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
      </div>
      {!isCurrentUser && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button id="dropdownMenuIconButton" onClick={toggleDropdown} className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>opciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Contestar</DropdownMenuItem>
            <DropdownMenuItem>Reenviar</DropdownMenuItem>
            <DropdownMenuItem>Copiar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
