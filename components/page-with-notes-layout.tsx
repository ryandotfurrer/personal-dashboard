import NotesSection from "@/app/notes/_components/notes-section";

interface PageWithNotesLayoutProps {
  children: React.ReactNode;
}

export default function PageWithNotesLayout({ children }: PageWithNotesLayoutProps) {
  return (
    <main className="p-4 lg:p-6">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6 xl:gap-8 items-start">
        <div>{children}</div>
        <aside className="xl:sticky xl:top-[4.5rem]">
          <NotesSection />
        </aside>
      </div>
    </main>
  );
}
