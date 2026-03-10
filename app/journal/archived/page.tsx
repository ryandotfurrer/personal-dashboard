
import PageHeader from "@/components/page-header";
// @ts-expect-error - Direct import for performance
import Archive from "lucide-react/dist/esm/icons/archive";
import PageWithNotesLayout from "@/components/page-with-notes-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "archived journal",
};

export default function ArchivedJournalPage() {
    return (
        <>
            <PageHeader icon={Archive} title="Archived Journal" />
            <PageWithNotesLayout>
                <div className="rounded-xl bg-card ring-1 ring-foreground/10 shadow-xs px-4 py-6">
                    <p className="text-sm text-muted-foreground">No archived journal entries yet.</p>
                </div>
            </PageWithNotesLayout>
        </>
    );
}
