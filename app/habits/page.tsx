import HabitsSection from "./_components/habits-section";
import PageHeader from "@/components/page-header";
// @ts-expect-error - Direct import for performance
import CalendarCheck from "lucide-react/dist/esm/icons/calendar-check";
import PageWithNotesLayout from "@/components/page-with-notes-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "habits",
};

export default function HabitsPage() {
  return (
    <>
      <PageHeader icon={CalendarCheck} title="Habits" />
      <PageWithNotesLayout>
        <HabitsSection mode="active" />
      </PageWithNotesLayout>
    </>
  );
}
