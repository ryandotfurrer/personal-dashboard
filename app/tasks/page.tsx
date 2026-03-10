import PageHeader from "@/components/page-header";
// @ts-expect-error - Direct import for performance
import ListTodo from "lucide-react/dist/esm/icons/list-todo";
import PageWithNotesLayout from "@/components/page-with-notes-layout";
import type { Metadata } from "next";
import TasksSection from "./_components/tasks-section";

export const metadata: Metadata = {
  title: "tasks",
};

export default function TasksPage() {
  return (
    <>
      <PageHeader icon={ListTodo} title="Tasks" />
      <PageWithNotesLayout>
        <TasksSection />
      </PageWithNotesLayout>
    </>
  );
}
