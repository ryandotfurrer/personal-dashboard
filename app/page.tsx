
import Socials from "@/components/socials";
import { Kbd } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Home } from "lucide-react";

export default function Page() {
    return (
        <div className="w-full bg-background rounded-lg">
            <header className=" py-4 text-sm border-b px-2">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Tooltip>
                            <TooltipTrigger render={
                                <SidebarTrigger />}>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Toggle Sidebar <Kbd>CMD+S</Kbd></p>
                            </TooltipContent>
                        </Tooltip>
                        <div className="flex items-center h-6">
                            <Separator orientation="vertical" />
                        </div>
                    </div>
                    <Home className="size-4" />
                    <h1>Home</h1>
                </div>
            </header>
            <main className="p-4 lg:p-6">
                <Socials />
            </main>
        </div>
    );
}