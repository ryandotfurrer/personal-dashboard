
import Socials from "@/components/socials";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
    return <div className="px-4 lg:px-8 w-full">
        <header className="flex items-center gap-4">
            <div className="">
                <SidebarTrigger />
            </div>
            <h1>Home</h1>
        </header>
        <Socials />
    </div>;
}