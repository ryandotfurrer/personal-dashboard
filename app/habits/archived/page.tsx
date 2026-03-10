import HabitsSection from "../_components/habits-section";
import PageHeader from "@/components/page-header";
// @ts-expect-error - Direct import for performance
import Archive from "lucide-react/dist/esm/icons/archive";
import PageWithNotesLayout from "@/components/page-with-notes-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "archived habits",
};

export default function ArchivedHabitsPage() {
  return (
    <>
      <PageHeader icon={Archive} title="Archived Habits" />
      <PageWithNotesLayout>
        <HabitsSection mode="archived" />
      </PageWithNotesLayout>
    </>
  );
}
