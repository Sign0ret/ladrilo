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
export function Tasks_bar() {
  return (
    <Card>
        {/* <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader> */}
        <CardContent>
        <div key="1" className="flex flex-col h-full w-64 border-l dark:border-gray-800">
          <div className="flex items-center justify-between px-4 py-2 border-b dark:border-gray-800">
            <h2 className="text-lg font-semibold">Project Chat</h2>
            <TextIcon className="h-6 w-6" />
          </div>
          <ScrollArea className="flex-1 py-2">
            <div className="px-4 space-y-4">
              <div className="flex items-start gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
                <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of the task.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex h-2 w-2 rounded-full bg-yellow-500" />
                <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of the task.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex h-2 w-2 rounded-full bg-red-500" />
                <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of the task.</p>
              </div>
            </div>
          </ScrollArea>
          <div className="px-4 py-2 border-t dark:border-gray-800">
            <Button className="w-full" size="sm">
              Add Task
            </Button>
          </div>
        </div>
        </CardContent>
        {/* <CardFooter>
            <p>Card Footer</p>
        </CardFooter> */}
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
