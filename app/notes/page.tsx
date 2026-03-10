import PageHeader from "@/components/page-header";
// @ts-expect-error - Direct import for performance
import NotepadText from "lucide-react/dist/esm/icons/notepad-text";
import PageWithNotesLayout from "@/components/page-with-notes-layout";
import type { Metadata } from "next";
import NotesByTag from "./_components/notes-by-tag";

export const metadata: Metadata = {
    title: "notes",
};

export default function NotesPage() {
    return (
        <>
            <PageHeader icon={NotepadText} title="Notes" />
            <PageWithNotesLayout>
                <NotesByTag />
            </PageWithNotesLayout>
        </>
    );
}
