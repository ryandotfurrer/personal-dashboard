
interface SectionHeaderProps {
    title: string;
    action?: React.ReactNode;
    id?: string;
}

export default function SectionHeader({ title, action, id }: SectionHeaderProps) {
    const headingId = id || `section-header-${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 id={headingId} className="text-2xl font-semibold">
                    {title}
                </h2>
                {action}
            </div>
        </div>
    );
}