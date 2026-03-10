import PageHeader from "@/components/page-header";
import SocialPlatformCardSection from "./_components/social-platform-card-section";
// @ts-expect-error - Direct import for performance
import MessageCircle from "lucide-react/dist/esm/icons/message-circle";
import PageWithNotesLayout from "@/components/page-with-notes-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "socials",
};

export default function SocialsPage() {
    return (
        <>
            <PageHeader icon={MessageCircle} title="Socials" />
            <PageWithNotesLayout>
                <SocialPlatformCardSection />
            </PageWithNotesLayout>
        </>
    );
}
