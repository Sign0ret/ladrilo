import { ModeToggle } from "@/components/component/mode_toggle"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { TextIcon, HomeIcon, MessageCircleIcon, HelpCircleIcon, SettingsIcon } from "@/components/icons"
export default function UsernameLayout({
    children,
    params, // will be a page or nested layout
  }: {
    children: React.ReactNode,
    params: { username: string }
  }) {
    return (
      <section className="min-h-screen h-100 flex-row">
        <div className="fixed inset-x-0 bottom-0 h-20 lg:top-0 lg:left-0 lg:h-screen lg:w-20 flex lg:flex-col items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 lg:py-0 z-10">
          <div className="flex lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-4">
            <Link className="group m-5" href={`/yo/${params.username}/agenda`}>
              <TextIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              <span className="sr-only">agenda</span>
            </Link>
            <Link className="group m-5" href={`/yo/${params.username}/obra`}>
              <HomeIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              <span className="sr-only">obra</span>
            </Link>
            <Link className="group m-5" href={`/yo/${params.username}/chat`}>
              <MessageCircleIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              <span className="sr-only">chat</span>
            </Link>
            <Link className="group m-5" href={`/yo/${params.username}/catalogo`}>
              <HelpCircleIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              <span className="sr-only">catalogo</span>
            </Link>
          </div>
          <div className="flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-2 lg:mb-5">
          <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button
                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                    size="icon"
                    variant="ghost"
                >
                  <SettingsIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <span className="sr-only">Settings</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>Ajustes</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Parámetros</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </div>
        <section className="w-full lg:pl-20">
          {children}
        </section>
      </section>
    )
  }  