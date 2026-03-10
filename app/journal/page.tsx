import PageHeader from "@/components/page-header";
// @ts-expect-error - Direct import for performance
import NotebookText from "lucide-react/dist/esm/icons/notebook-text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "journal",
};

export default function JournalPage() {
  return (
    <>
      <PageHeader icon={NotebookText} title="Journal" />
      <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center p-8">
        <div className="flex max-w-sm flex-col items-center gap-6 text-center">
          {/* Icon */}
          <div className="relative flex size-20 items-center justify-center rounded-2xl bg-card ring-1 ring-foreground/10 shadow-xs">
            <NotebookText className="size-9 text-primary" aria-hidden="true" />
            <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: '0 8px 32px -8px oklch(from var(--primary) l c h / 0.3)' }} />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            Coming Soon
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
              Your journal,<br />your way.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A private space to reflect, process, and capture your thoughts. Long-form entries, daily prompts, and mood tracking — all in one place.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-16 bg-border/60" />

          {/* Feature list */}
          <ul className="flex flex-col gap-2 text-left text-sm text-muted-foreground">
            {[
              "Daily prompts & reflections",
              "Mood & energy tracking",
              "Private, encrypted entries",
              "Tag & search across time",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <span className="size-1.5 shrink-0 rounded-full bg-primary/60" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
