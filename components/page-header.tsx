import { Kbd } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
}

export default function PageHeader({ icon: Icon, title }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger render={<SidebarTrigger />} />
          <TooltipContent>
            <p>Toggle Sidebar <Kbd>CMD+S</Kbd></p>
          </TooltipContent>
        </Tooltip>
        <div className="flex h-5 items-center">
          <Separator orientation="vertical" />
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <Icon className="size-4 text-primary" aria-hidden="true" />
        <h1 className="font-display text-[15px] font-bold tracking-tight text-foreground">
          {title}
        </h1>
      </div>
    </header>
  );
}
