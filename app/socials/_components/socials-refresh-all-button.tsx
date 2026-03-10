"use client";

import { Button } from "@/components/ui/button";
// @ts-expect-error - Direct import for performance
import RefreshCw from "lucide-react/dist/esm/icons/refresh-cw";
// @ts-expect-error - Direct import for performance
import Check from "lucide-react/dist/esm/icons/check";
// @ts-expect-error - Direct import for performance
import AlertCircle from "lucide-react/dist/esm/icons/alert-circle";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SocialsRefreshAllButtonProps {
  refreshingAll: boolean;
  refreshingPlatform: string | null;
  refreshAllResult: {
    successful: string[];
    failed: Array<{ platform: string; error: string }>;
    total: number;
  } | null;
  onRefreshAll: () => void;
}

export function SocialsRefreshAllButton({
  refreshingAll,
  refreshingPlatform,
  refreshAllResult,
  onRefreshAll,
}: SocialsRefreshAllButtonProps) {
  const hasErrors = (refreshAllResult?.failed.length ?? 0) > 0;
  const isAllSuccess =
    refreshAllResult !== null &&
    refreshAllResult.failed.length === 0 &&
    refreshAllResult.successful.length > 0;

  const iconClass = cn("size-[1.2em] transition-opacity duration-200");

  const buttonIcon = refreshingAll ? (
    <RefreshCw className={cn(iconClass, "animate-spin")} />
  ) : hasErrors ? (
    <AlertCircle className={iconClass} />
  ) : isAllSuccess ? (
    <Check className={iconClass} />
  ) : (
    <RefreshCw className={iconClass} />
  );

  return (
    <div className="flex items-center gap-4">
      {/* Success/Error Message */}
      {refreshAllResult && (
        <div className="flex items-center gap-1.5 text-sm animate-fade-slide-up">
          {hasErrors ? (
            <>
              <AlertCircle className="size-4 text-destructive" />
              <span className="text-muted-foreground">
                {refreshAllResult.failed.length} failed
              </span>
            </>
          ) : isAllSuccess ? (
            <>
              <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-muted-foreground">
                All {refreshAllResult.successful.length} refreshed
              </span>
            </>
          ) : null}
        </div>
      )}

      <AlertDialog>
        {hasErrors && (
          <AlertDialogTrigger
            render={
              <Button variant="linkInline" size="sm" className="h-auto">
                Learn more
              </Button>
            }
          />
        )}

        {/* Refresh All Button */}
        <Button
          onClick={onRefreshAll}
          disabled={refreshingAll || refreshingPlatform !== null}
          variant={hasErrors ? "destructive" : isAllSuccess ? "default" : "outline"}
          size="sm"
          data-icon="inline-start"
        >
          {buttonIcon}
          Refresh All
        </Button>

        {/* Error Details Dialog */}
        {hasErrors && refreshAllResult && (
          <AlertDialogContent size="default">
            <AlertDialogHeader>
              <AlertDialogTitle>Refresh Errors</AlertDialogTitle>
              <AlertDialogDescription>
                {refreshAllResult.failed.length} of {refreshAllResult.total}{" "}
                platforms failed to refresh.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="space-y-2 max-h-[60vh] overflow-y-auto">
              {refreshAllResult.failed.map((failure, index) => (
                <div key={`${failure.platform}-${index}`} className="rounded-md bg-muted p-3">
                  <p className="font-medium capitalize">{failure.platform}</p>
                  <pre className="text-sm text-muted-foreground whitespace-pre-wrap break-words">
                    <code>{failure.error}</code>
                  </pre>
                </div>
              ))}
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        )}
      </AlertDialog>
    </div>
  );
}
